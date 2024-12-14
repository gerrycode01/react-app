import './App.css';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Aprender maps", completed: true},
  {text: "Domar React", completed: true},
  {text: "Llorar con la llorona", completed: true},
  {text: "Mirar platzi", completed: true}
];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={4} />
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
