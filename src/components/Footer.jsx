import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold">Omar Hashimi</h2>
            <p className="text-gray-400 mt-2">
              Providing high-quality solutions for your business.
            </p>
          </div>

          {/* Quick Links
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div> */}

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61556136189459" className="text-gray-400 hover:text-white text-2xl"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/in/omar-hashimi-" className="text-gray-400 hover:text-white text-2xl"><LinkedInIcon /></a>
            </div>
            <p className="text-gray-400 mt-4">Email: omar.hashime786@gmail.com</p>
            <p className="text-gray-400">Phone: +93772356111</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Omar Hashimi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
