import React from 'react';
import { product } from '../assets/asset';
import { useNavigate } from 'react-router-dom';


const Home3 = () => {
  const navigate = useNavigate();
  const handleViewClick = (product) => {
    // Navigate to product page with the specific category
    navigate(`/product`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <header className="mb-8">
        <div className="flex justify-center mt-4">
            <hr className="w-100 border-2 mb-3  border-orange-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center animate-pulse ">
            Our Products
          </h1>
          <p className="text-gray-600 text-center transition-all duration-500 hover:text-gray-900 hover:scale-105">
            Discover our high-quality selection of products
          </p>

          {/* Orange horizontal line */}
          <div className="flex justify-center mt-4">
            <hr className="w-100 border-2  mt-3 border-orange-500" />
          </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.map(product => (
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
              <button onClick={(e) => handleViewClick(e.target.value)} className="flex items-center text-orange-400 hover:text-orange-700 transition-colors font-medium">
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