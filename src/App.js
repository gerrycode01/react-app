import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Aprender maps", completed: false },
  { text: "Domar React", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Mirar platzi", completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
