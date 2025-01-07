import Todo from './Todo';

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id}></Todo>);
};

export default TodoList;
