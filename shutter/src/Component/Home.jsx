import React from 'react';
import Home1 from './Home1';
import Home2 from './home2';
import Home3 from './home3';
import Home4 from './home4';
import { Home5 } from './home5';

const Home = () => {
   const scrollbarStyles = `
   .custom-scrollbar::-webkit-scrollbar {
     width: 8px;
   }
   .custom-scrollbar::-webkit-scrollbar-track {
     background: white;
     border-radius: 10px;
   }
   .custom-scrollbar::-webkit-scrollbar-thumb {
     background-color: #f97316; /* orange-500 */
     border-radius: 10px;
     border: 2px solid white;
   }
   .custom-scrollbar {
     scrollbar-width: thin;
     scrollbar-color: #f97316 white;
   }
 `;
   return (
      <> 
      <style>{scrollbarStyles}</style>
         <Home1 />
         <Home2/>
         <Home3/>
         <Home4/>
         <Home5/>
      </>
   );
}

export default Home;
