import { defaultTodos } from "../defaultTodos";
import React, { useState } from "react";

const TodoContex = React.createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const texto = todo.text.toLowerCase();
    const filtro = searchValue.toLocaleLowerCase();
    return texto.includes(filtro);
  });

  const onCompleteTodo = (text) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.text === text);
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const onDeleteTodo = (text) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.text === text);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (newTodoValue) => {
    const newTodos = [...todos];
    newTodos.push({ text: newTodoValue.trim(), completed: false });
    setTodos(newTodos);
  };

  return (
    <TodoContex.Provider
      value={{
        todos,
        completedTodos,
        totalTodos,
        searchedTodos,
        searchValue,
        openModal,
        setOpenModal,
        setSearchValue,
        onCompleteTodo,
        onDeleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContex.Provider>
  );
}

export { TodoContex, TodoProvider };
