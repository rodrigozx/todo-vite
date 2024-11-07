const TodoItem = ({ index, todo, toggleCompleted, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span
        className={
          todo.isCompleted ? "todo-item-text-completed" : "todo-item-text"
        }
      >
        {todo.text}
      </span>
      <span className="todo-item-buttons">
        <button
          onClick={() => {
            toggleCompleted(index);
          }}
        >
          {todo.isCompleted ? "✅" : "🆕"}
        </button>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          ❌
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
