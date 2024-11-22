import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 dark:bg-gray-600 text-gray-400"
            : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700"
        }`}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded ${
            page === currentPage
              ? "bg-blue-700 dark:bg-blue-900 text-white font-bold"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-500"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 dark:bg-gray-600 text-gray-400"
            : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
