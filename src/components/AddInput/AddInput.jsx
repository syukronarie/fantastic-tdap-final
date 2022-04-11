import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <form className="input-container" onSubmit={addTodo}>
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default AddInput;
