import React, { useState } from 'react';
import supportbg from "../assets/supportBg.jpg";

const Home2 = () => {
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [currentThumbImage, setCurrentThumbImage] = useState(0);
  
  // Sample images (using placeholder images)
  const images = [
    supportbg,
    supportbg,
    supportbg,
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
      <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-black">Welcome to our Product</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad officia, libero omnis obcaecati unde dolore, magnam ea tempore fugit error
             ratione sed ipsum reiciendis fuga aliquid corrupti rem, nesciunt ex sequi impedit. Sint at consectetur minima iste velit quasi voluptatibus
              perspiciatis alias! A accusamus aliquid voluptate corrupti aliquam recusandae modi enim, autem, deserunt doloribus ipsam! Reprehenderit ut
               a quos, soluta animi quas minus odit culpa nostrum quibusdam, iste repellat praesentium consectetur suscipit mollitia aspernatur nam at ratione 
               quidem cumque! In quibusdam
            , perspiciatis debitis sunt inventore aliquid laborum perferendis ab adipisci mollitia numquam. 
            Asperiores facere veniam enim tempore, soluta voluptate rem? ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
            non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
            dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit 
            odio.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">
            Learn More
          </button>
        </div>
        {/* Left Column - Image Swipers */}
        <div className="flex flex-col space-y-4">
          {/* Main Swiper (Now First and Larger) */}
          <div className="relative overflow-hidden rounded-lg h-96">
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
          <div className="relative overflow-hidden rounded-lg h-24">
            <img 
              src={images[currentThumbImage]} 
              alt={`Thumbnail ${currentThumbImage + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-between p-2">
              <button 
                onClick={() => handlePrev('thumb')} 
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                ←
              </button>
              <button 
                onClick={() => handleNext('thumb')} 
                className="bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                →
              </button>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-xs rounded">
              {currentThumbImage + 1} / {images.length}
            </div>
          </div>
        </div>
         
         
      </div>
    </div>
  );
};

export default Home2;