import { useState } from "react";
import { Title } from "./components/Title";
import { InputTodo } from "./components/InputTodo";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todo, setTodo] = useState([
    { task: "Programar", state: false },
    { task: "Leer un libro", state: true },
    { task: "Hacer algo", state: true },
    { task: "Bailar", state: true },
    { task: "Cocinar", state: false },
    { task: "Laugh", state: false },
    { task: "Estudiar", state: false },
  ]);

  const totalTodos = todo.length;

  const completedTodos = todo.filter((todo) => todo.state === true).length;

  const addNewTask = (newTask) => {
    if (todo.find((todo) => todo.task === newTask)) return;
    setTodo([{ task: newTask, state: false }, ...todo]);
  };

  const handleState = (task) => {
    const newState = todo.map((todo) => {
      if (todo.task === task) {
        return { task: todo.task, state: !todo.state };
      } else {
        return todo;
      }
    });

    setTodo(newState);
  };

  const deleteTask = (task) => {
    setTodo(todo.filter((todo) => todo.task !== task));
  };

  return (
    <div className="container">
      <Title total={totalTodos} completed={completedTodos} />
      <InputTodo addNewTask={addNewTask} />
      <ul>
        {todo.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              deleteTask={deleteTask}
              handleState={handleState}
              task={todo.task}
              state={todo.state}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
