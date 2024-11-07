const TodoForm = ({ addTodo }) => {
  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.todo.value;
        if (text) {
          addTodo(text);
          e.target.reset();
        }
      }}
    >
      <input type="text" name="todo" placeholder="Add a new todo" />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
