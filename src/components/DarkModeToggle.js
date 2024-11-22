import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="fixed top-4 right-4 p-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
