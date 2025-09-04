import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  // pehle localStorage se theme nikaal lo (agar ho to)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // jab bhi theme change ho, localStorage update karo
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
