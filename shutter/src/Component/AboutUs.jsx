import React, { useEffect, useState } from 'react';
import image from "../assets/image.png";
import s1 from "../assets/support1.jpg";
 

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to determine if element should be visible based on scroll position
  const isVisible = (threshold) => {
    return scrollY > threshold;
  };
  
  return (
    <div className="relative">
      {/* Hero Section - Full Screen Image */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src={image} 
          alt="Company Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0    flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
        </div>
      </div>
      
      {/* First Section - Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4 text-black">
            Founded in 2020, our company has been at the forefront of innovation in our industry. 
            We believe in creating solutions that not only meet the current needs of our clients 
            but anticipate future challenges as well.
          </p>
          <p className="text-lg text-black">
            Our team of dedicated professionals works tirelessly to ensure that each project 
            exceeds expectations and delivers real value. We're committed to sustainability, 
            ethical business practices, and making a positive impact on the communities we serve.
          </p>
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(200) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={s1}  
              alt="Design Frame 1" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Second Section - Image left, Text right */}
      <div className="flex flex-col md:flex-row-reverse items-center w-full py-20 px-8 bg-gray-50">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(600) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
          <p className="text-lg mb-4 text-black">
            What sets us apart is our unique approach to problem-solving. We combine 
            cutting-edge technology with deep industry expertise to create solutions that 
            are both innovative and practical.
          </p>
          <p className="text-lg text-black">
            We believe in collaborative partnerships with our clients, working closely with 
            them to understand their unique challenges and goals. This collaborative approach 
            ensures that our solutions are tailored to each client's specific needs and deliver 
            measurable results.
          </p>
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(600) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={s1}  
              alt="Design Frame 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Third Section - Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(1000) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg mb-4 text-black">
            Our team is our greatest asset. We bring together talented individuals with diverse 
            backgrounds and expertise, creating a dynamic environment where innovation thrives.
          </p>
          <p className="text-lg text-black">
            We invest in our people, providing opportunities for professional growth and 
            development. This commitment to our team translates into better solutions for our 
            clients and a company culture that values collaboration, creativity, and excellence.
          </p>
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(1000) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={s1} 
              alt="Design Frame 3" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="w-full py-20 px-8 bg-gray-900 text-white">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible(1400) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {/* Years of Excellence */}
            <div className="p-4">
              <div className="text-5xl font-bold text-blue-400 mb-2">12+</div>
              <div className="text-xl">Years of Excellence</div>
            </div>
            
            {/* Cities with Pan-India Presence */}
            <div className="p-4">
              <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-xl">Cities in India</div>
            </div>
            
            {/* Countries Delivered */}
            <div className="p-4">
              <div className="text-5xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-xl">Countries Served</div>
            </div>
            
            {/* Market Share */}
            <div className="p-4">
              <div className="text-5xl font-bold text-blue-400 mb-2">32%</div>
              <div className="text-xl">Market Share</div>
            </div>
            
            {/* Support Data */}
            <div className="p-4">
              <div className="text-5xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-xl">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final Section - Two columns with paragraph and image */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(1800) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-lg mb-4 text-black">
            Looking ahead, we're committed to continuing our journey of innovation and growth. 
            We aim to expand our reach globally while maintaining the personalized service and 
            attention to detail that have become our hallmarks.
          </p>
          <p className="text-lg mb-4 text-black">
            We're investing in emerging technologies that will shape the future of our industry, 
            ensuring that we remain at the cutting edge. At the same time, we're deepening our 
            commitment to sustainability and social responsibility.
          </p>
          <p className="text-lg text-black">
            As we grow, we remain true to our core values and the vision that inspired our founding. 
            We're excited about the future and the opportunities it holds for collaboration, innovation, 
            and positive impact.
          </p>
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(1800) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image}  
              alt="Vision Frame" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;