import React from "react";
import qrImage  from "../../assets/ProductImages/qr code.jpg"
import appstore  from "../../assets/ProductImages/appstore.webp"
import playstore  from "../../assets/ProductImages/playstore.webp"

const MainFooter = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Useful Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>Delivery Information</li>
              <li>International Shipping</li>
              <li>Payment Options</li>
              <li>Track your Order</li>
              <li>Returns</li>
              <li>Find a Store</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Blog</li>
              <li>Offers & Contest Details</li>
              <li>Help & FAQs</li>
              <li>About BBS Ocean</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>📧 Write to Us</li>
              <li>📞 1800-266-0123</li>
              <li>💬 Chat with Us</li>
            </ul>
          </div>

          {/* QR Code and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Download the BBS App Now</h3>
            <img
              src={qrImage}
              alt="QR Code"
              className="w-32 h-32 mb-4"
            />
            <div className="flex space-x-4 mb-4">
              <img
                src={appstore}
                alt="App Store"
                className="w-24 h-8"
              />
              <img
                src={playstore}
                alt="Google Play"
                className="w-24 h-8"
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 text-2xl">
                🖤
              </a>
              <a href="#" className="text-gray-600 text-2xl">
                🕊️
              </a>
              <a href="#" className="text-gray-600 text-2xl">
                📷
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t pt-4 text-gray-600">
        &copy; 2024 BBSOCEAN. All rights reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
