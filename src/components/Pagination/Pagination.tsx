import React, { useEffect, useState } from "react";
import "./Pagination.css";
import { Input } from "@chakra-ui/react";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (val: { page: number; perPage: number }) => void;
  currentPage: number;
}) => {
  const pageNumbers = [];
  const [pagination, setPagination] = useState<{
    page: number;
    perPage: number;
  }>({
    page: currentPage,
    perPage: itemsPerPage,
  });

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    paginate(pagination);
  }, [pagination]);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <button
              onClick={() => setPagination({ ...pagination, page: number })}
              className={`pagination-button ${
                pagination.page === number ? "active" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li style={{ marginLeft: "5px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <p style={{ color: "black" }}>Per page :</p>
            <Input
              w={"10"}
              h={"10"}
              type={"number"}
              style={{ color: "blue", padding: "2px" }}
              value={pagination.perPage}
              onChange={(val) =>
                setPagination({
                  ...pagination,
                  perPage: Number(val.target.value || 1),
                })
              }
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
