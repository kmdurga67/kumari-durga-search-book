import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          <span className="bg-white text-purple-600 px-2 py-1 rounded-md">
            Book
          </span>
          Finder
        </h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="" className="text-white hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="" className="text-white hover:text-gray-200 transition">
            About
          </Link>
          <Link to="" className="text-white hover:text-gray-200 transition">
            Contact
          </Link>
        </nav>
      </div>

      {
        <nav className="md:hidden bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="" className="hover:text-purple-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-purple-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-purple-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
