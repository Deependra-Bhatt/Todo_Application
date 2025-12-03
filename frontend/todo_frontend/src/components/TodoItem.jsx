const TodoItem = ({ todo, onComplete, onDelete }) => {
  const isCompleted = todo.completed;

  const bgColor = () => {
    if (todo.level === "easy") {
      return "bg-green-500";
    } else if (todo.level === "medium") {
      return "bg-yellow-500 ";
    } else {
      return "bg-red-600";
    }
  };

  return (
    <div className="flex flex-col gap-3 border-2 border-gray-500 rounded-lg w-full max-w-xl mx-auto px-5 py-3 shadow-md shadow-gray-500">
      <h2 className="text-2xl font-semibold border-b border-gray-500 px-2 pb-2">
        {todo.title}
      </h2>
      <p className="text-md px-2 border-b pb-3 border-gray-500">
        {todo.description}
      </p>
      <div className="flex my-2 px-2">
        <h4 className="text-lg font-semibold align-middle">Level</h4>
        <span
          className={`text-lg text-center font-semibold m-auto px-3 rounded-md border-2 text-white ${bgColor()}`}
        >
          {todo.level}
        </span>
        {isCompleted && (
          <span className="text-lg text-center font-semibold m-auto px-3 rounded-md border-2 text-white bg-green-600">
            Finished
          </span>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <button
          className="rounded-lg bg-green-400 text-lg py-1 px-3 mx-auto font-semibold"
          onClick={() => onComplete(todo.id)}
        >
          Completed
        </button>
        <button
          className="rounded-lg bg-red-700 text-lg py-1 px-3 mx-auto font-semibold"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
