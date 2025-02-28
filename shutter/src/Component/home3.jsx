import React from 'react';

const Home3 = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Ultra Thin Laptop",
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "4K Smart TV",
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      image: "/api/placeholder/300/300",
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Our Products</h1>
          <p className="text-gray-600 text-center">Discover our high-quality selection of products</p>
        </header>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image Box */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-3">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Product Name and View Button Outside Box */}
              <h2 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h2>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium">
                View Product
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;