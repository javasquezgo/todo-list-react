function InputTodo() {
  return (
    <div className="input--div">
      <input
        placeholder="¿Qué tienes planeado para hoy?"
        className="input__div-input"
        type="text"
      />
      <button>Agregar Tarea</button>
    </div>
  );
}

export { InputTodo };
