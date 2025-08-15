import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "10px",
        margin: "10px"
      }}
    >
      Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
    </button>
  );
}

export default function ContextAPI() {
  return (
    <ThemeProvider>
      <h1>Context API</h1>
      <ThemedButton />
    </ThemeProvider>
  );
}
