import { TodoContex } from "../TodoContext";
import "./TodoCounter.css";
import React from "react";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContex);

  return totalTodos === completedTodos ? (
    <h1 className="TodoCounter"> Completado</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { TodoCounter };
