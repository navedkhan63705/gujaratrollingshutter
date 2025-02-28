import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  
  // Change navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdowns = () => {
      setOverviewOpen(false);
      setProductOpen(false);
    };
    
    document.addEventListener('click', closeDropdowns);
    return () => document.removeEventListener('click', closeDropdowns);
  }, []);

  // Prevent clicks inside dropdown from closing it
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  // Toggle specific dropdown
  const toggleOverview = (e) => {
    e.stopPropagation();
    setOverviewOpen(!overviewOpen);
    setProductOpen(false);
  };

  const toggleProduct = (e) => {
    e.stopPropagation();
    setProductOpen(!productOpen);
    setOverviewOpen(false);
  };

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-70 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">Logo</a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
              
              {/* Overview Dropdown */}
              <div className="relative" onClick={handleDropdownClick}>
                <button 
                  onClick={toggleOverview}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
                >
                  Overview
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${overviewOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {overviewOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="/overview/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                    <a href="/overview/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                    <a href="/overview/option3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                  </div>
                )}
              </div>
              
              <a href="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</a>
              <a href="/support" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Support</a>
              
              {/* Product Dropdown */}
              <div className="relative" onClick={handleDropdownClick}>
                <button 
                  onClick={toggleProduct}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 flex items-center"
                >
                  Product
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${productOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {productOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a href="/product/feature1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 1</a>
                    <a href="/product/feature2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 2</a>
                    <a href="/product/feature3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 3</a>
                    <a href="/product/feature4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 4</a>
                    <a href="/product/feature5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 5</a>
                    <a href="/product/feature6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 6</a>
                    <a href="/product/feature7" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 7</a>
                    <a href="/product/feature8" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Feature 8</a>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, hidden by default */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          
          {/* Mobile Overview Menu */}
          <div className="relative">
            <button className="w-full text-left text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
              Overview
            </button>
            {/* Mobile dropdown would go here */}
          </div>
          
          <a href="/contact" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <a href="/support" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Support</a>
          
          {/* Mobile Product Menu */}
          <div className="relative">
            <button className="w-full text-left text-white hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">
              Product
            </button>
            {/* Mobile dropdown would go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;