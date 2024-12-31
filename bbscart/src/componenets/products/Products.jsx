import React from "react";
import productImg from "../../assets/ProductImages/product1.jpeg"
import img1 from "../../assets/ProductImages/image-01.jpg"
import img2 from "../../assets/ProductImages/image-02.jpg"
import img3 from "../../assets/ProductImages/image-03.jpg"
import img4 from "../../assets/ProductImages/image-04.jpg"
import img5 from "../../assets/ProductImages/image-05.jpg"
import img6 from "../../assets/ProductImages/image-06.jpg"
import img7 from "../../assets/ProductImages/image-07.jpg"
import img8 from "../../assets/ProductImages/image-08.jpg"



const products = [
  { name: "Mangalsutras", image:productImg },
  { name: "Gold Coins", image:img1 },
  { name: "Earrings", image:img2 },
  { name: "Finger Rings",image:img3 },
  { name: "Pendants", image:img4 },
  { name: "Nose Pins", image:img5 },
  { name: "Necklaces", image:img6 },
  { name: "Bracelets", image:img7 },
  { name: "Bangles", image:img8  },
];

const Products = () => {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-4">
        Shop By Category
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Browse through your favorite categories. We've got them all!
      </p>
      <div className="border-t border-red-300 mb-8 w-20 mx-auto"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <button className="text-red-500 font-medium mt-2 hover:underline">
              Explore &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
