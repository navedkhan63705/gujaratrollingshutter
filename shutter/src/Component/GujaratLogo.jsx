import React from 'react';

const GujaratLogo = ({ className = "", height = "100" }) => {
  return (
    <svg 
      className={className}
      height={height} 
      viewBox="5 10 450 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background hexagon */}
      <path 
        d="M75,10 L125,10 L145,50 L125,90 L75,90 L55,50 Z" 
        fill="none" 
        stroke="#B25000" 
        strokeWidth="3" 
      />
      
      {/* Gujarat state silhouette - improved path */}
      <path 
        d="M85,40 C90,35 93,38 100,35 C105,33 108,36 112,33 C116,30 120,32 123,35 C126,38 130,36 133,42 C136,48 140,45 138,52 C136,59 140,62 138,67 C136,72 133,73 128,71 C123,69 118,71 113,68 C108,65 103,67 98,63 C93,59 89,61 84,58 C80,55 79,52 80,48 C81,44 80,45 85,40 Z" 
        fill="white" 
      />
      
      {/* Text with better positioning and size */}
      <text 
        x="155" 
        y="40" 
        fontSize="30" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fill="#000"
        letterSpacing="0.5"
      >GUJARAT</text>
      
      <text 
        x="145" 
        y="70" 
        fontSize="22" 
        fontFamily="Arial, sans-serif" 
        fontWeight="bold" 
        fill="#000"
        letterSpacing="0.5"
      >ROLLING SHUTTER</text>
    </svg>
  );
};

export default GujaratLogo;