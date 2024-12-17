'use client';
import { useState } from 'react';

const TodoForm = () => {
  console.log(window);

  const [name, setName] = useState('Joe');

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoForm;
