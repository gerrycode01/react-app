import "./TodoItem.css";

function TodoItem({ text, completed, onCompleteTodo, onDeleteTodo }) {
  return (
    <li className="TodoItem">
      <span
        onClick={onCompleteTodo}
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span onClick={onDeleteTodo} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
export { TodoItem };
