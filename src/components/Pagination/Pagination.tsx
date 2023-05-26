import React from "react";
import "./Pagination.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (val: number) => void;
  currentPage: number;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <button
              onClick={() => paginate(number)}
              className={`pagination-button ${
                currentPage === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
