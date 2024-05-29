import { useState } from "react";
import { Title } from "./components/Title";
import { InputTodo } from "./components/InputTodo";

function App() {
  const [todo, setTodo] = useState([
    { task: "Programar", state: false },
    { task: "Leer un libro", state: true },
  ]);

  const totalTodos = todo.length;

  const completedTodos = todo.filter((todo) => todo.state === true).length;

  return (
    <div className="container">
      <Title total={totalTodos} completed={completedTodos} />
      <InputTodo />
    </div>
  );
}

export default App;
