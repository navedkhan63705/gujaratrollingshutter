import React, { useEffect, useRef, useState } from 'react';
import supportbg from "../assets/supportBg.jpg";
// import support1 from "../assets/support1.jpg";
// import support2 from "../assets/support2.jpg";
// import support3 from "../assets/support3.jpg";


const Support = () => {
  // Custom hook for scroll animations
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      }, options);

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, [containerRef, options]);

    return [containerRef, isVisible];
  };

  // Animation elements
  const [heroRef, heroVisible] = useElementOnScreen({ threshold: 0.1 });
  const [section1Ref, section1Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section2Ref, section2Visible] = useElementOnScreen({ threshold: 0.1 });
  const [section3Ref, section3Visible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section with Background Image */}
      <div 
        ref={heroRef} 
        className={`relative h-96 transition-all duration-1000 ease-out ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
        style={{
          backgroundImage: `url(${supportbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40" style={{
          borderBottomLeftRadius: '1.5rem',
          borderBottomRightRadius: '1.5rem',
        }}></div>
        
        {/* Text overlay centered on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-white mb-6 text-center">
            <span className="text-orange-300">Customer</span> Support Center
          </h1>
          <p className="text-white max-w-2xl text-center mb-8">
            Get the help you need with our comprehensive support resources
          </p>
        </div>
      </div>

      {/* Support Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Section 1 */}
        <div 
          ref={section1Ref} 
          className={`flex flex-col md:flex-row items-center mb-24 gap-12 transition-all duration-1000 ease-out ${
            section1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to our support center! We're here to help you get the most out of our product. 
                This guide will walk you through the initial setup process, account creation, and basic 
                navigation. If you're new to our platform, this is the perfect place to start your journey. 
                Our step-by-step instructions are designed to make your onboarding experience as smooth as possible.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://www.forbes.com/advisor/wp-content/uploads/2023/06/customerservice.jpg"
              alt="Getting Started" 
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div 
          ref={section2Ref} 
          className={`flex flex-col md:flex-row-reverse items-center mb-24 gap-12 transition-all duration-1000 ease-out ${
            section2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Troubleshooting</h2>
              <p className="text-gray-600 leading-relaxed">
                Encountering an issue? Don't worry, we've got you covered. This section addresses 
                common problems our users face and provides quick solutions. From connection issues 
                to account recovery, find step-by-step troubleshooting guides to resolve your concerns. 
                If you can't find what you're looking for, our support team is just a click away.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300">
                View Guides
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://www.opstart.ca/wp-content/uploads/2017/06/what-is-great-customer-service-1024x780.jpg"
              alt="Troubleshooting" 
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div 
          ref={section3Ref} 
          className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ease-out ${
            section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                Need personalized assistance? Our dedicated support team is ready to help you 
                with any questions or concerns. Reach out through live chat, email, or phone 
                support. We prioritize your inquiries and aim to respond within 24 hours. 
                For urgent matters, our emergency support line is available 24/7 to ensure 
                you receive timely assistance whenever you need it.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300">
                Contact Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://cdn.retailbiz.com.au/wp-content/uploads/2020/04/29084642/OpEd-Customers-iStock-504303998.jpg"
              alt="Contact Us" 
              className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;