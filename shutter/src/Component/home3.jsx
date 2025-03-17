import React from 'react';
import { productData } from '../assets/asset';
import { useNavigate } from 'react-router-dom';

const Home3 = () => {
  const navigate = useNavigate();
 
  // Function to handle product click - updated to match your ProductDetails route structure
  const handleProductClick = (product) => {
    navigate(`/product/${product.speciality}/details/${product.name}`);
  };

  // Filter products to get only two of each speciality type
  const getFilteredProducts = () => {
    const specialityTypes = {};
    const filteredProducts = [];
    
    productData.forEach(product => {
      // Initialize counter for this speciality if it doesn't exist
      if (!specialityTypes[product.speciality]) {
        specialityTypes[product.speciality] = 0;
      }
      
      // Add product if we have less than 2 of this speciality
      if (specialityTypes[product.speciality] < 1) {
        filteredProducts.push(product);
        specialityTypes[product.speciality]++;
      }
    });
    
    return filteredProducts;
  };

  const displayProducts = getFilteredProducts();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-center mt-4">
            <hr className="w-100 border-2 mb-3 border-orange-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center animate-pulse ">
            Our Products
          </h1>
          <p className="text-gray-600 text-center transition-all duration-500 hover:text-gray-900 hover:scale-105">
            Discover our high-quality selection of products
          </p>

          {/* Orange horizontal line */}
          <div className="flex justify-center mt-4">
            <hr className="w-100 border-2 mt-3 border-orange-500" />
          </div>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map(product => (
            <div key={product._id} className="flex flex-col">
              {/* Product Image Box - Also clickable */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-3 cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
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
              <div className="flex justify-between items-center">
                 <button 
                  onClick={() => handleProductClick(product)} 
                  className="flex items-center text-orange-400 hover:text-orange-700 transition-colors font-medium"
                >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;