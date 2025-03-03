import React, { useEffect, useRef, useState } from "react";
import supportbg from "../assets/level4.png";

const Home4 = () => {
  // Create ref for the hero section
  const heroRef = useRef(null);
  // State for tracking visibility
  const [heroVisible, setHeroVisible] = useState(false);
  // Placeholder for background image URL (replace with your actual image path)


  useEffect(() => {
    // Set up Intersection Observer to detect when element enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    // Start observing the hero element
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className={`relative h-96 transition-all duration-1000 ease-out ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{
        backgroundImage: `url(${supportbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0   bg-opacity-40" style={{
      }}></div>
      
      {/* Text overlay centered on image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl mt-10 md:text-5xl font-bold text-white mb-6 text-center">
          <span className="text-gray-800 animate-pulse">Customer</span>{" "}
          <span className="inline-block text-orange-400 animate-bounce">Support</span>{" "}
          <span className="inline-block transition-all duration-700 hover:scale-110 hover:text-orange-300">Center</span>
        </h1>
        <p className="text-white max-w-2xl text-center mb-8 transition-all duration-500 transform hover:scale-105">
          Get the help you need with our{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent font-bold">
            comprehensive support resources
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home4;