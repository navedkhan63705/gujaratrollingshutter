import React, { useState, useRef, useEffect } from "react";
import GujaratLogo from "./GujaratLogo";
import { menuItems } from '../assets/asset.js';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState([]);
  const [bgColor, setBgColor] = useState("bg-orange-250"); // Initial background color
  const [navHeight, setNavHeight] = useState("h-[7rem]"); // Initial height
  

  const navRef = useRef(null);
  


  useEffect(() => {
    // Set initial state based on current scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-orange-500 dark:bg-orange-400"); // Solid color (light/dark)
        setNavHeight("h-[4rem]"); // Reduce height on scroll
      } else {
        setBgColor("bg-orange-500/50 dark:bg-orange-400/50 backdrop-blur-lg"); // Blurred (light/dark)
        setNavHeight("h-[5rem]");
      }
      
    };

    // Run once on mount to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  // Close menus when clicking outside of nav
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop menu handlers
  const handleMenuEnter = (index) => {
    setActiveMenu(index);

  };



  const handleMenuLeave = () => {
    setActiveMenu(null);

  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (index) => {
    setExpandedMobileMenus((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
   
  };

   
  return (
    <>

      <nav
        ref={navRef}
        className={`w-full fixed top-0 z-[997] shadow-md transition-all duration-500 flex items-center ${bgColor} ${navHeight}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex  items-center">
              <a href="/" className="flex items-center">
                <GujaratLogo height="50" className="w-auto" />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <div className="flex space-x-4 xl:space-x-8">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative group" onMouseEnter={() => handleMenuEnter(index)} onMouseLeave={handleMenuLeave}>
                    <a href={item.link || "#"} className="text-black  text-lg hover:text-white px-3 py-2 rounded-md font-medium transition-colors duration-200">
                      {item.title}
                    </a>
                    {/* Dropdown */}
                    {item.options && activeMenu === index && (
                      <div className="absolute left-0 mt-2 w-48 bg-white text-sm rounded-md shadow-lg z-10 py-1 transition-opacity duration-200">
                        {item.options.map((option, i) => (
                          <a key={i} href={option.link} className="block px-4 py-2 text-sm text-black hover:bg-orange-100 transition-colors">
                            {option.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-black text-3xl hover:text-orange-400 transition-colors duration-200"
              >
                {isMobileMenuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          style={{
            zIndex: 996,
          }}
        >
          <div
            className="px-4 py-2 max-h-[80vh] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#f97316 white',
            }}
          >


            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div className="flex items-center justify-between py-3">
                  {index === 0 ? (
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-800 text-base font-medium">
                        {item.title}
                      </span>
                      {item.options && (
                        <button
                          onClick={() => toggleMobileSubmenu(index)}
                          className="p-2 rounded-full hover:bg-orange-100 text-gray-600"
                          aria-expanded={expandedMobileMenus.includes(index)}
                        >
                          <span className={`transition-transform duration-300 inline-block ${expandedMobileMenus.includes(index) ? 'rotate-180' : ''
                            }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <>
                      <a
                        href={item.link || "#"}
                        className="text-gray-800 hover:text-orange-500 text-base font-medium flex-1"
                        onClick={() => !item.options && setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                      {item.options && (
                        <button
                          onClick={() => toggleMobileSubmenu(index)}
                          className="p-2 rounded-full hover:bg-orange-100 text-gray-600"
                        >
                          <span className={`transition-transform duration-300 inline-block ${expandedMobileMenus.includes(index) ? 'rotate-180' : ''
                            }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </span>
                        </button>
                      )}
                    </>
                  )}
                </div>

                {item.options && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedMobileMenus.includes(index) ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="bg-gray-50 rounded-lg mb-2">
                      {item.options.map((option, i) => (
                        <a
                          key={i}
                          href={option.link || "#"}
                          className="block px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;