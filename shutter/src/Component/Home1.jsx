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