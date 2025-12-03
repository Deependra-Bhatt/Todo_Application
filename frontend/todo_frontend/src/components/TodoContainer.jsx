import TodoList from "./TodoList";

const TodoContainer = ({ todos, onComplete, onDelete }) => {
  if (todos.length === 0) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-3 border-2 border-gray-500 rounded-lg w-full max-w-xl mx-auto mt-5 px-5 py-3 shadow-md shadow-gray-500">
      <TodoList todos={todos} onComplete={onComplete} onDelete={onDelete} />
    </div>
  );
};

export default TodoContainer;
