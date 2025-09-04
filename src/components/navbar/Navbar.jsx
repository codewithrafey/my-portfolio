import React, { useContext, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeProvider";
import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`sticky top-0 z-40 backdrop-blur-lg flex justify-between items-center py-4 shadow px-4 sm:px-12 lg:px-24 xl:px-40 ${
        theme === "light"
          ? "bg-white/80 text-black"
          : "bg-gray-950/90 text-white"
      }`}
    >
      <h2 className="text-2xl tracking-wider font-bold flex items-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {"<Rafey/>"}
      </h2>
      <ul
        className={`flex gap-5 sm:gap-8 max-sm:fixed max-sm:flex-col text-sm font-medium ${
          theme === "light"
            ? "max-sm:bg-white text-gray-600"
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
        <li
          className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 
  hover:text-blue-500"
        >
         <a href="#">Home</a> 
        </li>
        <li
          className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 
  hover:text-blue-500"
        >
         <a href="#about">About</a> 
        </li>
        <li
          className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 
  hover:text-blue-500"
        >
         <a href="#skills">Skills</a> 
        </li>
        <li
          className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 
  hover:text-blue-500"
        >
          <a href="#work">My Work</a>
        </li>
        <li
          className="cursor-pointer border-b-2 border-transparent hover:border-blue-500 
  hover:text-blue-500"
        >
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-3">
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
          <a href="#contact">Contact</a>
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
