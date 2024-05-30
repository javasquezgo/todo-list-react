import { useState } from "react";

function InputTodo({ addNewTask }) {
  const [inputTask, setInputTask] = useState("");

  const onEventChange = (e) => {
    setInputTask(e.target.value);
  };

  const submitBtn = () => {
    inputTask.length > 1 ? addNewTask(inputTask.trim()) : null;
    setInputTask("");
  };

  return (
    <div className="input--div">
      <input
        placeholder="¿Qué tienes planeado para hoy?"
        className="input__div-input"
        onChange={onEventChange}
        value={inputTask}
        type="text"
      />
      <button onClick={submitBtn} className="input__div-btn">
        Agregar Tarea
      </button>
    </div>
  );
}

export { InputTodo };
