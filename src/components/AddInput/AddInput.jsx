/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import './AddInput.css';

function AddInput({ createTodo }) {
  const [todo, setTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo) return;

    createTodo({
      variables: {
        todo: {
          title: todo,
          completed: false,
        },
      },
    });

    setTodo('');
  };

  return (
    <form className="input-container" onSubmit={addTodo}>
      <input className="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a new task here..." />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default AddInput;
