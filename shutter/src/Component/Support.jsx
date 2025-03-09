import React, { useEffect, useRef, useState } from 'react';
import supportbg from "../assets/supportBg.jpg";
 


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
              <p className="text-gray-600 font-serif leading-relaxed">
              Welcome to the support page of Gujarat Rolling Shutter! We are here to help you get started with our high-quality security solutions,
               including rolling shutters, sliding gates, automatic shutters, office table cabins, and fire gates. If you are a new customer,
                we recommend reviewing our product catalog and installation guides to understand the features and benefits of each solution.
                Our team is available to assist you in choosing the right product based on your specific requirements.
               For detailed setup instructions, you can refer to our user manuals or visit our online knowledge base for step-by-step guidance.
              </p>
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
              <p className="text-gray-600 font-serif leading-relaxed">
              If you encounter any issues with our products, we have a comprehensive troubleshooting guide to help you resolve common problems quickly.
               Whether it’s an automatic shutter not functioning properly, a sliding gate getting stuck, or any other technical concern,
                we provide practical solutions to address these issues. Start by checking our FAQs and troubleshooting section, which cover basic fixes and maintenance tips. If the problem persists,
               you can reach out to our support team for further assistance. We also offer on-site service and repair options to ensure your product remains in optimal condition.
              </p>
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
              <p className="text-gray-600 font-serif leading-relaxed">
              We value our customers and are always ready to assist you with any questions or concerns.
               If you need further support, feel free to contact our customer service team. You can reach us via phone,
               email, or by filling out the support request form on our website. Our support representatives are available during business hours to provide timely and effective solutions. For urgent inquiries, we also offer priority support to address critical issues as quickly as possible. At Gujarat Rolling Shutter,
               customer satisfaction is our priority, and we are committed to ensuring that you receive the best service experience.
              </p>
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