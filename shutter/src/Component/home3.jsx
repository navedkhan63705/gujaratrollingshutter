import React from 'react';

const Home3 = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Manual Shutter",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/10/XY/JT/SE/20702270/manual-shutter-500x500.jpg",
    },
    {
      id: 2,
      name: " Gear Rolling Shutter",
      image: "https://th.bing.com/th/id/R.9a2baa3a8f848d0a6d54ca4e492ee258?rik=HUxhWK1ItzijtA&riu=http%3a%2f%2fripalrollingshutters.com%2fwp-content%2fuploads%2f2021%2f06%2fWhatsApp-Image-2021-09-22-at-12.51.53-PM.jpeg&ehk=R%2fkluOATCWkT5z1KKZLRb3ZDo%2fxiKlFKVeBLp46lu6Y%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name:  "Motories Rolling Shutter",
      image: "https://tiimg.tistatic.com/fp/1/008/302/painted-surface-mild-steel-automatic-rolling-shutter-with-motorized-831.jpg",
    },
    {
      id: 4,
      name: "M S Sliding Gate",
      image: "https://www.mrmtech.in/wp-content/uploads/2023/02/Mild-Steel-Swing-Gates-MR-MSSG46-1.jpg",
    },
    {
      id: 5,
      name: "Fire Resistant Door",
      image: "https://img4031.weyesimg.com/uploads/lvzznuhf.allweyes.com/images/15350871185123.jpg?imageView2/2/w/1920/q/75",
    },
    {
      id: 6,
      name: "M S Raling",
      image: "https://th.bing.com/th/id/OIP.Rvk_Bi34bx-CwZGfxTApGgHaHa?rs=1&pid=ImgDetMain",
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
  <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center animate-pulse">
    Our Products
  </h1>
  <p className="text-gray-600 text-center transition-all duration-500 hover:text-gray-900 hover:scale-105">
    Discover our high-quality selection of products
  </p>
</header>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="flex flex-col">
              {/* Product Image Box */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mb-3">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Product Name and View Button Outside Box */}
              <h2 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h2>
              <button className="flex items-center text-orange-400 hover:text-orange-700 transition-colors font-medium">
                View Product
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3;