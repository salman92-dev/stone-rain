"use client";

import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#08041E] text-white py-14 px-10 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 pb-10">
        
        {/* LEFT SECTION */}
        <div className="flex items-start gap-4 w-full md:w-1/3">
          
          <div>
            <Image
            src="/images/logo.png"
            alt="Stone Rain Dan Logo"
            width={300}
            height={70}
            className="object-contain w-[90%] md:w-[70%]"
          />
            <p className="text-gray-300 leading-relaxed coconut text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation commodo consequat.
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="md:text-left">
          <h3 className="text-3xl font-extrabold mb-3 text-white mama tracking-[5px]">QUICK LINKS</h3>
          <ul className="flex flex-col coconut gap-2 md:gap-6 text-gray-300 text-xl">
            <li><a href="#" className="hover:text-[#c28aff] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#c28aff] transition-colors">Tokenomics</a></li>
            <li><a href="#" className="hover:text-[#c28aff] transition-colors">Roadmap</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-extrabold mb-3 text-white mama tracking-[5px]">SOCIALS</h3>
          <div className="flex gap-2 justify-center md:justify-start">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#9b6dff] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#9b6dff] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#9b6dff] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="md:text-center mt-6 text-gray-400 text-sm coconut">
        Copyright © 2025 STONE RAIN DAN. All Rights Reserved
      </div>
    </footer>
  );
}
