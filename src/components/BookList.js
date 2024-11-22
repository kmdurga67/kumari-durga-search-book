import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books.length) {
    return <p className="text-center text-lg mt-8">No books found. Try another search!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
