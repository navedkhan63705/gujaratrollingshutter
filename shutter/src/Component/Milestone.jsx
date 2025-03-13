import React, { useState, useEffect, useRef } from 'react';
import { milestones } from '../assets/asset';

const Milestone = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Set visible to true after component mounts to trigger animations
    setVisible(true);
    
    // Check if viewport is mobile sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set up scroll event listener to check which milestone is in view
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll('.milestone-item');
        
        timelineItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          const isInView = rect.top >= 0 && rect.top <= window.innerHeight * 0.75;
          
          if (isInView) {
            setActiveIndex(index);
          }
        });
      }
    };
    
    // Initial checks
    checkMobile();
    setTimeout(handleScroll, 500);
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:mt-8 py-8 md:mt-12 md:py-16">

      {/* Header section with animation */}
      <div className={`transition-all duration-1000  ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 md:mb-6">
          <span className="relative inline-block  ">
            Our Journey
            <span 
              className="absolute -bottom-2    left-0 w-full h-1 bg-orange-400 rounded-full transform scale-x-0 transition-transform duration-700 ease-out delay-300" 
              style={{ transform: visible ? 'scaleX(1)' : 'scaleX(0)' }}
            ></span>
          </span>
        </h1>
        <p 
          className="text-lg md:text-2xl text-gray-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto transition-all duration-1000 delay-300" 
          style={{ transitionDelay: '300ms' }}
        >
          {isMobile 
            ? "Key milestones in our company's remarkable journey."
            : "From humble beginnings to industry leadership, explore the key milestones that have shaped our company's remarkable growth and success over the years."
          }
        </p>
      </div>
      
      {/* Timeline with milestones */}
      <div className="relative" ref={timelineRef}>
        {/* Center vertical line with animation */}
        <div className={`absolute ${isMobile ? 'left-4 md:left-1/2' : 'left-1/2'} transform ${isMobile ? '-translate-x-0 md:-translate-x-1/2' : '-translate-x-1/2'} h-full w-1 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full overflow-hidden`}>
          <div 
            className={`w-full bg-orange-400 transition-all duration-2000 ease-out ${visible ? 'h-full' : 'h-0'}`}
            style={{ boxShadow: '0 0 8px rgba(251, 146, 60, 0.7)' }}
          ></div>
        </div>
        
        {/* Milestone items */}
        <div className="space-y-12 md:space-y-24">
          {milestones.map((milestone, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={milestone.id}
                className={`relative flex milestone-item group transition-all duration-1000 ease-out hover:scale-105 transform ${visible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Content layout - alternating left and right on desktop, all on right for mobile */}
                <div className={`flex items-center w-full ${isMobile ? 'flex-row' : index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Mobile left spacer (empty on mobile, otherwise depends on layout) */}
                  {isMobile ? (
                    <div className="w-8 md:w-5/12"></div>
                  ) : (
                    index % 2 === 0 ? null : <div></div>
                  )}
                  
                  {/* Text content with border animation on hover */}
                  <div 
                    className={`${isMobile ? 'w-11/12 text-left pl-6' : 'w-5/12'} relative bg-white shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 
                      ${!isMobile && index % 2 === 0 ? 'text-right pr-8 mr-4' : 'text-left pl-8 ml-4'}
                      ${isActive ? 'bg-white shadow-lg' : 'bg-transparent'}`}
                    style={{ 
                      borderImage: isActive ? 'linear-gradient(45deg, #f97316, #fb923c) 1' : 'linear-gradient(45deg, transparent, transparent) 1',
                      transition: 'border-image 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease'
                    }}
                  >
                    <div className="mb-1 text-orange-400 font-bold text-xl md:text-2xl group-hover:text-orange-500 transition-colors duration-300">{milestone.year}</div>
                    <h3 className="text-xl md:text-3xl text-black font-semibold mb-1 md:mb-2 transition-all duration-300 group-hover:translate-x-1">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm md:text-xl transition-colors duration-300 group-hover:text-gray-800">
                      {isMobile 
                        ? milestone.description.length > 100 
                          ? `${milestone.description.substring(0, 100)}...` 
                          : milestone.description
                        : milestone.description
                      }
                    </p>
                    
                    {/* Corner decorations - visible only on desktop */}
                    {!isMobile && (
                      <>
                        <div className="absolute w-3 h-3 border-t-2 border-l-2 border-orange-400 top-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute w-3 h-3 border-t-2 border-r-2 border-orange-400 top-0 right-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute w-3 h-3 border-b-2 border-l-2 border-orange-400 bottom-0 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                        <div className="absolute w-3 h-3 border-b-2 border-r-2 border-orange-400 bottom-0 right-0 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Center dot with pulse animation */}
                  <div className={`absolute ${isMobile ? 'left-4 md:left-1/2' : 'left-1/2'} transform ${isMobile ? '-translate-x-0 md:-translate-x-1/2' : '-translate-x-1/2'} transition-all duration-300 z-10`}>
                    <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border-3 md:border-4 border-orange-400 group-hover:border-orange-500 transition-colors duration-300
                                    ${isActive ? 'scale-125' : 'scale-100'}`}></div>
                    {isActive && (
                      <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-400 animate-ping opacity-75"></div>
                    )}
                  </div>
                  
                  {/* Desktop right spacer (empty on desktop depending on layout, not used on mobile) */}
                  {!isMobile && index % 2 === 0 && <div className="w-5/12"></div>}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Final dot at the end */}
        <div 
          className={`absolute bottom-0 ${isMobile ? 'left-4 md:left-1/2' : 'left-1/2'} transform ${isMobile ? '-translate-x-0 md:-translate-x-1/2' : '-translate-x-1/2'} translate-y-6 md:translate-y-12 transition-all duration-500`}
          style={{ opacity: visible ? 1 : 0, transitionDelay: '2000ms' }}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-orange-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;