import React, { createContext, useContext, useState, ReactNode } from "react";

// --- Tipos ---
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

// --- Custom Hook ---
function useTodos(): TodoContextType {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const removeTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return { todos, addTodo, toggleTodo, removeTodo };
}

// --- Context ---
const TodoContext = createContext<TodoContextType | null>(null);

function TodoProvider({ children }: { children: ReactNode }) {
  const todoLogic = useTodos();
  return (
    <TodoContext.Provider value={todoLogic}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodoContext debe usarse dentro de TodoProvider");
  return context;
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
              cursor: "pointer",
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

export default function ProyectoToDoApp() {
  return (
    <TodoProvider>
      <h4>ToDo App con Context y Custom Hooks</h4>
      <TodoInput />
      <TodoList />
    </TodoProvider>
  );
}
