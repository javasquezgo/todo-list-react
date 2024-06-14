import { RiCheckboxBlankLine } from "@remixicon/react";
import { RiCheckboxFill } from "@remixicon/react";

function TodoItem({ task, state, deleteTask, handleState }) {
  return (
    <li>
      <div className="complete-item">
        <i onClick={() => handleState(task)} className="icon">
          {state ? (
            <RiCheckboxFill size={40} color="#008000" />
          ) : (
            <RiCheckboxBlankLine size={40} />
          )}
        </i>
        <div className="item-div">
          <p>{task}</p>
          <div>
            <button
              className="btn-delete"
              onClick={() => deleteTask(task, state)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export { TodoItem };
