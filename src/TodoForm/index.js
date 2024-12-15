import React from "react";
import { TodoContex } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContex);

  const [newTodoValue, setnewTodoValue] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setnewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Contestarle a Yohana"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
