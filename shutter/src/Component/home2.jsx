import React, { useState, useEffect } from 'react';
import { products, images, paragraphs } from '../assets/asset.js';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Home2 = () => {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);


  const handleViewClick = (product) => {
    // Navigate to product page with the specific category
    navigate(`/product`);
  };

  // Track window size for responsive content
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial call
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  // Auto scroll effect for products
  useEffect(() => {
    const maxScroll = (products.length - 4) * 280; // Adjust based on card width + gap

    const interval = setInterval(() => {
      setScrollPosition((current) => {
        // Reset to beginning when we reach the end
        if (current >= maxScroll) return 0;
        // Otherwise move forward
        return current + 280;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);


  // Auto image change effect for main image
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentMainImage(prevImage => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, [images.length]);

  const handleNext = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrev = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Determine how many paragraphs to show based on screen width
  const getVisibleParagraphs = () => {
    if (windowWidth < 640) { // Small screens (mobile)
      return 1;
    } else if (windowWidth < 1024) { // Medium screens (tablet)
      return 2;
    } else { // Large screens (desktop)
      return 3;
    }
  };

  const visibleParagraphs = getVisibleParagraphs();

  return (
    <div className="max-w-8xl mx-auto p-4 bg-gray-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col p-8">
            <div className="border-b pb-3 mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Welcome to our Product</h2>
            </div>

            <div className="prose prose-gray max-w-none sm:mx-2 mb-8">
              {paragraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
                <p key={index} className={`text-gray-700 leading-relaxed font-serif ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-start">
              {visibleParagraphs < 3 && (
                <button onClick={() => setWindowWidth(1200)} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-3 px-6   transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Read More
                </button>
              )}
              <button
                onClick={() => navigate("/enquire")}
                className="bg-orange-400 ml-10 hover:bg-orange-700 text-white font-bold py-3 px-6   transition duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        {/* Left Column - Image Swipers */}
        <div className="flex flex-col space-y-4 ">
          {/* Main Swiper (Now First and Larger) */}
          <div className="relative overflow-hidden rounded-lg h-150 sm:h-130 xs:h-40">
            <img
              src={images[currentMainImage]}
              alt={`Image ${currentMainImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-1000"
              key={currentMainImage} // Add key to force re-render and enable animation
            />

            {/* Navigation arrows for manual control */}
            <button
              onClick={() => handlePrev('main')}
              className="absolute left-2 top-1/2 text-4xl transform -translate-y-1/2 bg-opacity-50 text-orange p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => handleNext('main')}
              className="absolute right-2 top-1/2 text-4xl transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
              aria-label="Next image"
            >
              →
            </button>
          </div>


          {/* Product Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[300px] max-w-[350px] bg-white rounded-lg shadow-md mx-3 flex-shrink-0 overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full  h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-lg font-medium text-gray-800 mt-1 line-clamp-1">{product.name}</h3>

                    <div className="flex justify-between items-center mt-3">
                      <button
                        value={product.name}
                        onClick={(e) => handleViewClick(e.target.value)}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home2;