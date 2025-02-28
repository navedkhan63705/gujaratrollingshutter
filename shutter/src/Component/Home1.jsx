import React, { useState, useEffect, useCallback } from 'react';


const Home1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:'/api/placeholder/1920/1080',
      heading: 'Welcome to Transpire',
      buttonText: 'Discover More'
    },
    {
      id: 2,
      image: '/api/placeholder/1920/1080',
      heading: 'Innovative Solutions',
      buttonText: 'Our Products'
    },
    {
      id: 3,
      image: '/api/placeholder/1920/1080',
      heading: 'Sustainable Future',
      buttonText: 'Learn More'
    },
    {
      id: 4,
      image: '/api/placeholder/1920/1080',
      heading: 'Expert Support',
      buttonText: 'Contact Us'
    },
    {
      id: 5,
      image: '/api/placeholder/1920/1080',
      heading: 'Join Our Community',
      buttonText: 'Sign Up Now'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides.length]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center text-center">
              <div className="px-4">
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {slide.heading}
                </h1>
                <button className="rounded bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-75"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-75"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition ${currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>   
    </div>
  );
};

export default Home1;