import { Todo } from '@prisma/client';
import prisma from 'AdminTodos/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const take = Number(searchParams.get('take') ?? '10');
  const skip = Number(searchParams.get('skip') ?? '0');

  if (isNaN(take))
    return NextResponse.json(
      { message: 'The take value must be a number' },
      { status: 400 }
    );

  if (isNaN(skip))
    return NextResponse.json(
      { message: 'The skip value must be a number' },
      { status: 400 }
    );

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json({
    todos,
    message: 'List of todos generated',
  });
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false), //!TODO: Show something interesting
});

export async function POST(request: Request) {
  try {
    const { description, completed } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({
      data: { description, completed },
    });

    return NextResponse.json({ todo });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      if (error.errors.length === 1)
        return NextResponse.json({ message: error.errors }, { status: 400 });

      return NextResponse.json({ messages: error.errors }, { status: 400 });
    }
  }
}
