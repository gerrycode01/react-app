import { TodoItem } from "./TodoItem";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoContex } from "./TodoContext"; // Asegúrate de que el nombre coincida con el exportado
import React, { useContext } from "react";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

function App() {
  const { todos, searchedTodos, onCompleteTodo, onDeleteTodo, openModal } =
    useContext(TodoContex);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.length === 0 ? (
          <TodoItem
            key={"Vacio"}
            text={"Presiona el boton para agregar un nuevo elemento a la lista"}
            completed={false}
          />
        ) : (
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleteTodo={() => onCompleteTodo(todo.text)}
              onDeleteTodo={() => onDeleteTodo(todo.text)}
            />
          ))
        )}
      </TodoList>

      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default App;
