import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`}>
      <div className="w-100 h-100 p-4 flex justify-center">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl w-100 h-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="p-4 w-full">
            <h3 className="font-bold text-xl mb-2">{product.name}</h3>
            <div className="flex items-center">
              <p className="text-gray-600 line-through">
                ${(product.price.unit_amount * 1.5) / 100}
              </p>
              <span className="mx-2"> →</span>
              <span className="flex items-center">
                <p className="font-bold mx-1 text-lg">
                  ${product.price.unit_amount / 100}
                </p>
                {product.price.currency}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
