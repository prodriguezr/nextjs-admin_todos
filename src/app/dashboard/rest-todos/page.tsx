import prisma from 'AdminTodos/lib/prisma';
import { TodosGrid } from 'AdminTodos/todos/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Todo's List",
  description: "List of all todo's in the DB",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return <TodosGrid todos={todos} />;
}
