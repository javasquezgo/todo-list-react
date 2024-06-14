import { useState, useEffect } from "react";
import { Title } from "./components/Title";
import { InputTodo } from "./components/InputTodo";
import { TodoItem } from "./components/TodoItem";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const [todo, setTodo] = useState(() => {
    // Cargar tareas desde localStorage
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Guardar tareas en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const MySwal = withReactContent(Swal);

  const totalTodos = todo.length;

  const completedTodos = todo.filter((todo) => todo.state === true).length;

  const addNewTask = (newTask) => {
    if (todo.find((todo) => todo.task === newTask)) return;
    setTodo([{ task: newTask, state: false }, ...todo]);
    let timerInterval;
    Swal.fire({
      title: "Your task was added!",
      html: "I will close in <b></b> milliseconds.",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
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

  const deleteTask = (task, state) => {
    if (state) {
      setTodo(todo.filter((todo) => todo.task !== task));
    }
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
