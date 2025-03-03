import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 


const Home1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [titleVisible, setTitleVisible] = useState(true);
  const timeoutRef = useRef(null);
  
  // Sample image data with titles - replace with your actual images
  const slides = [
    { 
      id: 1, 
      url: 'https://th.bing.com/th/id/R.389535bfb3b8c36ea8dd53cf18807003?rik=HRkNDAvD8%2bzf0A&riu=http%3a%2f%2fwww.jobcrusher.com%2fwp-content%2fuploads%2ftoolsrusticwoodbackgrounddreamstime_m_439266072.jpg&ehk=nvdgNuDwDx9CvkOrHVdRaraAFjz0YSapVAsyFVG%2fhx4%3d&risl=&pid=ImgRaw&r=0', 
      alt: "Mountain Landscape", 
      title: "Breathtaking Mountain Views",
      color: "bg-blue-900" 
    },
    { 
      id: 3, 
      url: "https://davidtyler.com/wp-content/uploads/2016/05/tools_cropped.jpg", 
      alt: "Forest Path", 
      title: "Enchanted Forest Path",
      color: "bg-green-900" 
    },
    { 
      id: 4, 
      url:"https://img.freepik.com/premium-photo/set-plumbing-tools-white_218381-4795.jpg?w=2000", 
      alt: "City Skyline", 
      title: "Modern City Skyline",
      color: "bg-purple-900" 
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
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <div className={`absolute inset-0 ${slide.color} opacity-40`}></div>
            <img 
              src={slide.url} 
              alt={slide.alt} 
              className="object-cover w-full h-full"
            />
            
            {/* Animated Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 
                className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4 py-2  bg-opacity-30 rounded-lg transform transition-all duration-1000 ${
                  titleVisible && currentIndex === slide.id - 1
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2   bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 focus:outline-none transition-colors duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2  bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 focus:outline-none transition-colors duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
      
      {/* Play/Pause Button */}
      <button 
        onClick={togglePlayPause}
        className="absolute bottom-8 right-8 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 focus:outline-none transition-colors duration-300 z-10"
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