import React, { useEffect, useState } from 'react'; 
import s1 from "../assets/image_copy.png";
 
const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  
  useEffect(() => {
    setTitleVisible(true);
  }, []);
  
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
          src={s1}
          alt="Company Hero" 
          className="w-full h-full object-cover"
        />
        
        {/* Hero Title */}
        <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <h2
            className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold px-6 py-4 
               bg-opacity-20 border-none relative overflow-hidden text-center
               ${titleVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
          >
            {/* Animated background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 animate-pulse opacity-50"></div>
            <span className="relative z-10">About Us</span>
          </h2>
        </div>
      </div>
      
      {/* First Section - Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(200) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl text-black font-extrabold mb-6">Our Mission</h2>
          <p className="text-lg mb-4  font-serif text-black">
           At Gujarat Rolling Shutter, our mission is to provide high-quality security and infrastructure solutions that ensure safety, durability, and convenience for our customers. We specialize in manufacturing rolling shutters, sliding gates, automatic shutters, office table cabins, fire gates, and more, catering to residential, commercial, and industrial clients. Our goal is to enhance security while offering seamless functionality through our innovative products. We are committed to using premium materials and advanced technology to create solutions
           that not only protect but also add value to properties. By continuously evolving with industry advancements, we strive to set new standards for reliability and excellence.
          </p>
         
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(200) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://www.awpem.com/assets/img/about/mission-awpem.png"
              alt="Design Frame 1" 
              className="w-full h-120 object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Second Section - Image left, Text right */}
      <div className="flex flex-col md:flex-row-reverse items-center w-full py-20 px-8 bg-gray-50">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(600) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl text-black font-extrabold mb-6">Our Approach</h2>
          <p className="text-lg mb-4 font-serif text-black">
          Our approach is centered around precision, customization, and customer satisfaction. We believe that every client has unique needs, which is why we offer tailor-made solutions that align with specific security and infrastructure requirements. From the initial consultation to the final installation, we maintain a customer-centric approach, ensuring transparency, efficiency, and quality at every step. Our manufacturing process follows strict quality control measures, and we incorporate the latest technology to enhance durability and performance. Additionally,
           we provide after-sales support to guarantee long-term functionality, ensuring that our clients receive not just a product, but a complete security solution.
          </p>
          
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(600) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://www.marvell.com/content/dam/marvell/en/company/images/heroes/bnr-hero-855x504-company-contact-us.jpg"  
              alt="Design Frame 2" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Third Section - Text left, Image right */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(1000) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl text-black font-extrabold mb-6">Our Team</h2>
          <p className="text-lg mb-4 font-serif text-black">
          At the core of Gujarat Rolling Shutter is a dedicated team of skilled professionals who bring expertise, innovation, and commitment to our company. Our engineers, designers, and technicians work collaboratively to develop advanced security solutions that cater to the evolving market. With extensive experience and industry knowledge, our team ensures that every product is crafted with precision and meets the highest safety standards. We also invest in continuous training and skill development,
           allowing our workforce to stay ahead of the latest trends and technologies in the industry. Our people are our strength, and their dedication drives our success.
          </p>
         
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(1000) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://th.bing.com/th/id/R.a146e1b93fad74d10b34c68101947010?rik=ttmdvRaHe1XrLg&riu=http%3a%2f%2fwww.nrsb.org%2fwp-content%2fuploads%2f2018%2f08%2fOurTeam.jpg&ehk=83Mazj0UySw8A3mpOEmZ3na4cT1ysovihJzGz5vBMNU%3d&risl=&pid=ImgRaw&r=0" 
              alt="Design Frame 3" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="w-full py-20 px-8 bg-gray-900 text-white">
        <div className={`max-w-8xl mx-auto transition-all duration-1000 ${isVisible(1400) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-extrabold text-white text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {/* Years of Excellence */}
            <div className="p-4">
              <div className="text-5xl font-bold text-orange-400 mb-2">12+</div>
              <div className="text-xl">Years of Excellence</div>
            </div>
            
            {/* Cities with Pan-India Presence */}
            <div className="p-4">
              <div className="text-5xl font-bold text-orange-400 mb-2">20+</div>
              <div className="text-xl">Cities in Gujarat</div>
            </div>
            
            {/* Countries Delivered */}
            <div className="p-4">
              <div className="text-5xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-xl">Cities Served</div>
            </div>
            
            {/* Market Share */}
            <div className="p-4">
              <div className="text-5xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-xl">Market Share</div>
            </div>
            
            {/* Support Data */}
            <div className="p-4">
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-xl">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final Section - Two columns with paragraph and image */}
      <div className="flex flex-col md:flex-row items-center w-full py-20 px-8 bg-white">
        <div className={`w-full md:w-1/2 px-4 mb-8 md:mb-0 transition-all duration-1000 ${isVisible(1800) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl text-black font-extrabold mb-6">Our Vision for the Future</h2>
          <p className="text-lg mb-4 font-serif text-black">
          Looking ahead, our vision is to expand our presence in the security and infrastructure industry while maintaining our core values of quality, trust, and innovation. We aim to integrate smart automation and eco-friendly materials into our product line, making security solutions more sustainable and technologically advanced. As we continue to grow, we are committed to forging long-term relationships with our customers, partners, and stakeholders by delivering products
           that redefine security and efficiency. At Gujarat Rolling Shutter, we are not just shaping security solutions—we are building a safer, smarter, and more reliable future.
          </p>
        
        </div>
        <div className={`w-full md:w-1/2 px-4 transition-all duration-1000 delay-200 ${isVisible(1800) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="border-8 border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://fomitec.com/wp-content/uploads/2021/11/ourvision.jpg"  
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