import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isLight = theme === "light";
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (container) {
      container.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("span");
        particle.className = "gooey-particle";

        // random position
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        // random size
        const size = 6 + Math.random() * 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        // theme based color
        particle.style.background =
          theme === "light" ? "#3b82f6" /* blue-500 */ : "#a855f7"; /* purple-500 */

        container.appendChild(particle);
      }
    }
  }, [theme]);

  return (
    <footer
      className={`relative px-6 sm:px-12 lg:px-24 xl:px-40 overflow-hidden backdrop-blur-3xl ${
        isLight ? "bg-gray-100/50 text-gray-700" : "bg-gray-900/50 text-gray-300"
      }`}
    >
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Divider (Top Line) */}
      <div className="pt-16 relative z-10">
        <div
          className={`h-[1px] w-full ${
            isLight ? "bg-gray-300" : "bg-gray-700"
          }`}
        />
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-12 py-16 text-md relative z-10">
        {/* About */}
        <div>
          <h3
            className={`text-xl font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Rafey Shaikh
          </h3>
          <p className="mt-3 max-w-md leading-relaxed">
            I create beautiful, functional websites and applications that help
            businesses grow and succeed in the digital world.
          </p>
          <div className="flex text-xl gap-4 mt-6">
              <a
              target="blank"
              href="https://github.com/codewithrafey"
              className={`p-3 rounded-full hover:scale-110 transition duration-700 ${
                isLight ? "bg-gray-200 hover:text-gray-900" : "bg-gray-700 hover:text-white"
              }`}
            >
              <FiGithub />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/rafey-shaikh-4189362a6/"
              className={`p-3 rounded-full hover:scale-110 transition duration-700 ${
                isLight
                  ? "bg-gray-200 hover:text-blue-600"
                  : "bg-gray-700 hover:text-blue-600"
              }`}
            >
              <FiLinkedin />
            </a>
            <a
              target="_blank"
              href="https://wa.me/923120281155?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className={`p-3 rounded-full hover:scale-110 transition duration-700 ${
                isLight
                  ? "bg-gray-200 hover:text-green-600"
                  : "bg-gray-700 hover:text-green-500"
              }`}
            >
              <MdOutlineEmail />
            </a>
            <a
              target="_blank"
              href="https://wa.me/923120281155?text=Hi%20there!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              className={`p-3 rounded-full hover:scale-110 transition duration-700 ${
                isLight
                  ? "bg-gray-200 hover:text-green-600"
                  : "bg-gray-700 hover:text-green-500"
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
          <ul className="mt-4 space-y-3">
            {["Home", "About", "Projects", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-blue-500 transition-colors">
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className={`text-lg font-bold ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <MdEmail className="text-gray-500 text-xl" /> rafeyshaikh57@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-500 text-lg" /> +92 312 0281155
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-gray-500 text-xl" /> Karachi,
              Pakistan
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`h-[1px] w-full relative z-10 ${
          isLight ? "bg-gray-300" : "bg-gray-700"
        }`}
      />
      <div
        className={`text-center py-6 text-sm relative z-10 ${
          isLight ? "text-gray-700" : "text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} Rafey Shaikh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
