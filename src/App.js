import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
