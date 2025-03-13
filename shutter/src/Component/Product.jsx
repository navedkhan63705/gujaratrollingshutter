import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productData, speciality } from '../assets/asset.js';

export default function Product() {
  const { speciality: urlSpeciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(urlSpeciality || "");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const Products = [
    "Shutter",
    "Aluminium Section",
    "Gates & Door",
    "Roof Product",
    "Office Work Station",
    "Raling"
     
  ];

  const applyFilter = () => {
    if (selectedSpeciality && selectedOption) {
      // Filter by both main category and subcategory
      setFilterDoc(productData.filter(
        (doc) => doc.speciality === selectedSpeciality && doc.subCategory === selectedOption
      ));
    } else if (selectedSpeciality) {
      // Filter by main category only
      setFilterDoc(productData.filter((doc) => doc.speciality === selectedSpeciality));
    } else {
      // No filter, show all products
      setFilterDoc(productData);
    }
  };

  // Update filters when URL parameter changes
  useEffect(() => {
    // Set the selected speciality from URL parameter when component mounts or URL changes
    if (urlSpeciality) {
      setSelectedSpeciality(urlSpeciality);
    }
  }, [urlSpeciality]);

  // Apply filters when selection changes
  useEffect(() => {
    applyFilter();
  }, [selectedSpeciality, selectedOption]);

  const handleSpecialityClick = (spec) => {
    if (selectedSpeciality === spec) {
      setSelectedSpeciality("");
      setSelectedOption("");
      navigate("/product");
    } else {
      setSelectedSpeciality(spec);
      setSelectedOption(""); // Reset subcategory when changing main category
      navigate(`/product/${spec}`);
    }
  };

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption("");
    } else {
      setSelectedOption(option);
    }
  };

  // Find current speciality object based on selection
  const currentSpeciality = speciality.find(item => item.title === selectedSpeciality);

  return (
    <div className="mt-35 mb-5 w-screen min-h-screen">

      {/* Mobile category selector (visible only on small screens) */}
      <div className="block sm:hidden mb-4">
        <select
          value={selectedSpeciality}
          onChange={(e) => handleSpecialityClick(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-black"
        >
          <option value="">All Categories</option>
          {Products.map((spec) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>

        {/* Mobile subcategory selector (shows only when category is selected) */}
        {selectedSpeciality && currentSpeciality && currentSpeciality.Options && (
          <select
            value={selectedOption}
            onChange={(e) => handleOptionClick(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded bg-white text-black"
          >
            <option value="">All {selectedSpeciality} Products</option>
            {currentSpeciality.Options.map((option, idx) => (
              <option key={idx} value={option.label}>{option.label}</option>
            ))}
          </select>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-5 mt-3 md:mt-5">
        {/* Main categories - hidden on mobile */}
        <div className="hidden sm:flex sm:flex-col gap-3 text-sm text-gray-600 w-60 flex-shrink-0">
          {Products.map((spec) => (
            <div key={spec} className="flex flex-col">
              <p
                onClick={() => handleSpecialityClick(spec)}
                className={`w-full pl-3 py-1.5 pr-5 border border-gray-300 rounded transition cursor-pointer 
                  ${selectedSpeciality === spec ? "bg-orange-100 text-black font-medium" : ""}`}
              >
                {spec}
              </p>

              {/* Show subcategories when this speciality is selected */}
              {selectedSpeciality === spec && currentSpeciality && currentSpeciality.Options && (
                <div className="ml-6 mt-2 mb-2">
                  {currentSpeciality.Options.map((option, idx) => (
                    <p
                      key={idx}
                      onClick={() => handleOptionClick(option.label)}
                      className={`pl-3 py-1 pr-4 mb-1 border-l-2 transition cursor-pointer 
                        ${selectedOption === option.label ? "border-orange-500 text-orange-600 font-medium" : "border-gray-200"}`}
                    >
                      {option.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Product display area */}
        <div className="w-full">
          {/* Active filters display */}
          {(selectedSpeciality || selectedOption) && (
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm text-gray-500">Filters:</span>
              {selectedSpeciality && (
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  {selectedSpeciality}
                </span>
              )}
              {selectedOption && (
                <span className="bg-orange-50 text-orange-800 px-2 py-1 rounded text-xs">
                  {selectedOption}
                </span>
              )}
            </div>
          )}

          {/* Product grid - centered only when subcategory is selected */}
          <div className={selectedOption ? "flex justify-center w-full" : ""}>
      <div className={`grid gap-3 md:gap-4 w-full 
        ${filterDoc.length === 1 ? "grid-cols-1 md:grid-cols-2" :
          filterDoc.length === 2 ? "grid-cols-2 md:grid-cols-3" :
            filterDoc.length === 3 ? "grid-cols-1   md:grid-cols-3 lg:grid-cols-3" :
              "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}
      >
              {filterDoc.length > 0 ? (
                filterDoc.slice(0, 10).map((item, index) => (
                  <div
                    className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Responsive aspect ratio container for consistent image sizing */}
                    <div className="relative pt-[70%]">
                      <img
                        onClick={()=>handleSpecialityClick(e.target.value)}
                        className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover bg-orange-50"
                        src={item.image}
                        alt={item.name}
                        value={item.name}
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <div className="flex items-center justify-center gap-2 text-sm text-green-500 mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <p>Available</p>
                      </div>
                      <p className="text-gray-900 text-base md:text-lg font-medium line-clamp-2">{item.name}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{item.subCategory}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">No products found for this selection. Please select a category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}