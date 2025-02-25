import React, { useState, useEffect } from 'react';

export const Home = () => {
  // Array of actual image URLs
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    // ...etc
  ];    
  
  const [currentImage, setCurrentImage] = useState(0);
  
  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center bg-no-repeat ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Overlay to darken the images and make text more readable */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              Explore the World
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
              Discover breathtaking landscapes and vibrant cities
            </p>
            <button className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-opacity-90 transition-all">
              Start Your Journey
            </button>
          </div>
        </div>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImage ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Content Section After Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Featured Destinations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://cdnjs.cloudflare.com/ajax/libs/images/placeholders/mountains-1.jpg" 
                alt="Mountain landscape" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mountain Retreat</h3>
                <p className="text-gray-600">Experience the serenity of our mountain locations with breathtaking views and fresh air.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 font-medium">Learn more →</a>
              </div>
            </div>
            
            {/* Featured Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://cdnjs.cloudflare.com/ajax/libs/images/placeholders/beach-1.jpg" 
                alt="Beach sunset" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Coastal Paradise</h3>
                <p className="text-gray-600">Relax on pristine beaches with crystal clear waters and golden sands.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 font-medium">Learn more →</a>
              </div>
            </div>
            
            {/* Featured Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://cdnjs.cloudflare.com/ajax/libs/images/placeholders/city-3.jpg" 
                alt="City skyline" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Urban Adventure</h3>
                <p className="text-gray-600">Explore vibrant city life with culture, cuisine, and unforgettable experiences.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 font-medium">Learn more →</a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              View All Destinations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

 