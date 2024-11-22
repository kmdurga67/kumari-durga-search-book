import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg p-4">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold truncate">{book.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {book.author_name?.[0] || "Unknown Author"}
      </p>
    </div>
  );
};

export default BookCard;
