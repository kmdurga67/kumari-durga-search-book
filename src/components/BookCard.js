import React from "react";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white dark:bg-gray-700 rounded shadow p-4">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-70 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {book.author_name?.[0] || "Unknown Author"}
      </p>
    </div>
  );
};

export default BookCard;
