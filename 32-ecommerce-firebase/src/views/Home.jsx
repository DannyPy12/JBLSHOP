import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import getActiveProducts from "../functions/getActiveProducts";
import ItemSection from "../components/ItemSection";
import { Layout } from "../components/";
import "../styles/home.css";

function Home() {
  const [productos, setProductos] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const searchProducts = (term) => {
    return productos.filter(producto =>
      producto.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getActiveProducts();
        setProductos(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm) return; 
    setLoading(true); 
    try {
      const searchedProducts = searchProducts(searchTerm);
      setProductos(searchedProducts);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 mt-8"> {/* Añadí mt-8 (margin-top: 8) para desplazarlo hacia abajo */}
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Buscar producto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-md border-none focus:outline-none"
            style={{ minWidth: "200px" }} // Ajusta el ancho mínimo según sea necesario
          />
          <button 
            onClick={handleSearch}
            className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          >
            Buscar
          </button>
        </div>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ItemSection title="Productos" productos={productos} />
        )}
      </div>
    </Layout>
  );
}

export default Home;
