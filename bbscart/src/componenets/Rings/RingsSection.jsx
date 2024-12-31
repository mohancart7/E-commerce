import React from "react";
import ring1 from "../../assets/ring1.jpg"; // Replace with the correct image path
import ring2 from "../../assets/ring2.jpg";
import ring3 from "../../assets/ring3.jpg";

const RingsSection = () => {
  const rings = [
    { image: ring1, title: "Diamond Engagement Rings", link: "Explore More" },
    { image: ring2, title: "Solitaire", link: "Explore More" },
    { image: ring3, title: "Engagement Rings", link: "Explore More" },
  ];

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-3xl font-ring mb-6 text-red-500 font-bold">
        Rings For Your Loved Ones
      </h2>
      <p className="text-center text-gray-600 font-semibold mb-8">
        Celebrate Forever with the Perfect Engagement Ring
      </p>
      <div className="flex justify-center items-center space-x-6">
        {rings.map((ring, index) => (
          <div key={index} className="w-1/4 text-center">
            <img
              src={ring.image}
              alt={ring.title}
              className="w-full h-60 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-medium mt-4">{ring.title}</h3>
            <a
              href="#"
              className="text-blue-500 mt-2 inline-block hover:underline"
            >
              {ring.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RingsSection;
