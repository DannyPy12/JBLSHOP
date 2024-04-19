import React, { useState } from "react";
import ItemCard from "./ItemCard";

function ItemSection({ productos, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  if (!productos) {
    return null;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productos.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h3 className="text-2xl font-bold underline self-start ml-10 my-10">
        {title}:
      </h3>
      <div className="flex flex-row w-full overflow-x-auto" style={{ overflowY: "hidden" }}>
        <ul className="flex items-center">
          {currentProducts.map((product) => (
            <li key={product.id} className="m-2 transition-transform duration-300 transform hover:scale-105 shadow-md">
              <ItemCard product={product} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none"
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default ItemSection;
