import "./App.css";
import React, { useState, useEffect } from "react";
import AddTodoInput from "./components/AddTodoInput";
import TodoList from "./components/TodoList";
import {
  addTodo,
  deleteTodo,
  getTodos,
  patchTodo,
  updateTodo,
} from "./services";

export type TTodo = {
  title: string;
  isCompleted: boolean;
  id: number;
};

// export interface ITodo {
//   todos: TTodo[];
// }

function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const fetchData = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleAddTodo = async (todo: string) => {
    await addTodo(todo);
    fetchData();
  };

  const handleUpdateTodo = async (todo: string, id: number) => {
    await updateTodo(todo, id);
    fetchData();
  };

  const handlePatchTodo = async (isCompleted: boolean, id: number) => {
    await patchTodo(isCompleted, id);
    fetchData();
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchData();
  };

  const handleClearTodos = async () => {
    for (let todo of todos) {
      if (todo.isCompleted) {
        await deleteTodo(todo.id);
      }
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <AddTodoInput
        handleAddTodo={handleAddTodo}
        handleClearTodos={handleClearTodos}
      />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handlePatchTodo={handlePatchTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
