import { TodosGrid } from 'AdminTodos/todos/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Todo's List",
  description: "List of all todo's in the DB",
};

export default function RestTodosPage() {
  return <TodosGrid />;
}
