/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import TodoFooter from '../TodoFooter/TodoFooter';
import './TodoList.css';

function TodoList({ todos, updateTodos, deleteTodo }) {
  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todos.map((todo) => (
            <div className="todo-fragment" key={todo.id}>
              <div
                className={`todo-item ${todo.completed && 'todo-item-active'}`}
                onClick={() =>
                  updateTodos({
                    variables: {
                      updateTodo: {
                        id: todo.id,
                        completed: !todo.completed,
                        updatedat: Date.toLocaleString(),
                      },
                    },
                  })
                }
              >
                {todo.title}
              </div>
              <button className="delete-btn" onClick={() => deleteTodo({ variables: { deleteTodoId: todo.id } })}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
}

export default TodoList;
