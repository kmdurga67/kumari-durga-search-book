import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-4 items-center justify-center mb-8"
    >
      <input
        type="text"
        placeholder="Search for a book title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 border rounded-lg w-full md:w-1/3 text-black text-xl shadow-sm focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
