import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">Brand</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="px-3 py-2 text-indigo-600 font-medium hover:text-indigo-900">Home</a>
              <a href="#" className="px-3 py-2 text-gray-700 font-medium hover:text-indigo-600">Features</a>
              <a href="#" className="px-3 py-2 text-gray-700 font-medium hover:text-indigo-600">Pricing</a>
              <a href="#" className="px-3 py-2 text-gray-700 font-medium hover:text-indigo-600">About</a>
              <a href="#" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-indigo-600 font-medium hover:bg-gray-50 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-indigo-600 rounded-md">Features</a>
            <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-indigo-600 rounded-md">Pricing</a>
            <a href="#" className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 hover:text-indigo-600 rounded-md">About</a>
            <a href="#" className="block px-3 py-2 text-indigo-600 font-medium bg-gray-50 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

 