import React, { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold">Transpire</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Overview dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('overview')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/overview" className="py-2 hover:text-blue-300">Overview</a>
              
              {activeDropdown === 'overview' && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="/about-us" className="block px-4 py-2 hover:bg-gray-600">About Us</a>
                    <a href="/milestone" className="block px-4 py-2 hover:bg-gray-600">Milestone</a>
                    <a href="/sustainability" className="block px-4 py-2 hover:bg-gray-600">Sustainability</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Products dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/products" className="py-2 hover:text-blue-300">Products</a>
              
              {activeDropdown === 'products' && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10 max-h-96 overflow-y-auto">
                  <div className="py-1">
                    <a href="/product/1" className="block px-4 py-2 hover:bg-gray-600">Product 1</a>
                    <a href="/product/2" className="block px-4 py-2 hover:bg-gray-600">Product 2</a>
                    <a href="/product/3" className="block px-4 py-2 hover:bg-gray-600">Product 3</a>
                    <a href="/product/4" className="block px-4 py-2 hover:bg-gray-600">Product 4</a>
                    <a href="/product/5" className="block px-4 py-2 hover:bg-gray-600">Product 5</a>
                    <a href="/product/6" className="block px-4 py-2 hover:bg-gray-600">Product 6</a>
                    <a href="/product/7" className="block px-4 py-2 hover:bg-gray-600">Product 7</a>
                    <a href="/product/8" className="block px-4 py-2 hover:bg-gray-600">Product 8</a>
                    <a href="/product/9" className="block px-4 py-2 hover:bg-gray-600">Product 9</a>
                    <a href="/product/10" className="block px-4 py-2 hover:bg-gray-600">Product 10</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Support link */}
            <a href="/support" className="py-2 hover:text-blue-300">Support</a>
            
            {/* Contact link */}
            <a href="/contact" className="py-2 hover:text-blue-300">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-4">
          <div className="space-y-1">
            {/* Overview with dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('overview')}
                className="w-full text-left px-3 py-2 flex justify-between items-center text-white hover:bg-gray-700 rounded-md"
              >
                <span>Overview</span>
                <svg 
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'overview' ? 'transform rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'overview' && (
                <div className="mt-2 pl-4 border-l-2 border-gray-600 ml-3">
                  <a href="/about-us" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">About Us</a>
                  <a href="/milestone" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Milestone</a>
                  <a href="/sustainability" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Sustainability</a>
                </div>
              )}
            </div>
            
            {/* Products with dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('products')}
                className="w-full text-left px-3 py-2 flex justify-between items-center text-white hover:bg-gray-700 rounded-md"
              >
                <span>Products</span>
                <svg 
                  className={`h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'transform rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'products' && (
                <div className="mt-2 pl-4 border-l-2 border-gray-600 ml-3 max-h-64 overflow-y-auto">
                  <a href="/product/1" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 1</a>
                  <a href="/product/2" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 2</a>
                  <a href="/product/3" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 3</a>
                  <a href="/product/4" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 4</a>
                  <a href="/product/5" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 5</a>
                  <a href="/product/6" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 6</a>
                  <a href="/product/7" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 7</a>
                  <a href="/product/8" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 8</a>
                  <a href="/product/9" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 9</a>
                  <a href="/product/10" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md">Product 10</a>
                </div>
              )}
            </div>
            
            {/* Support link */}
            <a href="/support" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Support</a>
            
            {/* Contact link */}
            <a href="/contact" className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;