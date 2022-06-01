const parseRawTodo = (array) => {
  return array.map((data) => {
    return {
      id: data.id,
      task: data.task,
      completed: data.completed
    };
  });
};

class TodoModel {
  constructor(id, task, completed) {
    this.id = id;
    this.task = task;
    this.completed = completed;
  }

  getTodo() {
    return {
      id: this.id,
      task: this.task,
      completed: this.completed
    };
  }

  getTodos(todos) {
    return parseRawTodo(todos);
  }

  async editTodo() {}
}

const newTodo = new TodoModel(12, "Do lazy time", false);
const todo = newTodo.getTodo();

const arrTodos = [
  { id: 1, task: "task1", completed: true },
  { id: 2, task: "task2", completed: false },
  { id: 3, task: "task3", completed: true }
];

const todos = newTodo.getTodos(arrTodos);

console.log(todo);

console.log(todos);

// export default TodoModel;
