import { TodoItem } from '.';

export const TodosGrid = () => {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      <TodoItem />
    </div>
  );
};
