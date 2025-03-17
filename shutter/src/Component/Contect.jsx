import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { productData } from '../assets/asset.js';

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productParam = queryParams.get('product');
  
  // State management
  const [productInfo, setProductInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: productParam ? `Inquiry about ${productParam}` : "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Effect to find product info when component mounts or product param changes
  useEffect(() => {
    if (productParam) {
      const foundProduct = productData.find((item) => item.name === productParam);
      if (foundProduct) {
        setProductInfo(foundProduct);
      }
    }
  }, [productParam]);

  // Form field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing in a field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form or navigate away after successful submission
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1500);
  };

  // Success message component
  const SuccessMessage = () => (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h2>
      <p className="text-gray-600 mb-6">
        Thank you for contacting us. Our team will get back to you as soon as possible.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
      >
        Back to Home
      </button>
    </div>
  );

  // Contact info item component
  const ContactInfoItem = ({ icon, title, content }) => (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="ml-3">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );

  // Form input component
  const FormInput = ({ type, id, name, label, value, required = false }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className={`w-full px-4 py-2 border ${formErrors[name] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
        required={required}
      />
      {formErrors[name] && <p className="mt-1 text-sm text-red-500">{formErrors[name]}</p>}
    </div>
  );

  return (
    <div className="mt-16 md:mt-24 mb-5 w-full min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {submitSuccess ? (
          <SuccessMessage />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
            <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <form onSubmit={handleSubmit} noValidate>
                    {productInfo && (
                      <div className="mb-6 p-4 bg-orange-50 rounded-md border border-orange-100">
                        <p className="text-gray-700 font-medium">Your inquiry about:</p>
                        <div className="flex items-center mt-2">
                          <div className="w-16 h-16 flex-shrink-0 bg-white rounded border border-gray-200 overflow-hidden">
                            <img
                              src={productInfo.image}
                              alt={productInfo.name}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">{productInfo.name}</p>
                            <p className="text-sm text-gray-500">{productInfo.speciality}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <FormInput 
                        type="text"
                        id="name"
                        name="name"
                        label="Full Name"
                        value={formData.name}
                        required={true}
                      />
                      <FormInput 
                        type="email"
                        id="email"
                        name="email"
                        label="Email Address"
                        value={formData.email}
                        required={true}
                      />
                    </div>

                    <div className="mb-4">
                      <FormInput 
                        type="tel"
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        value={formData.phone}
                      />
                    </div>

                    <div className="mb-4">
                      <FormInput 
                        type="text"
                        id="subject"
                        name="subject"
                        label="Subject"
                        value={formData.subject}
                        required={true}
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        required
                      ></textarea>
                      {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-md text-white font-medium transition ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <ContactInfoItem 
                      icon={
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      }
                      title="Address"
                      content={<>123 Business Street, Suite 100<br />New York, NY 10001</>}
                    />
                    
                    <ContactInfoItem 
                      icon={
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      }
                      title="Phone"
                      content="+1 (555) 123-4567"
                    />
                    
                    <ContactInfoItem 
                      icon={
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      }
                      title="Email"
                      content="info@yourcompany.com"
                    />
                    
                    <ContactInfoItem 
                      icon={
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      }
                      title="Business Hours"
                      content={<>Monday - Friday: 9AM - 5PM<br />Saturday & Sunday: Closed</>}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}