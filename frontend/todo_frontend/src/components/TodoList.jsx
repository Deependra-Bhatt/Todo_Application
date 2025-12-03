import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TodoList;
