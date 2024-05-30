import { TodoItem } from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.task} />;
      })}
    </ul>
  );
}

export { TodoList };
