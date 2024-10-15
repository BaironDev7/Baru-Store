import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Baru Store</Link>
        </div>

        {/* Botón del menú móvil */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Enlaces del navbar (para pantallas grandes) */}
        <div className="hidden sm:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/products" className="text-white hover:text-gray-200">Products</Link>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-200">Home</Link>
          <Link href="/products" className="block text-white hover:text-gray-200">Products</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
