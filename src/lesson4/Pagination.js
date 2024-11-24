import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalProducts, productPerPage, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productPerPage);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (  //(_, index) получает индекс каждой страницы (0, 1, 2, ...).
        <Link key={index} to={`/page/${index + 1}`}>
          {index + 1}
        </Link>
      ))}
    </div>
  );
}

export default Pagination