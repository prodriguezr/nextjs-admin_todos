import { Todo } from '@prisma/client';

export const toggleComplete = async (
  id: string,
  completed: boolean
): Promise<Todo | void> => {
  const body = { completed };

  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());

  console.log({ todo });

  return todo;
};
