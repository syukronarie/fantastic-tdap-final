/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
import React from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from '@apollo/client';
import { useErrorHandler } from 'react-error-boundary';

import AddInput from '../AddInput/AddInput';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

import { TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../../configs/graphql/gql';

function Todo() {
  const { data, loading } = useQuery(TODOS);

  const [createTodo, { error: errorCreatingTodo }] = useMutation(CREATE_TODO, {
    refetchQueries: [TODOS, 'Todos'],
    // eslint-disable-next-line no-unused-vars
    onCompleted({ createTodo }) {
      createTodo && toast('🤝 Todo is created');
    },
  });

  const [updateTodo, { error: errorUpdatingTodo }] = useMutation(UPDATE_TODO, {
    refetchQueries: [TODOS, 'Todos'],
    onCompleted({ updateTodo }) {
      updateTodo && toast('🚀 Todo is updated');
    },
  });

  const [deleteTodo, { error: errorDeletingTodo }] = useMutation(DELETE_TODO, {
    refetchQueries: [TODOS, 'Todos'],
    onCompleted({ deleteTodo }) {
      deleteTodo && toast('🔥 Todo is deleted');
    },
  });

  // if (errorCreatingTodo) return toast.error(`Creating todo error! ${errorCreatingTodo.message}`);
  if (errorUpdatingTodo) return toast.error(`Updating todo error! ${errorUpdatingTodo.message}`);
  if (errorDeletingTodo) return toast.error(`Deleting todo error! ${errorDeletingTodo.message}`);

  useErrorHandler(errorCreatingTodo);

  return (
    <div className="todo">
      <Header title="Todo" />
      <AddInput createTodo={createTodo} />
      {loading ? (
        <h1>please wait a second...</h1>
      ) : (
        <TodoList todos={data.todos} updateTodos={updateTodo} deleteTodo={deleteTodo} />
      )}
    </div>
  );
}

export default Todo;
