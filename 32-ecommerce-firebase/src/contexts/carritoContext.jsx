import React, { useState, useContext, createContext } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const eliminarProducto = (indice) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarritoContext = () => {
  const context = useContext(CarritoContext);
  if (!context)
    throw new Error(
      "useCarritoContext must be used within a CarritoContextProvider"
    );
  return context;
};