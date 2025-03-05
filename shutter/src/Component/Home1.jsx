import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Home1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [titleVisible, setTitleVisible] = useState(true);
  const timeoutRef = useRef(null);
  
  
  const slides = [
    { 
      id: 1, 
      url: "https://img.freepik.com/premium-photo/empty-parking-garage-background_976047-2588.jpg", 
      alt: "Forest Path", 
      title: "Enchanted Forest Path"
    },
    { 
      id: 2, 
      url: 'https://img.freepik.com/premium-photo/roller-door-roller-shutter-used-factory-warehouse_1126269-1699.jpg', 
      alt: "Mountain Landscape", 
      title: "Breathtaking Mountain Views"
    },
    { 
      id: 3, 
      url: "https://www.avians.co.in/images/banner/motorized-rolling-shutters/MS-GI-Galvalume-Rolling-Shutter/MS-GI-Galvalume-ss-Rolling-Shutter3.jpg", 
      alt: "City Skyline", 
      title: "Modern City Skyline"
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    // Reset title animation when slide changes
    setTitleVisible(false);
    setTimeout(() => setTitleVisible(true), 50);
    
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Carousel Track */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full w-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <div className={`absolute inset-0 opacity-40`}></div>
            <img 
              src={slide.url} 
              alt={slide.alt} 
              className="object-cover w-full h-full"
            />
            
            {/* Left-aligned Title with Border and Gray Background Animation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <div 
                className={`transform transition-all duration-1000 ${
                  titleVisible && currentIndex === index
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                }`}
              >
                <h2 
                  className="text-white ml-20 text-3xl md:text-4xl lg:text-5xl font-bold px-6 py-4 
                               bg-opacity-20 border-r-4 border-t-4 border-b-4  border-none
                             relative overflow-hidden"
                >
                  {/* Animated background gradient effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 
                              animate-pulse opacity-50"
                  ></div>
                  {/* Title text */}
                  <span className="relative z-10">{slide.title}</span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-30 hover:bg-opacity-50 
                  rounded-full p-3 focus:outline-none transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-30 hover:bg-opacity-50 
                  rounded-full p-3 focus:outline-none transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      
      {/* Play/Pause Button */}
      <button 
        onClick={togglePlayPause}
        className="absolute bottom-8 right-8 bg-black bg-opacity-30 hover:bg-opacity-50 
                  rounded-full p-3 focus:outline-none transition-colors duration-300 z-10"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full focus:outline-none transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home1;