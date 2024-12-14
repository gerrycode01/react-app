import { use, useState } from 'react';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Aprender maps", completed: false},
  {text: "Domar React", completed: true},
  {text: "Llorar con la llorona", completed: false},
  {text: "Mirar platzi", completed: false}
];

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
