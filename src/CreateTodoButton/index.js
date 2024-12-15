import React from "react";
import "./CreateTodoButton.css";
import { TodoContex } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContex);

  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
