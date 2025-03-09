import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../assets/asset';

const Home1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [titleVisible, setTitleVisible] = useState(true);
  const timeoutRef = useRef(null);
  
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
    <div className="w-full  md:h-screen sm:h-200 xs:h-150 overflow-hidden relative">
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
                  className="text-white ml-4 sm:ml-8 md:ml-16 lg:ml-20 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4
                             bg-opacity-20 border-r-4 border-t-4 border-b-4 border-none
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
      
      {/* Navigation Arrows - Adjusted for responsive design */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-opacity-30 hover:bg-opacity-50 
                  rounded-full p-1 sm:p-2 md:p-3 focus:outline-none transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-opacity-30 hover:bg-opacity-50 
                  rounded-full p-1 sm:p-2 md:p-3 focus:outline-none transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
      
      {/* Indicator Dots - Made responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-1 sm:space-x-2 md:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full focus:outline-none transition-colors duration-300 ${
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