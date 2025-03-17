import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from '../assets/asset.js';

export default function Inquiry() {
  const { speciality, productName } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    requirements: "",
    quantity: "1",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Find the product from the productData based on name and speciality
    const foundProduct = productData.find(
      (item) => item.name === productName && item.speciality === speciality
    );
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productName, speciality]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form or navigate away after successful submission
      setTimeout(() => {
        navigate(`/product/${speciality}`);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="mt-35 mb-5 w-full min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {submitSuccess ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Inquiry Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in {productName}. Our team will get back to you shortly with a personalized quote.
            </p>
            <button
              onClick={() => navigate(`/product/${speciality}`)}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              Back to Products
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Request a Quote</h1>
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back
              </button>
            </div>
            
            {product && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center">
                <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded border border-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 text-sm">{product.subCategory}</p>
                  <p className="text-gray-500 text-sm">Category: {product.speciality}</p>
                </div>
              </div>
            )}
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    >
                      <option value="1">1 unit</option>
                      <option value="2-5">2-5 units</option>
                      <option value="6-10">6-10 units</option>
                      <option value="11-20">11-20 units</option>
                      <option value="20+">20+ units</option>
                      <option value="Custom">Custom requirement</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Please specify any custom requirements, dimensions, or questions you have about the product..."
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 ${
                    isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
                  } text-white font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-orange-300`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}