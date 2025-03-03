import React, { useState, useRef, useEffect } from 'react';
import GujaratLogo from './GujaratLogo'; 

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState([]);
  const [expandedMobileSubmenus, setExpandedMobileSubmenus] = useState([]);
  
  const navRef = useRef(null);

  // Enhanced menu data with nested structure for Products
  const menuItems = [
    {
      title: 'Overview',
      options: [
        { label: 'Product Features', link: '/features' },
        { label: 'Use Cases', link: '/use-cases' },
        { label: 'Testimonials', link: '/testimonials' },
        { label: 'Milestone', link: '/milestone' }
      ]
    },
    {
      title: 'Products',
      options: [
        { 
          label: 'Shutters', 
          link: '#',
          subOptions: [
            { label: 'Manual Shutters', link: '/shutters/manual' },
            { label: 'Motorized Shutters', link: '/shutters/motorized' },
            { label: 'Gear Rolling Shutters', link: '/shutters/manual' },
            { label: 'Rapid shutter', link: '/shutters/motorized' },
            { label: 'Aluminium Shutters', link: '/shutters/manual' },
            { label: 'Stane-less Steel Shutters ', link: '/shutters/motorized' },
            { label: 'Calvenized Shuuters', link: '/shutters/manual' },
            { label: 'Calvailum Shutters', link: '/shutters/motorized' },
            { label: ' Mild Steel Shutters', link: '/shutters/manual' },
            { label: 'Grill Rolling Shutters', link: '/shutters/motorized' },
            { label: 'Color Coated Shutters', link: '/shutters/smart' }
          ] 
        },
        { 
          label: 'Aluminium Section', 
          link: '#',
          subOptions: [
            { label: 'Aluminium Profition', link: '/blinds/venetian' },
            { label: 'Aluminium Window', link: '/blinds/roman' },
            { label: 'Aluminium Door', link: '/blinds/roller' }
          ] 
        },
        { 
          label: 'Gate & Door', 
          link: '#',
          subOptions: [
            { label: 'M S Sliding Gate', link: '/awnings/retractable' },
            { label: 'S S Sliding Gate', link: '/awnings/fixed' },
            { label: 'Fire Resistant Door', link: '/awnings/retractable' },
            { label: 'Sliding Hangar Door', link: '/awnings/fixed' },
            { label: 'Automation Baners', link: '/awnings/retractable' },
            { label: 'Mirror Senser Door', link: '/awnings/fixed' },
            { label: 'Electic Retractable SS Gate', link: '/awnings/freestanding' }
          ] 
        },
        { 
          label: 'Roof Products',
          link: '#',
          subOptions: [
            { label: 'Roof Ceiling', link: '/awnings/retractable' },
            { label: 'Roof Ceiling Light', link: '/awnings/fixed' },
            { label: 'Roof PoP', link: '/awnings/retractable' },
          ] 
         },
         { 
          label: 'Office Work Station',
          link: '#',
          subOptions: [
            { label: 'Pllywood Table', link: '/awnings/retractable' },
            { label: 'Comfort Chair', link: '/awnings/fixed' },
            { label: 'Electric Board in Table', link: '/awnings/retractable' },
            { label: 'Floor Mating', link: '/awnings/retractable' }
          ] 
         },
         { 
          label: 'Raling',
          link: '#',
          subOptions: [
            { label: 'M S Raling', link: '/awnings/retractable' },
            { label: 'S S Raling', link: '/awnings/fixed' },
          ] 
         },
         { 
          label: 'Supply Companies',
          link: '#',
          subOptions: [
            { label: 'Walls', link: '/awnings/retractable' },
            { label: 'S S Nuts Bolts', link: '/awnings/fixed' },
            { label: 'GI Bolt Nuts', link: '/awnings/retractable' }
           ] 
         }
      ]
    },
    { title: 'Contact Us', link: '/contact' },
    { title: 'Support', link: '/support' }
  ];

  // Close menus when clicking outside of nav
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSubmenu(null);
        setIsMobileMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Desktop menu handlers
  const handleMenuEnter = (index) => {
    setActiveMenu(index);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (subIndex) => {
    setActiveSubmenu(subIndex);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubmenu(null);
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSubmenu = (index) => {
    setExpandedMobileMenus(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
    // Reset submenus when collapsing a menu
    if (expandedMobileMenus.includes(index)) {
      setExpandedMobileSubmenus([]);
    }
  };

  const toggleMobileNestedSubmenu = (menuIndex, submenuIndex) => {
    const key = `${menuIndex}-${submenuIndex}`;
    setExpandedMobileSubmenus(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  return (
    <nav className="w-full bg-transparent sticky top-0 z-50 shadow-sm" ref={navRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <GujaratLogo height="50" className="w-auto" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex space-x-4 xl:space-x-8">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <a
                    href={item.link || '#'}
                    className="text-orange-400 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative"
                  >
                    {item.title}
                    {item.options && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    )}
                    {item.options && (
                      <svg 
                        className={`inline-block ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === index ? 'transform rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* First-level Dropdown Menu */}
                  {item.options && activeMenu === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1 transform origin-top-left transition-all duration-200 opacity-100 scale-100">
                      {item.options.map((option, i) => (
                        <div 
                          key={i}
                          className="relative"
                          onMouseEnter={() => handleSubmenuEnter(i)}
                        >
                          <a
                            href={option.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex justify-between items-center"
                          >
                            {option.label}
                            {option.subOptions && (
                              <svg 
                                className="inline-block ml-1 w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            )}
                          </a>

                          {/* Second-level Nested Dropdown */}
                          {option.subOptions && activeSubmenu === i && (
                            <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg z-20 py-1 transform origin-top-left transition-all duration-200 opacity-100 scale-100 max-h-96 overflow-y-auto">
                              {option.subOptions.map((subOption, j) => (
                                <a
                                  key={j}
                                  href={subOption.link}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                                >
                                  {subOption.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
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
              className="text-gray-500 hover:text-orange-400 focus:outline-none transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <div className="flex items-center justify-between">
                <a
                  href={item.link || '#'}
                  className="text-gray-700 hover:text-orange-500 block px-3 py-3 rounded-md text-base font-medium transition-colors duration-150"
                  onClick={item.options ? (e) => {
                    e.preventDefault();
                    toggleMobileSubmenu(index);
                  } : undefined}
                >
                  {item.title}
                </a>
                {item.options && (
                  <button 
                    onClick={() => toggleMobileSubmenu(index)}
                    className="px-3 py-2 text-gray-500 focus:outline-none transition-transform duration-200"
                    aria-label={`Toggle ${item.title} submenu`}
                  >
                    <svg 
                      className={`w-5 h-5 transition-transform duration-200 ${expandedMobileMenus.includes(index) ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.options && (
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMobileMenus.includes(index) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-0">
                    {item.options.map((option, i) => (
                      <div key={i} className="border-t border-gray-100 first:border-t-0">
                        <div className="flex items-center justify-between">
                          <a
                            href={option.link}
                            className="text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md text-sm transition-colors duration-150"
                            onClick={option.subOptions ? (e) => {
                              e.preventDefault();
                              toggleMobileNestedSubmenu(index, i);
                            } : undefined}
                          >
                            {option.label}
                          </a>
                          {option.subOptions && (
                            <button 
                              onClick={() => toggleMobileNestedSubmenu(index, i)}
                              className="px-3 py-2 text-gray-500 focus:outline-none transition-transform duration-200"
                              aria-label={`Toggle ${option.label} submenu`}
                            >
                              <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${expandedMobileSubmenus.includes(`${index}-${i}`) ? 'transform rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {option.subOptions && (
                          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMobileSubmenus.includes(`${index}-${i}`) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="pl-4 space-y-0">
                              {option.subOptions.map((subOption, j) => (
                                <a
                                  key={j}
                                  href={subOption.link}
                                  className="text-gray-500 hover:text-orange-500 block px-3 py-2 rounded-md text-xs border-t border-gray-100 first:border-t-0 transition-colors duration-150"
                                >
                                  {subOption.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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