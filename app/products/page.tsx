"use client"; // Client Component

import { useState, useEffect } from 'react';
import ProductList from './ProductList'; 
import ProductModal from './ProductModal'; 
import Navbar from "./Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [category, setCategory] = useState('');

  // Fetch de productos desde la Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Ordenación de productos
  const sortedProducts = products.sort((a, b) => {
    if (sortOrder === 'price-low-high') return a.price - b.price;
    if (sortOrder === 'price-high-low') return b.price - a.price;
    if (sortOrder === 'title-asc') return a.title.localeCompare(b.title);
    return products;
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
                  <option className="text-gray-700" value="men's clothing">Men's Clothing</option>
                  <option className="text-gray-700" value="women's clothing">Women's Clothing</option>
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
