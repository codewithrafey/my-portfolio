import React, { useContext, useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeProvider";
import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUser } from "react-icons/fi";
import { LuFolderOpen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`sticky top-2 z-40 rounded-full backdrop-blur-lg flex justify-between items-center px-4 py-2  mx-4 sm:mx-4 lg:mx-20 xl:mx-36 ${
        scrolled
          ? theme === "light"
            ? "bg-white/70 text-black shadow"
            : "bg-gray-900/70 text-white"
          : "bg-transparent"
      }`}
    >
      <h2 className="text-2xl tracking-wider font-bold flex items-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {"<Rafey/>"}
      </h2>
      <ul
        className={`flex gap-4 sm:gap-0 max-sm:fixed max-sm:flex-col text-md sm:text-sm font-medium ${
          theme === "light"
            ? "max-sm:bg-white text-gray-800"
            : "max-sm:bg-black max-sm:text-white"
        } ${
          !openMenu
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10 max-sm:z-50"
        } max-sm:font-semibold max-sm:pt-20 top-0 bottom-0 right-0 max-sm:min-h-screen transition-all`}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="absolute right-4 top-4 sm:hidden text-3xl"
        >
          <IoClose />
        </div>
        <Link to={"/"}>
        <li
          onClick={() => setOpenMenu(false)}
          className={`cursor-pointer px-4 py-2 rounded flex gap-2 justify-center items-center ${pathname === '/' ? 'bg-gray-500/20' : ''}`}
        >
          <FiHome/>
          Home
        </li>
          </Link>
          <Link to={"/about"}>
        <li
          onClick={() => setOpenMenu(false)}
          className={`cursor-pointer px-4 py-2 rounded flex gap-2 justify-center items-center ${pathname === '/about' ? 'bg-gray-500/20' : ''}`}
        >
          <FiUser/>
          About
        </li>
          </Link>
          <Link to={"/projects"}>
        <li
          onClick={() => setOpenMenu(false)}
          className={`cursor-pointer px-4 py-2 rounded flex gap-2 justify-center items-center ${pathname === '/projects' ? 'bg-gray-500/20' : ''}`}
        >
          <LuFolderOpen/>
          Projects
        </li>
          </Link>
          <Link to={"/contact"}>
        <li
          onClick={() => setOpenMenu(false)}
          className={`cursor-pointer px-4 py-2 rounded flex gap-2 justify-center items-center ${pathname === '/contact' ? 'bg-gray-500/20' : ''}`}
        >
          <MdOutlineEmail/>
          Contact Me
        </li>
          </Link>
      </ul>
      <div className="flex items-center justify-center gap-4">
        <div
          onClick={toggleTheme}
          className={`border ${
            theme === "light" ? "border-gray-400" : "border-gray-500"
          } p-2 rounded-full cursor-pointer transition-all`}
        >
          {theme === "light" ? (
            <MdOutlineDarkMode className="text-xl" />
          ) : (
            <MdOutlineLightMode className="text-xl" />
          )}
        </div>
        <div
          className={`hidden sm:flex items-center gap-1 text-xs px-6 py-2.5 border rounded-full cursor-pointer ${
            theme === "light" ? "border-gray-300" : "border-gray-500"
          }`}
        >
          <a href="mailto:rafeyshaikh57@gmail.com">Contact</a>
          <MdArrowOutward className="text-sm" />
        </div>
        <div onClick={() => setOpenMenu(true)} className="text-2xl sm:hidden">
          <RiMenu4Line />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
