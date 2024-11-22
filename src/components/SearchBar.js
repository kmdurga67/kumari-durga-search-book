import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

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
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 border rounded w-full md:w-1/3 text-black text-xl"
      />
      <button
        type="submit"
        className="px-10 py-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
