const ProductList = ({ products, onProductClick }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md w-full h-[450px] flex flex-col justify-between"
          >
            {/* Imagen y título */}
            <div className="flex-grow">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 line-clamp-2 text-blue-700">{product.title}</h2>
            </div>
  
            {/* Precio y botón */}
            <div className="mt-2">
              <p className="text-gray-800 text-3xl font-bold">${product.price}</p>
              <button
                className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => onProductClick(product)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;  