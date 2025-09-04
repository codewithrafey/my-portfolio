import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <footer
      className={`px-4 sm:px-12 lg:px-24 xl:px-40 ${
        isLight ? "bg-gray-100 text-gray-700" : "bg-gray-900 text-gray-300"
      }`}
    >
      {/* Divider (Top Line) */}
      <div className="pt-12">
        <div
          className={`h-[1px] w-full ${
            isLight ? "bg-gray-300" : "bg-gray-700"
          }`}
        />
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 py-10 text-md">
        {/* About */}
        <div>
          <h3
            className={`text-lg font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Rafey Shaikh
          </h3>
          <p className="mt-2 max-w-md">
            I create beautiful, functional websites and applications that help
            businesses grow and succeed in the digital world.
          </p>
          <div className="flex text-xl gap-3 mt-4">
            <a
              target="blank"
              href="https://www.linkedin.com/in/rafey-shaikh-4189362a6/"
              className={`p-2 rounded-full ${
                isLight ? "bg-gray-200 text-blue-600" : "bg-gray-800 text-blue-600"
              }`}
            >
              <FaLinkedin />
            </a>
            <a
              target="blank"
              href="https://github.com/codewithrafey"
              className={`p-2 rounded-full ${
                isLight ? "bg-gray-200 text-gray-900" : "bg-gray-700 text-white"
              }`}
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://wa.me/923120281155?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className={`p-2 rounded-full ${
                isLight ? "bg-gray-200 text-green-600" : "bg-gray-800 text-green-500"
              }`}
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className={`text-lg font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#work">My Work</a>
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className={`text-lg font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Contact
          </h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-2">
              <MdEmail className="text-blue-500" /> rafeyshaikh57@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" /> +92 312 0281155
            </li>
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-blue-500" /> Karachi, Pakistan
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar (Same line style as top) */}
      <div
        className={`h-[1px] w-full ${
          isLight ? "bg-gray-300" : "bg-gray-700"
        }`}
      />

      <div
        className={`text-center py-4 text-sm ${
          isLight ? "text-gray-700" : "text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} Rafey Shaikh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
