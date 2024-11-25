import React from "react";
import { FaBook, FaUser, FaBuilding, FaGlobe, FaHashtag } from "react-icons/fa";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 p-6">
      <div className="absolute top-0 left-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
        {book.first_publish_year || "Year Unknown"}
      </div>

      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-60 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">
        {book.title}
      </h3>

      <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
        <FaUser className="mr-2 text-purple-500" />
        <span className="font-medium">Author:</span>{" "}
        {book.author_name?.[0] || "Unknown"}
      </p>

      <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
        <FaBuilding className="mr-2 text-blue-500" />
        <span className="font-medium">Publisher:</span>{" "}
        {book.publisher?.[0] || "Not Available"}
      </p>

      {book.isbn && (
        <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
          <FaHashtag className="mr-2 text-green-500" />
          <span className="font-medium">ISBN:</span>{" "}
          {book.isbn.slice(0, 2).join(", ")}
        </p>
      )}

      <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
        <FaBook className="mr-2 text-orange-500" />
        <span className="font-medium">Editions:</span> {book.edition_count || 1}
      </p>

      {book.language && (
        <p className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <FaGlobe className="mr-2 text-red-500" />
          <span className="font-medium">Language:</span>{" "}
          {book.language.map((lang) => lang.toUpperCase()).join(", ")}
        </p>
      )}
    </div>
  );
};

export default BookCard;
