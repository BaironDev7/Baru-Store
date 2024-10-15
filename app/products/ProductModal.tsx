import React from 'react';

// Definición de la interfaz del producto
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

// Definición de los props para ProductModal
interface ProductModalProps {
  product: Product; 
  onClose: () => void; 
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Contenedor del modal con tamaño fijo */}
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white font-extrabold text-2xl hover:text-gray-400"
        >
          X
        </button>

        {/* Contenido del modal */}
        <div className="flex flex-col items-center">
          {/* Imagen con tamaño fijo */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full max-w-xs h-64 object-cover mb-4"
          />
          {/* Título y precio del producto */}
          <h2 className="text-2xl font-bold mb-2 text-center text-blue-700">{product.title}</h2>
          <p className="text-gray-800 text-3xl font-bold mb-4">${product.price}</p>

          {/* Descripción del producto con desplazamiento si es muy larga */}
          <div className="text-gray-700 text-sm overflow-y-auto max-h-48">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
  