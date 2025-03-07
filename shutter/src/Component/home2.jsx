import React, { useState, useEffect } from 'react';
import supportbg from "../assets/supportBg.jpg";
 
const Home2 = () => {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = [
    {
      id: 1,
      name: "Aluminium Shutter",
      image: "https://th.bing.com/th/id/R.ac2b6e4c149dcce31a582a7588a9e755?rik=GtRCkttMwv6iJA&riu=http%3a%2f%2fswastikshutters.com%2fassets%2fimg%2fservice-photo%2faluminium.jpg&ehk=l163oyPBJR%2fNDhcPyk7oPJ6Q1rmZaAqyEzrN%2fLt82uQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Mirror Senser Door",
      image: "https://expertautomationbd.com/wp-content/uploads/2022/05/1.Automatic-Sensor-Sliding-Doorribeng.it_.jpg",
    },
    {
      id: 3,
      name: "Roof Ceiling",
      image: "https://thumbs.dreamstime.com/b/led-light-used-modern-construction-subway-station-airport-railway-station-bus-station-shopping-mall-office-shopping-mall-137112675.jpg",
    },
    {
      id: 4,
      name: "Cabines",
      image: "https://i.pinimg.com/originals/93/6a/3e/936a3e3b8dff4330f2069a235aede6ed.jpg",
    },
    {
      id: 5,
      name: "Nut & Bolt",
      image: "https://th.bing.com/th?id=OPAC.d3XcwuPd4%2fC%2b0A474C474&w=592&h=550&o=5&pid=21.1",
    },
    {
      id: 6,
      name: "Pllywood Table",
      image: "https://th.bing.com/th/id/OIP.7hUJv_4xEVTNhZmLMHqY1QHaEK?rs=1&pid=ImgDetMain",
    }
  ];

  // Auto scroll effect for products
  useEffect(() => {
    const maxScroll = (products.length - 4) * 280; // Adjust based on card width + gap
    
    const interval = setInterval(() => {
      setScrollPosition((current) => {
        // Reset to beginning when we reach the end
        if (current >= maxScroll) return 0;
        // Otherwise move forward
        return current + 280;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [products.length]);
 
  // Sample images (using placeholder images)
  const images = [
    "https://rudhar.in/img/sc/industrial-sliding-gate-SC.jpg",
    "https://cpimg.tistatic.com/08605879/b/4/Manual-Rolling-Shutter.jpg",
    "https://th.bing.com/th/id/OIP.bGw7pXjkpqxbCOxib0Nd0wHaEP?rs=1&pid=ImgDetMain",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/335739604/ED/TI/IL/66021474/mild-steel-manual-rolling-shutter-1000x1000.jpg"
  ];
  
  // Auto image change effect for main image
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentMainImage(prevImage => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(imageInterval);
  }, [images.length]);
  
  const handleNext = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev + 1) % images.length);
    }
  };
  
  const handlePrev = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-4 bg-gray-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="flex flex-col p-8">
    <div className="border-b pb-3 mb-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to our Product</h2>
    </div>
    
    <div className="prose prose-gray max-w-none mb-8">
      <p className="text-gray-700 leading-relaxed font-serif ">
      where we take pride in offering a wide range of high-quality industrial and commercial solutions designed to meet the evolving needs of businesses. Our company specializes in manufacturing durable and innovative products that enhance security, efficiency, and functionality. Whether you're looking for industrial shutters, sliding gates, or custom office furniture, we have the expertise to deliver superior solutions. Every product we develop is designed to provide long-term value, ensuring your business operates smoothly while maintaining safety and efficiency. Our commitment to excellence drives us to continuously improve and innovate, making us a trusted name in the industry.
      </p>
      
      <p className="text-gray-700 leading-relaxed font-serif mt-4">
      One of our key product categories includes industrial shutters, which are essential for securing commercial and industrial spaces. We manufacture various types of shutters, including steel shutters, known for their strength and durability, manual shutters, which offer affordability and ease of use, and motor-operated shutters, which provide effortless control with advanced automation. Additionally, our gear shutters are designed for enhanced safety and smooth operation, while our fire-rated shutters offer critical protection by preventing fire spread in emergency situations. Each of these shutters is crafted using high-quality materials and cutting-edge technology to ensure long-lasting performance, security, and convenience for businesses.      </p>
      
      <p className="text-gray-700 leading-relaxed font-serif mt-4">
      In addition to shutters, we manufacture high-quality sliding gates, which provide a strong, space-saving security solution for commercial and industrial premises. Our fire gates are specially designed to enhance fire safety, helping to contain flames and smoke in case of emergencies. These products play a crucial role in securing properties and ensuring compliance with safety regulations. Our team ensures that every gate we produce meets the highest industry standards, offering seamless operation, strong build quality, and customizable designs to match the unique requirements of our customers.      </p>
    </div>
    
    <div className="flex justify-start">
      <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Learn More
      </button>
      <button className="bg-orange-400 ml-10 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
         Enquire Now
      </button>
    </div>
  </div>
</div>
        {/* Left Column - Image Swipers */}
        <div className="flex flex-col space-y-4">
          {/* Main Swiper (Now First and Larger) */}
          <div className="relative overflow-hidden rounded-lg h-150">
            <img 
              src={images[currentMainImage]} 
              alt={`Image ${currentMainImage + 1}`}
              className="w-full h-full object-cover transition-opacity duration-1000"
              key={currentMainImage} // Add key to force re-render and enable animation
            />
            
            
            
            {/* Navigation arrows for manual control */}
            <button 
              onClick={() => handlePrev('main')} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2    bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
              aria-label="Previous image"
            >
              ←
            </button>
            <button 
              onClick={() => handleNext('main')} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2    bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-300"
              aria-label="Next image"
            >
              →
            </button>
          </div>
          
          {/* Product Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md mx-3 flex-shrink-0 overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-lg font-medium text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
                    
                    <div className="flex justify-between items-center mt-3">
                      <button className="bg-orange-400 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-md transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;