import React from "react";
import Image from "next/image";
import logo from "../public/images/logowhite.png";
import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 min-h-fit ">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Description on opposite corners */}
        <div className="flex flex-col md:flex-row justify-between items-start h-full mb-5">
  {/* Logo */}
  <div className="mb-8 md:mb-0 flex items-center justify-center h-full">
    <Image
      src={logo}
      alt="Skills Careers Logo"
      width={200}
      height={100}
      objectFit="contain"  // Makes the image scale properly
    />
  </div>

  {/* Description */}
  <div className="max-w-md md:text-right flex items-center justify-center h-full">
    <p>
      Skill Careers connects job seekers, recruiters, and assessors
      through innovative digital solutions, offering a streamlined
      platform for career growth and talent acquisition.
    </p>
  </div>
</div>

        {/* Bold horizontal line */}
        <hr className="border-t-4 border-white mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start mb-8 space-y-8 md:space-y-0">
          {/* Main Menu */}
          <div>
            <h3 className="font-semibold mb-4">Main Menu</h3>
            <ul className="space-y-2 mr-20">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore Recruiters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sustainability Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:ml-auto w-full md:w-auto text-center md:text-right py-6">
            <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
            <p className="mb-4">
              Subscribe now for the latest updates on exclusive offers,
              <span className="block">new packages, and bulk discounts!</span>
            </p>
            <div className="relative w-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 w-full rounded-lg border-none text-white bg-blue-700 pr-32"
              />
              <button className="absolute top-0 right-0 bg-white text-blue-800 px-4 py-2 rounded-r-lg h-full">
                Submit Now
              </button>
            </div>
          </div>
        </div>

        {/* Bold horizontal line */}
        <hr className="border-t-4 border-white mb-8" />

        {/* Social Icons and Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex justify-end mt-4 mr-4 space-x-7 text-white">
            <FaLinkedin size={28} className="cursor-pointer" />
            <FaTwitter size={28} className="cursor-pointer" />
            <FaInstagram size={28} className="cursor-pointer" />
            <FaFacebook size={28} className="cursor-pointer" />
          </div>
          <p className="text-center">
            © 2024 Skills Careers. All rights reserved.
          </p>
          <div className="flex justify-end mt-4 mr-4 space-x-7 text-white">
            <FaCcVisa size={34} className="cursor-pointer" />
            <FaCcMastercard size={34} className="cursor-pointer" />
            <FaCcAmex size={34} className="cursor-pointer" />
            <FaCcDiscover size={34} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
