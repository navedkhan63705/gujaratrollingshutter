import React, { useState } from 'react';
import service from '../assets/Service.png'

const Service = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Icon components using SVG directly
  const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
  
  const ToolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
  
  const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
  
  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );
  
  const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
  
  const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
  
  const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
  
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 mt-1 mr-2 flex-shrink-0">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
  
  const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
  
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
  
  const services = [
    {
      id: 1,
      title: 'Commercial Rolling Shutters',
      description: 'Heavy-duty security solutions for shops, malls & commercial spaces',
      icon: <ShieldIcon />,
      category: 'commercial',
      features: [
        'Break-resistant galvanized steel',
        'Anti-theft locking mechanisms',
        'Motorized automation options',
        'Push-button operation',
        'Custom sizing & branding'
      ]
    },
    {
      id: 2,
      title: 'Residential Rolling Shutters',
      description: 'Elegant & secure shutters for homes and residential properties',
      icon: <ShieldIcon />,
      category: 'residential',
      features: [
        'Noise reduction technology',
        'Weather & dust protection',
        'Insulation benefits',
        'Remote control options',
        'Aesthetic design choices'
      ]
    },
    {
      id: 3,
      title: 'Industrial Rolling Shutters',
      description: 'Extra-strength shutters for factories, warehouses & loading bays',
      icon: <SettingsIcon />,
      category: 'industrial',
      features: [
        'Heavy-gauge steel construction',
        'High-speed automation systems',
        'Fire-resistant materials',
        'Extra-wide installation options',
        'High security locking systems'
      ]
    },
    {
      id: 4,
      title: 'Rolling Grilles',
      description: 'Visibility with security for showrooms, malls & visible storefronts',
      icon: <ShieldIcon />,
      category: 'commercial',
      features: [
        'Elegant design patterns',
        'Maximum visibility',
        'Aluminum or steel options',
        'Collapsible construction',
        'Seamless operation'
      ]
    },
    {
      id: 5,
      title: 'Emergency Repair Services',
      description: '24/7 repair & maintenance for all shutter emergencies',
      icon: <ToolIcon />,
      category: 'services',
      features: [
        'Rapid response team',
        'Genuine replacement parts',
        'Skilled technicians',
        'Emergency hotline',
        'Affordable repair packages'
      ]
    },
    {
      id: 6,
      title: 'Maintenance Packages',
      description: 'Preventive care packages to extend the life of your shutters',
      icon: <SettingsIcon />,
      category: 'services',
      features: [
        'Quarterly inspections',
        'Lubrication services',
        'Hardware tightening',
        'Motor calibration',
        'Preventive part replacement'
      ]
    }
  ];

  const benefits = [
    {
      icon: <AwardIcon />,
      title: "Premium Quality Materials",
      description: "We use only high-grade steel and aluminum imported from trusted suppliers"
    },
    {
      icon: <ClockIcon />,
      title: "Swift 48-Hour Installation",
      description: "Our expert team completes most installations within 2 working days"
    },
    {
      icon: <TruckIcon />,
      title: "Free Delivery",
      description: "Complimentary delivery across Gujarat state on all orders"
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Patel',
      business: 'Patel Electronics, Ahmedabad',
      content: 'Gujarat Rolling Shutter provided excellent security solutions for all three of my electronics showrooms. Their motorized shutters work flawlessly even after 5 years.',
      rating: 5
    },
    {
      name: 'Meena Shah',
      business: 'Shah Textiles, Surat',
      content: 'We chose their industrial shutters for our warehouse and have been extremely satisfied with the quality. Their after-sales service is prompt and professional.',
      rating: 5
    },
    {
      name: 'Gujarat Mall Management',
      business: 'Ahmedabad Central Mall',
      content: 'All 45 shops in our mall use Gujarat Rolling Shutter products. Their maintenance team keeps everything running smoothly with quarterly service.',
      rating: 4
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  return (
    <div className="min-h-screen mt-7 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Property with Gujarat's Finest Shutters</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-xl">Providing premium rolling shutters for commercial, residential, and industrial properties across Gujarat since 1985.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 
                <button
                onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-amber-700 transition-colors">
                  Our Services
                </button>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src={service}
                  alt="Rolling Shutter Installation" 
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tab Navigation */}
      <section  id="services" className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our full range of rolling shutter solutions customized for your specific security needs.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-full font-medium ${activeTab === 'all' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            All Services
          </button>
          <button 
            onClick={() => setActiveTab('commercial')}
            className={`px-6 py-3 rounded-full font-medium ${activeTab === 'commercial' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Commercial
          </button>
          <button 
            onClick={() => setActiveTab('residential')}
            className={`px-6 py-3 rounded-full font-medium ${activeTab === 'residential' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Residential
          </button>
          <button 
            onClick={() => setActiveTab('industrial')}
            className={`px-6 py-3 rounded-full font-medium ${activeTab === 'industrial' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Industrial
          </button>
          <button 
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 rounded-full font-medium ${activeTab === 'services' ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            Repair & Maintenance
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Gujarat Rolling Shutter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">With over 35 years of experience, we've built our reputation on quality, reliability, and exceptional service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Trusted by thousands of businesses and homeowners across Gujarat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
            View All Testimonials
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Property's Security?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect rolling shutter solution.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919876543210" className="flex items-center justify-center bg-white text-amber-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              <PhoneIcon />
              Call Now: +91 9024441665
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;