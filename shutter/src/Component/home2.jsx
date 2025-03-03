import React, { useState, useEffect } from 'react';
import supportbg from "../assets/supportBg.jpg";
 

const Home2 = () => {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [currentThumbImage, setCurrentThumbImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Ultra Thin Laptop",
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      image: "/api/placeholder/300/300",
    },
    {
      id: 5,
      name: "4K Smart TV",
      image: "/api/placeholder/300/300",
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      image: "/api/placeholder/300/300",
    }
  ];

  // Auto scroll effect
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
    supportbg,
    supportbg,
    " ",
    supportbg
  ];
  
  const handleNext = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev + 1) % images.length);
    } else {
      setCurrentThumbImage((prev) => (prev + 1) % images.length);
    }
  };
  
  const handlePrev = (type) => {
    if (type === 'main') {
      setCurrentMainImage((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setCurrentThumbImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-4 bg-gray-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="flex flex-col p-8">
    <div className="border-b pb-4 mb-6">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to our Product</h2>
    </div>
    
    <div className="prose prose-gray max-w-none mb-8">
      <p className="text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officia, libero omnis obcaecati unde dolore, magnam ea tempore fugit error ratione sed ipsum reiciendis fuga aliquid corrupti rem, nesciunt ex sequi impedit. Sint at consectetur minima iste velit quasi voluptatibus perspiciatis alias!
      </p>
      
      <p className="text-gray-700 leading-relaxed mt-4">
        A accusamus aliquid voluptate corrupti aliquam recusandae modi enim, autem, deserunt doloribus ipsam! Reprehenderit ut a quos, soluta animi quas minus odit culpa nostrum quibusdam, iste repellat praesentium consectetur suscipit mollitia aspernatur nam at ratione quidem cumque!
      </p>
      
      <p className="text-gray-700 leading-relaxed mt-4">
        In quibusdam, perspiciatis debitis sunt inventore aliquid laborum perferendis ab adipisci mollitia numquam. Asperiores facere veniam enim tempore, soluta voluptate rem? ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
      </p>
    </div>
    
    <div className="flex justify-start">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Learn More
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button 
                onClick={() => handlePrev('main')} 
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                ←
              </button>
              <button 
                onClick={() => handleNext('main')} 
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                →
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded">
              {currentMainImage + 1} / {images.length}
            </div>
          </div>
          
          {/* Small Swiper (Now Second) */}
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
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-md transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
       
        </div>
         
         
      </div>
    </div>
  );
};

export default Home2;