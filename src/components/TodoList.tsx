import React from "react";
import Todo from "./Todo";
import { TTodo } from "../types";

type TodoListProps = {
  todos: TTodo[];
  handleUpdateTodo: (todo: string, id: number) => void;
  handlePatchTodo: (isCompleted: boolean, id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  handleUpdateTodo,
  handlePatchTodo,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <section className="todos flex flex-col">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handlePatchTodo={handlePatchTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
      {!todos.length && <p style={{ textAlign: "center" }}>No todos yet</p>}
    </section>
  );
}
