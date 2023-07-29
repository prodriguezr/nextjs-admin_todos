'use client';

import { Todo } from '@prisma/client';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  // toggleComplete: (id: string, completed: boolean) => Promise<Todo>;
}

export const TodoItem = ({
  todo: { completed, description, id, createdAt, updatedAt },
}: Props) => {
  return (
    <div
      // onClick={() => toggleComplete(id, !completed)}
      onClick={() => {}}
      className={`${completed ? 'todoDone' : 'todoPending'}`}
    >
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            completed ? 'bg-blue-100' : 'bg-red-100'
          } `}
        >
          {completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className='text-center sm:text-left'>{description}</div>
      </div>
    </div>
  );
};
