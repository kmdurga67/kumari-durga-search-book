import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastQuery, setLastQuery] = useState("");

  const booksPerPage = 12; // API default page size is 100, but we'll only show 12

  // Fetch books based on query and page
  const fetchBooks = async (query, page) => {
    setLoading(true);
    try {
      const offset = (page - 1) * booksPerPage; // Offset for paginated results
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}&limit=${booksPerPage}&offset=${offset}`
      );
      setBooks(response.data.docs); // Update books for the current page
      setTotalResults(response.data.numFound); // Update the total number of results
    } catch (error) {
      alert("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle new search
  const searchBooks = ({ title }) => {
    setLastQuery(title); // Update the latest query
    setCurrentPage(1); // Reset to the first page
    fetchBooks(title, 1); // Fetch results for the first page
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchBooks(lastQuery, newPage); // Fetch results for the same query and new page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={searchBooks} />
      {loading ? (
        <div className="flex justify-center mt-8">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <>
          {totalResults > 0 && (
            <div className="mb-4 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Found <span className="font-bold">{totalResults}</span> results
                for "<span className="italic">{lastQuery}</span>".
              </p>
            </div>
          )}
          <BookList books={books} />
          {totalResults > booksPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / booksPerPage)}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
