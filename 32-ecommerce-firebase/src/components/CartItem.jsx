import React from "react";
import { useCarritoContext } from "../contexts/carritoContext";

function CartItem({ producto, index }) {
  const { eliminarProducto } = useCarritoContext();

  const handleRemoveClick = () => {
    eliminarProducto(index);
  };

  return (
    <div className="w-1/2 mx-auto  flex justify-around items-center text-xl border-slate-200 border-2 my-3 rounded-lg">
      <div className="w-1/4">
        <img src={producto.images[0]} alt="" className="w-2/3 rounded-md" />
      </div>
      <div>
        <h3>{producto.name}</h3>
      </div>
      <div>
        <p>${producto.price.unit_amount / 100}</p>
      </div>
      <div>
        <button onClick={handleRemoveClick} className="text-red-500">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CartItem;
