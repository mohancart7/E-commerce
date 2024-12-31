import React from "react";
import IndexHeader from "../../componenets/Headers/IndexHeader";
import ImageSlider from "../../componenets/slider/ImageSlider";
import RingsSection from "../../componenets/Rings/RingsSection";
import Products from "../../componenets/products/Products";
import MainFooter from "../../componenets/Footer/MainFooter";
import TopSeller from "../../componenets/products/TopSellers";

const Home = () => {
  return (
    <div className="w-full relative">
      <IndexHeader />
      {/* Other sections of the home page can be added here */}
      <div className="mt-2">
        <ImageSlider />
      </div>
      <RingsSection />
      {/* This is the product section  */}
      <Products />
      {/* This is top seller section */}
      <TopSeller />
      {/* this is footer section */}
      <MainFooter />
    </div>
  );
};

export default Home;
