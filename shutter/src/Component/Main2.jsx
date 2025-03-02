import React, { useState,useEffect } from 'react'



const Main2 = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

     
    const products = [
        {
          id: 1,
          name: "Wireless Headphones",
          image: "/api/placeholder/400/300",
          category: "Electronics"
        },
        {
          id: 2,
          name: "Organic Cotton T-shirt",
          image: "/api/placeholder/400/300",
          category: "Clothing"
        },
        {
          id: 3,
          name: "Smart Watch Series 5",
          image: "/api/placeholder/400/300",
          category: "Electronics"
        },
        {
          id: 4,
          name: "Leather Wallet",
          image: "/api/placeholder/400/300",
          category: "Accessories"
        },
        {
          id: 5,
          name: "Stainless Steel Water Bottle",
          price: "$24.99",
          image: "/api/placeholder/400/300",
          rating: 4.6,
          category: "Home"
        },
        {
          id: 6,
          name: "Wireless Charging Pad",
          image: "/api/placeholder/400/300",
          category: "Electronics"
        },
        {
          id: 7,
          name: "Bluetooth Speaker",
          image: "/api/placeholder/400/300",
          category: "Electronics"
        },
        {
          id: 8,
          name: "Fitness Tracker Band",
          image: "/api/placeholder/400/300",
          category: "Sports"
        }
      ];
      useEffect(() => {
        const maxScroll = (products.length - 4) * 280; // Adjust based on card width + gap
        
        const interval = setInterval(() => {
          setScrollPosition((current) => {
            // Reset to beginning when we reach the end
            if (current >= maxScroll) return 0;
            // Otherwise move forward
            return current + 280;
          });
        }, 3000);
        
        return () => clearInterval(interval);
      }, [products.length]);
     
    return (
        <div>
            <div> 
            <p>Since 1996</p>
            </div>
            <div>
            <p>Gujarat Automations Pvt Ltd</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia enim eos, nam expedita ut dicta nostrum tenetur eligendi laborum corporis error aut cumque
                     alias id magnam dolorum impedit beatae dolor debitis in labore. Possimus accusamus doloremque eos ducimus nulla facilis distinctio iusto, illum neque suscipit impedit,
                     obcaecati omnis voluptate repudiandae laborum eum perspiciatis commodi quibusdam pariatur atque. Voluptates commodi molestias ducimus accusamus numquam impedit, sint
                     sed voluptate cupiditate, unde, nesciunt ipsum nam! Nam minima necessitatibus, sit eaque iure sint ipsam fugiat nulla, reiciendis voluptas nisi voluptatum enim minus 
                     est corrupti iste nobis totam libero tenetur error facere animi ipsum culpa? Ad voluptas, provident quam porro quaerat nam eos? Amet cum illo earum natus hic! Placeat
                     alias necessitatibus, asperiores temporibus sit eligendi similique nobis voluptas. Quisquam, vitae? Omnis, mollitia recusandae qui suscipit facilis cum id porro obcaecati.
                     Ad natus veniam tempora consequatur dolores est nam dolore cupiditate inventore velit harum consequuntur totam atque eum quaerat sequi neque, repellat accusamus reiciendis.
                     Nesciunt, et. Eaque necessitatibus aliquam saepe repellat maiores illo, officiis adipisci. Iure, iste. Provident iure a sint,
                     laboriosam veniam fugit quae ullam quisquam quasi porro vel expedita dolorum illum officiis deleniti recusandae, minus quod modi eveniet ipsam, impedit ducimus hic?</p>
            </div>
            <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-md mx-3 flex-shrink-0 overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-medium text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
                
                <div className="flex items-center mt-1">
                 
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};
export default Main2;