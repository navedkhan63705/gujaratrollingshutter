import React from "react";

export const Home5 = () => {
  return (
    <div 
    className="flex flex-col md:flex-row w-full p-8 gap-8"
    style={{ backgroundImage: 'url("https://images.pond5.com/plain-black-background-dark-gray-footage-291202851_iconl.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <p className="text-lg text-white font-bold">Serving in</p>
          <p className="text-3xl font-bold text-orange-800">Gujarat</p>
        </div>
        <div className="max-w-md">
          <img 
            src="https://d-maps.com/m/asia/india/gujarat/gujarat49.gif" 
            alt="Map of Gujarat" 
            className="w-full h-auto bg-none border rounded shadow-md"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="mb-6 ">
          <h1 className="text-4xl bg-orange-500 ml-20 mb-10 rounded-full font-bold text-white mb-2 inline-block px-4 py-2">PAN GUJARAT</h1>
          <p className="text-3xl font-bolt pl-5 text-white">India</p>
        </div>

        <div className="space-y-3 pl-5">
          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-white">123 Gujarat Street, Ahmedabad, Gujarat, India</p>
          </div>

          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-white">contact@pangujaratindia.com</p>
          </div>

          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p className="text-white">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
};