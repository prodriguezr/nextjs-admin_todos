'use client';

import { Todo } from '@prisma/client';

import { TodoItem } from '.';
import * as todosApi from '../services';
import { useRouter } from 'next/navigation';

interface Props {
  todos: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const toggleComplete = async (
    id: string,
    completed: boolean
  ): Promise<Todo | void> => {
    const todo = await todosApi.toggleComplete(id, completed);

    console.log(id, completed);
    router.refresh();
  };

  return (
    <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
      {todos.map((todo) => (
        // <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
