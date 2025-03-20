import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "../assets/asset.js";

export default function ProductDetails() {
  const { speciality, productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the product from the productData based on name and speciality
    const foundProduct = productData.find(
      (item) => item.name === productName && item.speciality === speciality
    );

    if (foundProduct) {
      setProduct(foundProduct);
      // Simulate loading time
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
    }
  }, [productName, speciality]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInquiry = () => {
    navigate(`/inquiry/${speciality}/${productName}`);
  };

  // Create images array from product data
  const productImages = product
    ? [
        product.image,
        product.image, // Duplicate for demo purposes
        product.image, // Duplicate for demo purposes
      ]
    : [];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={handleGoBack}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-35 mb-5 w-full min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 bg-gray-50 rounded-md">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-gray-700 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a
                  href="/product"
                  className="text-gray-700 hover:text-orange-500"
                >
                  Products
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <a
                  href={`/product/${speciality}`}
                  className="text-gray-700 hover:text-orange-500"
                >
                  {speciality}
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-500">{productName}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image Gallery */}
          <div className="md:w-1/2">
            {/* Main Image */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 mb-4">
              <div className="relative pt-[100%]">
                {product.video ? (
                  <video
                    src={product.video}
                    controls
                    className="absolute top-0 left-0 w-full h-full object-contain p-4"
                  />
                ) : (
                  <img
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4"
                  />
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-md overflow-hidden cursor-pointer ${
                    selectedImage === index
                      ? "border-orange-500"
                      : "border-gray-200"
                  }`}
                >
                  <div className="relative pt-[100%]">
                    {product.video ? (
                      <video
                        src={product.video}
                        controls
                        className="absolute top-0 left-0 w-full h-full object-contain p-2"
                      />
                    ) : (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute top-0 left-0 w-full h-full object-contain p-2"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                Available
              </span>
              <span className="ml-2 text-sm text-gray-500">
                Category: {product.speciality}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-4">{product.subCategory}</p>

            {/* Price information if available */}
            {product.price && (
              <div className="text-2xl font-semibold text-gray-900 mb-6">
                ₹
                {typeof product.price === "number"
                  ? product.price.toLocaleString()
                  : product.price}
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">
                {product.description ||
                  `This premium ${product.name} from our ${product.speciality} collection offers the perfect blend of style and functionality. Crafted with high-quality materials to ensure durability and long-lasting performance.`}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Premium quality materials</li>
                <li>Available in multiple finishes</li>
                <li>Customizable dimensions</li>
                <li>Professional installation available</li>
                <li>Warranty included</li>
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">Material</span>
                  <p className="font-medium text-black">
                    {product.material || "Premium Aluminum"}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">Finish</span>
                  <p className="font-medium">
                    {product.finish || "Powder Coated"}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">Dimensions</span>
                  <p className="font-medium text-black">
                    {product.dimensions || "Customizable"}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-500 text-sm">Weight</span>
                  <p className="font-medium text-black">
                    {product.weight || "Varies by size"}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handleInquiry}
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition font-medium"
              >
                Request Quote
              </button>
              <button
                onClick={() => navigate(`/contactd?product=${productName}`)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition font-medium"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Additional Product Information */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button className="px-6 py-3 border-b-2 border-orange-500 text-orange-600 font-medium">
                Details
              </button>
            </div>
          </div>

          <div className="py-6">
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <p className="text-gray-600 mb-4">
              Our {product.name} is a premium solution designed for durability
              and performance. Each product is manufactured with high-grade
              materials to ensure longevity and resistance to wear and tear.
            </p>
            <p className="text-gray-600 mb-4">
              The {product.name} is available in various finishes and colors to
              match your aesthetic preferences. We also offer customization
              options to fit your specific requirements.
            </p>
            <p className="text-gray-600">
              All our products undergo rigorous quality checks to ensure they
              meet the highest standards of craftsmanship and performance.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productData
              .filter(
                (item) =>
                  item.speciality === speciality && item.name !== productName
              )
              .slice(0, 4)
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    navigate(`/product/${item.speciality}/details/${item.name}`)
                  }
                  className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition"
                >
                  <div className="relative pt-[70%] bg-gray-50">
                    {item.video ? (
                      <video
                        src={item.video}
                        controls
                        className="absolute top-0 left-0 w-full h-full object-contain p-2"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute top-0 left-0 w-full h-full object-contain p-2"
                      />
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-gray-900 font-medium line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-sm">{item.subCategory}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
