import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";
import TodoModel from "../../services/TodoService";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!todo) return;
    const id = v4();
    const task = todo;
    const completed = false;

    const newTodo = new TodoModel(id, task, completed);

    let updatedTodos = [...todos, newTodo.getTodo()];
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
