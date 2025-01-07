import { newTodo } from '../utils/actions';

const TodoForm = () => {
  return (
    <form action={newTodo}>
      <label htmlFor="content">Name</label>
      <input id="content" name="content" type="text" />
      <button type="submit">New Todo</button>
    </form>
  );
};

export default TodoForm;
