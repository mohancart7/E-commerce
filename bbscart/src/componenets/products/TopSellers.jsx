import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 
import sellerImage from "../../assets/ProductImages/Image-09.jpg"
import sellerImage2 from "../../assets/ProductImages/Image-10.jpg"
import sellerImage3 from "../../assets/ProductImages/Image-11.jpg"
import sellerImage4 from "../../assets/ProductImages/Image-12.jpg"

const TopSeller = () => {
  const products = [
    {
      id: 1,
      name: "Radiance Diamond Finger Ring",
      price: "₹ 58,835",
      originalPrice: "₹ 61,932",
      image: sellerImage
    },
    {
      id: 2,
      name: "Whimsical Floral Diamond Finger Ring",
      price: "₹ 64,217",
      originalPrice: "₹ 67,597",
      image: sellerImage2
    },
    {
      id: 3,
      name: "Enchanted Bloom Diamond Necklace",
      price: "₹ 2,33,543",
      originalPrice: "₹ 2,66,906",
      image: sellerImage3
    },
    {
      id: 4,
      name: "Sculpted Shine Gold Necklace",
      price: "₹ 61,634",
      originalPrice: "₹ 72,216",
      image: sellerImage4 
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Top Sellers</h2>
        <p className="text-gray-600 text-center mb-6">Explore our most loved products</p>

        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-gray-800 hover:shadow-lg">
            <FaArrowLeft />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl"
              >
                <img
                  src={`${product.image}`} // Adjust path as needed
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="mt-2">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-gray-800 hover:shadow-lg">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSeller;
