import React, { createContext, useContext, useState } from "react";

// --- Custom Hook ---
function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return { todos, addTodo, toggleTodo, removeTodo };
}

// --- Context ---
const TodoContext = createContext();

function TodoProvider({ children }) {
  const todoLogic = useTodos();
  return (
    <TodoContext.Provider value={todoLogic}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  return useContext(TodoContext);
}

// --- Components ---
function TodoInput() {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}

function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodoContext();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <TodoProvider>
      <h1>ToDo App con Context y Custom Hooks</h1>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}
