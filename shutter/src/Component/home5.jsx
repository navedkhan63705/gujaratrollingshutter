import React from "react";
import map from "../assets/image.png";

export const Home5 = () => {
  return (
    <div
    className="flex flex-col md:flex-row w-full p-8 gap-8"
    style={{ backgroundImage: 'url("https://images.pond5.com/plain-black-background-dark-gray-footage-291202851_iconl.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
        <div className="mb-4">
          <p className="text-lg text-white font-bold">Serving in</p>
          <p className="text-3xl font-bold text-orange-500">Gujarat</p>
        </div>
        <div className="max-w-md flex justify-center">
          <img
            src={map}
            alt="Map of Gujarat"
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="mb-6">
          <h1 className="text-4xl bg-orange-500 mb-4 md:mb-6 rounded-full font-bold text-white px-6 py-2">
            India
          </h1>
          <p className="text-3xl font-bold text-white">PAN GUJARAT</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              ),
              text: "Shalimar Complex,3, Dahej Bypass Rd,near Sherpura, Madina Park, Bharuch,Gujarat 392015.",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              ),
              text: "gujaratrollingshutter2525@gmail.com",
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              ),
              text: "+91 9024441665",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {item.icon}
              </svg>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
