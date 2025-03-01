import React, { useState, useEffect } from 'react';

const Milestone = () => {
  const [visible, setVisible] = useState(false);
  
  // Sample milestone data
  const milestones = [
    {
      id: 1,
      year: "2018",
      title: "Company Founded",
      description: "Our journey began with a simple idea and a passionate team determined to make a difference in the industry."
    },
    {
      id: 2,
      year: "2020",
      title: "First Major Product Launch",
      description: "After months of development and testing, we successfully launched our flagship product to overwhelming market response."
    },
    {
      id: 3, 
      year: "2021",
      title: "International Expansion",
      description: "We expanded our operations to Europe and Asia, bringing our solutions to a global audience and establishing key partnerships."
    },
    {
      id: 4,
      year: "2023",
      title: "Innovation Award",
      description: "Our dedication to excellence was recognized with the prestigious Industry Innovation Award, cementing our position as market leaders."
    },
    {
      id: 5,
      year: "2025",
      title: "Sustainable Future Initiative",
      description: "We launched our commitment to sustainability with a comprehensive program to reduce our carbon footprint and promote eco-friendly practices."
    }
  ];

  useEffect(() => {
    // Set visible to true after component mounts to trigger animations
    setVisible(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header section with animation */}
      <div className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <h1 className="text-4xl font-bold text-center text-black mb-6">Our Journey</h1>
        <p className="text-2xl text-gray-600 text-center mb-16 max-w-2xl  mx-auto">
          From humble beginnings to industry leadership, explore the key milestones that have shaped our company's remarkable growth and success over the years.
        </p>
      </div>
      
      {/* Timeline with milestones */}
      <div className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
        
        {/* Milestone items */}
        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`relative flex transition-all duration-1000 delay-${index * 300} ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Content layout - alternating left and right */}
              <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Text content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="mb-1 text-blue-600 font-bold text-2xl">{milestone.year}</div>
                  <h3 className="text-3xl text-black font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-xl">{milestone.description}</p>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10"></div>
                
                {/* Spacer for the other side */}
                <div className="w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestone;