import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  // Contact information
  const contactInfo = {
    email: 'navedkh637505@gmail.com', // Replace with your email
    phone: '6375057045',
    whatsapp: '6375057045'
  };

  // Handle email button click - opens Gmail
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Inquiry from Website');
    const body = encodeURIComponent('Hello,\n\nI am contacting you regarding ');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${subject}&body=${body}`, '_blank');
  };

  // Handle phone button click - direct call
  const handlePhoneClick = () => {
    // Using tel: protocol to initiate a direct call
    window.location.href = `tel:${contactInfo.phone}`;
  };

  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    // Opening WhatsApp with the specified number
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
      {/* Enquire Now Button */}
      <div
        className={`flex items-center justify-end cursor-pointer overflow-hidden transition-all duration-300 ease-in-out rounded-l-full text-white bg-black hover:bg-orange-500 ${hoveredButton === 'enquire' ? 'w-40' : 'w-12'}`}
        onMouseEnter={() => setHoveredButton('enquire')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={() => navigate('./enquire')}
        aria-label="Enquire Now"
      >
        <span 
          className={`transition-all duration-500 ${
            hoveredButton === 'enquire' ? 'opacity-100 pl-4 w-auto' : 'opacity-0 w-0'
          } whitespace-nowrap font-medium`}
        >
          Enquire Now
        </span>
        <div className="flex items-center justify-center w-12 h-12">
          <svg 
            className={`transition-all duration-300 ${
              hoveredButton === 'enquire' ? 'w-8 h-8' : 'w-6 h-6'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Email Us Button */}
      <div
        className={`flex items-center justify-end cursor-pointer overflow-hidden transition-all duration-300 ease-in-out rounded-l-full text-white bg-black hover:bg-orange-500 ${hoveredButton === 'mail' ? 'w-40' : 'w-12'}`}
        onMouseEnter={() => setHoveredButton('mail')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={handleEmailClick}
        aria-label="Email Us"
      >
        <span 
          className={`transition-all duration-500 ${
            hoveredButton === 'mail' ? 'opacity-100 pl-4 w-auto' : 'opacity-0 w-0'
          } whitespace-nowrap font-medium`}
        >
          Email Us
        </span>
        <div className="flex items-center justify-center w-12 h-12">
          <svg 
            className={`transition-all duration-300 ${
              hoveredButton === 'mail' ? 'w-8 h-8' : 'w-6 h-6'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Call Us Button */}
      <div
        className={`flex items-center justify-end cursor-pointer overflow-hidden transition-all duration-300 ease-in-out rounded-l-full text-white bg-black hover:bg-orange-500 ${hoveredButton === 'phone' ? 'w-40' : 'w-12'}`}
        onMouseEnter={() => setHoveredButton('phone')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={handlePhoneClick}
        aria-label="Call Us"
      >
        <span 
          className={`transition-all duration-500 ${
            hoveredButton === 'phone' ? 'opacity-100 pl-4 w-auto' : 'opacity-0 w-0'
          } whitespace-nowrap font-medium`}
        >
          Call Us
        </span>
        <div className="flex items-center justify-center w-12 h-12">
          <svg 
            className={`transition-all duration-300 ${
              hoveredButton === 'phone' ? 'w-8 h-8' : 'w-6 h-6'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div
        className={`flex items-center justify-end cursor-pointer overflow-hidden transition-all duration-300 ease-in-out rounded-l-full text-white bg-black hover:bg-orange-500 ${hoveredButton === 'whatsapp' ? 'w-40' : 'w-12'}`}
        onMouseEnter={() => setHoveredButton('whatsapp')}
        onMouseLeave={() => setHoveredButton(null)}
        onClick={handleWhatsAppClick}
        aria-label="WhatsApp"
      >
        <span 
          className={`transition-all duration-500 ${
            hoveredButton === 'whatsapp' ? 'opacity-100 pl-4 w-auto' : 'opacity-0 w-0'
          } whitespace-nowrap font-medium`}
        >
          WhatsApp
        </span>
        <div className="flex items-center justify-center w-12 h-12">
          <svg 
            className={`transition-all duration-300 ${
              hoveredButton === 'whatsapp' ? 'w-8 h-8' : 'w-6 h-6'
            }`} 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Help;