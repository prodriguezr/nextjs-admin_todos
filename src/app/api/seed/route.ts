import prisma from 'AdminTodos/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Mind Gem', completed: true },
      { description: 'Space Gem' },
      { description: 'Reality Gem' },
      { description: 'Power Gem' },
      { description: 'Time Gem' },
      { description: 'Soul Gem' },
    ],
  });
  //   const todo = await prisma.todo.create({
  //     data: {
  //       description: 'Soul Gem',
  //       completed: true,
  //     },
  //   });

  //   console.log(todo);

  return NextResponse.json({ message: 'Seed executed' });
}
