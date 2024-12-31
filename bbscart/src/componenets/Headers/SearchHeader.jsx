import React from "react";
import { FaSearch, FaUser, FaShoppingCart,FaHeart } from "react-icons/fa";
import logo from "../../assets/BBSCART LOGO/main-logo.jpg"

const SearchHeader = () => {
  return (
    <div className="flex items-center justify-between bg-white px-8 py-4 w-full">

    {/* This is the logo image */}
    <div className="flex items-center space-x-4"> 
      <img 
       src={logo}
      className="w-[120px] h-[57px]"
      />
    </div>
    {/* Search Bar */}
    <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden w-1/3 max-w-xl">
      <input
        type="text"
        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
        className="w-full px-4 py-2 text-sm outline-none"
      />
      <button className="bg-gray-200 px-4 rounded-full">
        <FaSearch className="text-gray-500 w-5 h-5" />
      </button>
    </div>

    {/* Icons Section */}
    <div className="flex items-center space-x-8">
      <FaUser className="text-gray-600 w-6 h-6 cursor-pointer  hover:text-blue-400" title="Account" />
      <FaShoppingCart className="text-gray-600 w-6 h-6 cursor-pointer hover:text-blue-400" title="Cart" />
      <FaHeart className="text-lg w-6 h-6 cursor-pointer text-red-200" title="WhishList" />
    </div>
  </div>
  );
};

export default SearchHeader;