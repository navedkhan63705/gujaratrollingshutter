import React, { useState } from 'react';
import GujaratLogo from './GujaratLogo'; 

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Enhanced menu data with nested structure for Products
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

  return (
    <nav className="w-full bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
          <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <GujaratLogo height="50" className="w-auto" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
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
                            <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg z-20 py-1 transform origin-top-left transition-all duration-200 opacity-100 scale-100">
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
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
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
                    <div key={i}>
                      <a
                        href={option.link}
                        className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                      >
                        {option.label}
                      </a>
                      {option.subOptions && (
                        <div className="pl-4 space-y-1">
                          {option.subOptions.map((subOption, j) => (
                            <a
                              key={j}
                              href={subOption.link}
                              className="text-gray-500 hover:text-blue-600 block px-3 py-2 rounded-md text-xs"
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
    </nav>
  );
};

export default Navbar;