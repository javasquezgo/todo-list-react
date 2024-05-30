import { useState } from "react";
import { Title } from "./components/Title";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todo, setTodo] = useState([
    { task: "Programar", state: false },
    { task: "Leer un libro", state: true },
  ]);

  const totalTodos = todo.length;

  const completedTodos = todo.filter((todo) => todo.state === true).length;

  const addNewTask = (newTask) => {
    if (todo.find((todo) => todo.task === newTask)) return;
    setTodo([{ task: newTask, state: false }, ...todo]);
  };

  return (
    <div className="container">
      <Title total={totalTodos} completed={completedTodos} />
      <InputTodo addNewTask={addNewTask} />
      <TodoList todos={todo} />
    </div>
  );
}

export default App;
