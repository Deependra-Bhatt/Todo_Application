import { useState } from "react";
import { useNavigate } from "react-router";

const label = "text-md";
const input =
  "border rounded-md w-full border-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none px-2 py-1 shadow-sm shadow-gray-200 placeholder:text-gray-400";

function TodoInput({ onAdd }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [level, setLevel] = useState("");
  const todo = {
    title: name,
    description: desc,
    level: level,
    completed: false,
  };
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(todo);
    setDesc("");
    setLevel("");
    setName("");
    navigate("/");
  };

  return (
    <div className="max-w-md w-full mx-auto mt-5">
      <h1 className="text-3xl text-gray-600 text-center font-semibold">
        Create a Todo
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" m-3 p-6 max-w-[500px] flex flex-col gap-5 item-center border-2 border-gray-600 rounded-2xl  shadow-md shadow-gray-400"
      >
        <div className="flex justify-between gap-3 flex-col sm:flex-row items-start sm:items-center">
          <label htmlFor="title" className={label}>
            Title
          </label>
          <input
            id="title"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter To-Do Title"
            className={input}
            required
          />
        </div>
        <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center gap-3">
          <label htmlFor="description" className={label}>
            Description
          </label>
          <textarea
            id="description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Enter To-Do Description"
            className={input}
            required
          />
        </div>
        <div className="flex justify-between gap-3 mr-18">
          <label htmlFor="level" className={label}>
            Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="select">Select</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <button className=" flex justify-end gap-2 rounded-lg bg-blue-500 text-lg py-1 px-3 mx-auto font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
