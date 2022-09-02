import React, { useState } from "react";
import { TTodo } from "../App";

type TodoProps = {
  todo: TTodo;
  handleUpdateTodo: (todo: string, id: number) => void;
  handlePatchTodo: (isCompleted: boolean, id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export default function Todo({
  todo,
  handleUpdateTodo,
  handlePatchTodo,
  handleDeleteTodo,
}: TodoProps) {
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onClickUpdate = (todo: TTodo) => {
    if (isEditing) {
      // update todo in db if in editing mode
      handleUpdateTodo(newTodo, todo.id);
      setIsEditing(false);
      return;
    }
    // toggle editing mode and set current todo value in state
    setNewTodo(todo.title);
    setIsEditing(true);
  };

  return (
    <div
      className={`todo__wrapper flex space-between align-center ${
        todo.isCompleted && "todo__isCompleted"
      }`}
    >
      {isEditing && (
        <input
          type="text"
          className="text-input"
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
      )}
      {!isEditing && (
        <p
          className={`todo__paragraph`}
          onClick={() => handlePatchTodo(!todo.isCompleted, todo.id)}
        >
          {todo.title}
        </p>
      )}
      <div>
        <button className="button blue" onClick={() => onClickUpdate(todo)}>
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="EditIcon"
            aria-label="fontSize small"
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </button>
        <button
          className="button red"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="DeleteIcon"
            aria-label="fontSize small"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
