import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async ({ title }) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${title}`
      );
      setBooks(response.data.docs.slice(0, 12));
    } catch (error) {
      alert('Failed to fetch books.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={searchBooks} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default Home;
