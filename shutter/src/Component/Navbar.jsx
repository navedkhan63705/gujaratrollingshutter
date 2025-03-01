import React, { useState } from 'react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Menu data
  const menuItems = [
    {
      title: 'Overview',
      options: [
        { label: 'Product Features', link: '/features' },
        { label: 'Use Cases', link: '/use-cases' },
        { label: 'Testimonials', link: '/testimonials' },
        { label: 'Pricing', link: '/pricing' }
      ]
    },
    {
      title: 'Products',
      options: [
        { label: 'Product A', link: '/product-a' },
        { label: 'Product B', link: '/product-b' },
        { label: 'Product C', link: '/product-c' },
        { label: 'Enterprise Solutions', link: '/enterprise' }
      ]
    },
    { title: 'Documentation', link: '/docs' },
    { title: 'Resources', link: '/resources' },
    { title: 'Support', link: '/support' }
  ];

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-blue-600 font-bold text-xl">ProductLogo</a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={item.link || '#'}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group relative"
                  >
                    {item.title}
                    {item.options && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    )}
                    {item.options && (
                      <svg 
                        className="inline-block ml-1 w-4 h-4 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.options && activeMenu === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1 transform origin-top-left transition-all duration-200 opacity-100 scale-100">
                      {item.options.map((option, i) => (
                        <a
                          key={i}
                          href={option.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
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
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              Login
            </a>
            <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.link || '#'}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
              {item.options && (
                <div className="pl-4 space-y-1">
                  {item.options.map((option, i) => (
                    <a
                      key={i}
                      href={option.link}
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;