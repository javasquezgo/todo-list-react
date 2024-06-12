import { RiCheckboxBlankLine } from "@remixicon/react";
import { RiCheckboxFill } from "@remixicon/react";

function TodoItem({ task, state, deleteTask, handleState }) {
  return (
    <li>
      <div>
        <i onClick={() => handleState(task)} className="icon">
          {state ? (
            <RiCheckboxFill size={40} color="#008000" />
          ) : (
            <RiCheckboxBlankLine size={40} />
          )}
        </i>
        <div>
          <p>{task}</p>
          <button className="btn-delete" onClick={() => deleteTask(task)}>
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
