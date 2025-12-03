import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { Routes, Route } from "react-router";
import About from "./About";
import TodoContainer from "./TodoContainer";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onAdd = async (todo) => {
    const res = await fetch(`http://localhost:8080/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });

    const saved = await res.json();
    setTodos((prevTodos) => [...prevTodos, saved]);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/delete/${id}`, { method: "DELETE" });

    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = async (id) => {
    await fetch(`http://localhost:8080/todos/${id}/complete`, {
      method: "PUT",
    });

    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };

  // Fetch all Todo from backend
  useEffect(() => {
    async function loadTodos() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8080/todos");
        const todos = await res.json();
        setTodos(todos);
      } catch (err) {
        console.error(err);
        setError("Failed to load Todo");
      } finally {
        setLoading(false);
      }
    }
    loadTodos();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !loading &&
            !error && (
              <TodoContainer
                todos={todos}
                onComplete={handleComplete}
                onDelete={handleDelete}
              />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<TodoInput onAdd={onAdd}/>} />
      </Routes>
    </>
  );
};

export default Home;
