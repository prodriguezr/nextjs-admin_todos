import { NextResponse } from 'next/server';
import * as yup from 'yup';

import prisma from 'AdminTodos/lib/prisma';
import { Todo } from '@prisma/client';

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findFirst({
    where: {
      id,
    },
  });
};

export async function GET(request: Request, { params: { id } }: Segments) {
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      {
        message: `Todo with the id '${id}' is not found`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ todo });
}

const putSchema = yup.object({
  completed: yup.boolean().optional(),
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params: { id } }: Segments) {
  const findTodo = await getTodo(id);

  if (!findTodo) {
    return NextResponse.json(
      {
        message: `Todo with the id '${id}' is not found`,
      },
      { status: 404 }
    );
  }

  try {
    const { completed, description } = await putSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.update({
      where: { id },
      data: { completed, description },
    });

    return NextResponse.json({ todo });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
  }
}
