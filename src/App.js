import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <DarkModeToggle />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-700 text-center py-4 text-gray-700 dark:text-gray-300">
        <p>© 2024 Open Library Finder</p>
      </footer>
    </div>
  );
};

export default App;
