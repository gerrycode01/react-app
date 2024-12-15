import { TodoItem } from "./TodoItem";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoContex } from "./TodoContext"; // Asegúrate de que el nombre coincida con el exportado
import React, { useContext } from "react";

function App() {
  // Utiliza useContext con el nombre correcto del contexto, TodoContex
  const { todos, searchedTodos, onCompleteTodo, onDeleteTodo } =
    useContext(TodoContex);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.length === 0 ? (
          <TodoItem key={"Vacio"} text={"Vacio"} completed={false} />
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
    </>
  );
}

export default App;
