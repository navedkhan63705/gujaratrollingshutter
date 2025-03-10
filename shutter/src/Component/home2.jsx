import React, { useState, useEffect } from 'react';
import { products, images, paragraphs} from '../assets/asset.js';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Home2 = () => {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    message: ''
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
 
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      requirement: formData.requirement,
      message: formData.message
    };
    
    // Replace with your EmailJS service ID, template ID, and public key
    emailjs.send(
      'service_1qawa3s', // e.g. 'service_1234abcd'
      'template_1c79hsj', // e.g. 'template_1234abcd'
      templateParams,
      'bxKrI6moY7XtsyEHY' // e.g. 'user_1234abcd'
    )
      .then((response) => {
        console.log('Email successfully sent!', response);
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          requirement: '',
          message: ''
        });
        setShowEnquireForm(false);
        alert('Your enquiry has been submitted successfully!');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setSubmitError('Failed to send your enquiry. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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

  // Close modal when clicking outside
  useEffect(() => {
    if (showEnquireForm) {
      const handleClickOutside = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
          setShowEnquireForm(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showEnquireForm]);

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

            <div className="prose prose-gray max-w-none mb-8">
              {paragraphs.slice(0, visibleParagraphs).map((paragraph, index) => (
                <p key={index} className={`text-gray-700 leading-relaxed font-serif ${index > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}

              {visibleParagraphs < 3 && (
                <button
                  className="text-orange-500 hover:text-orange-700 font-medium mt-4 transition-colors duration-200"
                  onClick={() => setWindowWidth(1200)} // Simulate larger screen for demo purposes
                >
                  Read More
                </button>
              )}
            </div>

            <div className="flex justify-start">
              <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-3 px-6   transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Learn More
              </button>
              <button
                onClick={() => setShowEnquireForm(true)}
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

      {/* Modal for Enquire Form */}
      {showEnquireForm && (
        <div className="fixed text-black inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-overlay">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Enquire Now</h2>
              <button
                onClick={() => setShowEnquireForm(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">Requirement *</label>
                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select your requirement</option>
                  <option value="Industrial Shutters">Industrial Shutters</option>
                  <option value="Sliding Gates">Sliding Gates</option>
                  <option value="Fire Gates">Fire Gates</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Please provide additional details about your requirements..."
                ></textarea>
              </div>

              {submitError && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Error</h3>
                      <div className="text-sm text-red-700">{submitError}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEnquireForm(false)}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home2;