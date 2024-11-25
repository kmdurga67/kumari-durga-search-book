import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) {
    return (
      <p className="text-center text-xl mt-8 text-gray-600 dark:text-gray-300">
        No books found. Try another search!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 cursor-pointer">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
