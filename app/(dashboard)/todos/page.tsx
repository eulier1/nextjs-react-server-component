import TodoList from '@/components/TodoList';
import db from '@/utils/db';

console.log(process.argv);

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodoPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />{' '}
    </div>
  );
};

export default TodoPage;
