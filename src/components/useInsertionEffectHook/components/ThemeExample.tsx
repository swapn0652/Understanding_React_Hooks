import { useInsertionEffect, useState } from "react";

const ThemeExample = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useInsertionEffect(() => {
    const styleId = "theme-style";

    // Remove old style tag if exists
    const oldStyle = document.getElementById(styleId);
    if (oldStyle) {
      oldStyle.remove();
    }

    // Create a new style tag
    const style = document.createElement("style");
    style.id = styleId;

    // Define styles directly based on the theme
    style.innerHTML = `
      body {
        background-color: ${theme === "light" ? "#fff" : "#121212"};
        color: ${theme === "light" ? "#000" : "#fff"};
        transition: background-color 0.3s ease, color 0.3s ease;
      }
    `;

    document.head.appendChild(style);
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Theme Example: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeExample;
