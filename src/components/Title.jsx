function Title({ total, completed }) {
  return (
    <div>
      <h1 className="title">Lista de Tareas</h1>
      <h2 className="text">
        Se han completado {completed} de {total} tareas
      </h2>
    </div>
  );
}

export { Title };
