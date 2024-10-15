"use client"; // Client Component

import { useState, useEffect } from 'react';
import ProductList from './ProductList'; 
import ProductModal from './ProductModal'; 
import Navbar from "./Navbar";

// Definición de la interfaz del producto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const ProductsPage = () => {
  // Definición del estado de productos
  const [products, setProducts] = useState<Product[]>([]); // Tipar como un array de 'Product'
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Puede ser 'Product' o 'null'
  const [sortOrder, setSortOrder] = useState<string>(''); // Estado para el orden de los productos
  const [category, setCategory] = useState<string>(''); // Estado para la categoría

  // Fetch de productos desde la Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json(); // Tipar los datos como 'Product[]'
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Ordenación de productos
  const sortedProducts = products.sort((a, b) => {
    if (sortOrder === 'price-low-high') return a.price - b.price;
    if (sortOrder === 'price-high-low') return b.price - a.price;
    if (sortOrder === 'title-asc') return a.title.localeCompare(b.title);
    return 0; // Retornar 0 si no hay orden específico
  });

  // Filtrar productos por categoría
  const filteredProducts = sortedProducts.filter((product) =>
    category ? product.category === category : true
  );

  return (
    <>
      {/* Componente Navbar */}
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-4">
          {/* Filtros y ordenación */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded bg-white text-gray-700"
          >
            <option className="text-gray-700" value="">Sort by</option>
            <option className="text-gray-700" value="price-low-high">Price: Low to High</option>
            <option className="text-gray-700" value="price-high-low">Price: High to Low</option>
            <option className="text-gray-700" value="title-asc">Title: A-Z</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded bg-white text-gray-700"
          >
            <option className="text-gray-700" value="">All Categories</option>
            <option className="text-gray-700" value="electronics">Electronics</option>
            <option className="text-gray-700" value="jewelery">Jewelry</option>
            <option className="text-gray-700" value="men's clothing">Mens Clothing</option>
            <option className="text-gray-700" value="women's clothing">Womens Clothing</option>
          </select>
        </div>

        {/* Listado de productos */}
        <ProductList products={filteredProducts} onProductClick={setSelectedProduct} />

        {/* Modal de detalles del producto */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>

      {/* Footer basico */}
      <div>
        <p className="text-gray-400 text-center p-4">2024 - Desarrollado por BaironDev</p>
      </div>
    </>
  );
};

export default ProductsPage;