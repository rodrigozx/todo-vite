import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const todosDefaults = [
  { text: "Learn about React", isCompleted: false },
  { text: "Meet friend for lunch", isCompleted: true },
  { text: "Build really cool todo app", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(todosDefaults);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo Vite</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
