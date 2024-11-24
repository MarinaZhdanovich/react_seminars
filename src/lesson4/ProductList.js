import React from "react";
import { useParams } from 'react-router-dom';
import Product from './Product';
import Pagination from "./Pagination";

const ProductList = ({ products }) => {
  const { pageNumber } = useParams();
  const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
  const productPerPage = 3;
  const startIndex = (currentPage - 1) * productPerPage;  //с какого продукта начать на текущей странице. currentPage = 1, то startIndex = (1 - 1) * 3 = 0.
  const currentProducts = products.slice(startIndex, startIndex + productPerPage); //Если startIndex = 0 и productPerPage = 3, то берём первые 3 продукта.

  return (
    <div>
      {currentProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <Pagination totalProducts={products.length} productPerPage={productPerPage}
        currentPage={currentPage} />
    </div>
  );
}

export default ProductList;