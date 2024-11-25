import React from "react";
import { FaBook, FaUser, FaBuilding, FaGlobe, FaHashtag } from "react-icons/fa";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10 rounded-xl blur-lg opacity-30"></div>

      <div className="absolute top-4 left-4 bg-purple-600 text-white text-md font-semibold px-3 py-1 rounded-full shadow-md">
        {book.first_publish_year || "Year Unknown"}
      </div>

      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-68 object-cover rounded-t-xl"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
          {book.title}
        </h3>

        <p className="flex items-center text-md text-gray-600 dark:text-gray-300">
          <FaUser className="mr-2 text-purple-500" />
          <span className="font-lg">Author:</span>{" "}&nbsp;&nbsp;
          {book.author_name?.[0] || "Unknown"}
        </p>

        <p className="flex items-center text-md text-gray-600 dark:text-gray-300">
          <FaBuilding className="mr-2 text-blue-500" />
          <span className="font-lg">Publisher:</span>{" "}&nbsp;&nbsp;
          {book.publisher?.[0] || "Not Available"}
        </p>

        {book.isbn && (
          <p className="flex items-center text-md text-gray-600 dark:text-gray-300">
            <FaHashtag className="mr-2 text-green-500" />
            <span className="font-lg">ISBN:</span>{" "}&nbsp;&nbsp;
            {book.isbn.slice(0, 2).join(", ")}
          </p>
        )}

        <p className="flex items-center text-md text-gray-600 dark:text-gray-300">
          <FaBook className="mr-2 text-orange-500" />
          <span className="font-lg">Editions:</span>{" "}&nbsp;&nbsp;
          {book.edition_count || 1}
        </p>

        {book.language && (
          <p className="flex items-center text-md text-gray-600 dark:text-gray-300">
            <FaGlobe className="mr-2 text-red-500" />
            <span className="font-lg">Language:</span>{" "}&nbsp;&nbsp;
                {book.language.map((lang) => lang.toUpperCase()).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;
