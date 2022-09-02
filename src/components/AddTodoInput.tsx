import React, { useState } from "react";

type AddTodoProps = {
  handleAddTodo: (todo: string) => void;
  handleClearTodos: () => void;
};

export default function AddTodoInput({
  handleAddTodo,
  handleClearTodos,
}: AddTodoProps) {
  const [todo, setTodo] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);

    setTodo("");
  };

  const onClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleClearTodos();
  };

  return (
    <section>
      <form className="input__wrapper flex justify-center" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            className="text-input"
            value={todo}
            onChange={({ target }) => setTodo(target.value)}
          />
        </div>
        <div>
          <input type="submit" className="button__submit" value="submit" />
          <button className="button__submit" onClick={(e) => onClear(e)}>
            clear
          </button>
        </div>
      </form>
    </section>
  );
}
