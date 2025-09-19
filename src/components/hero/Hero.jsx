import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../../assets/rafey CV.pdf";
import Achievements from "../folder/Achievments";
import Expertise from "../folder/Expertise";
import Download from "../folder/Download";
import FlowingMenu from "../folder/FlowingMenu";
import LogoLoop from "../folder/LogoLoop";
import { FaArrowRight } from "react-icons/fa6";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVercelFilled } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import { IoIosGitMerge } from "react-icons/io";
import { RiFirebaseFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { Link } from "react-router-dom";

function Hero() {
  const { theme } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: ["I'm Frontend Developer", "I'm Web Developer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const logos = [
    {
      node: (
        <CgFigma
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <RiFirebaseFill
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <IoIosGitMerge
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaGithub
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <SiNetlify
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <TbBrandVercelFilled
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <VscVscode
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaReact
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaBootstrap
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <SiTailwindcss
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaCss3Alt
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaJsSquare
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
    {
      node: (
        <FaHtml5
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
  ];

  return (
    <div className="">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-40 py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* 🔹 Left Side → Intro Content */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <p className="text-sm uppercase tracking-widest font-semibold">
              Hi,{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {text}
              </span>
              <Cursor />
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Rafey Shaikh
            </h1>

            <p
              className={`text-sm mt-4 max-w-xl ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              I'm Rafey, a passionate Front-End Developer from Karachi. I
              specialize in building responsive, user-friendly websites using
              HTML, CSS, JavaScript, and React.
            </p>

            {/* 🔹 Buttons */}
            <div className="flex gap-4 pt-8">
              {/* Contact Button */}
                <Link to="/contact">
              <button className="px-8 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:-translate-y-1 transition-transform cursor-pointer">
                Contact me
              </button>
                </Link>

              {/* Download CV Button */}
                              <a
                  target="_blank"
                  className=""
                  rel="noopener noreferrer"
                  href={CV}
                >
              <button
                className={`px-6 py-1 flex justify-center items-center gap-2 text-sm shadow-md font-semibold rounded-full hover:-translate-y-1 transition-transform cursor-pointer border ${
                  theme === "dark"
                    ? "border-gray-400"
                    : "border border-gray-200"
                }`}
              >

                  <Download
                    stroke={theme === "light" ? "#000000" : "#ffffff"}
                    width={20}
                    height={20}
                  />
                  Download CV
              </button>
                </a>
            </div>
          </div>

          {/* 🔹 Right Side → 3D Spline Model */}
          <div className="relative w-full h-[500px]">
            <iframe
              src="https://my.spline.design/greetingrobotinbluecolor-f9FgwjGIqiTFp3Z3hjPwNDP1/"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>

            {/* Overlay to hide watermark */}
            <div
              className={`absolute bottom-4 right-4 w-40 h-10 ${
                theme === "light" ? "bg-white" : "bg-black"
              } `}
            ></div>
          </div>
        </div>

        {/* 🔹 Achievements */}
        <div className="flex flex-col justify-center items-center gap-8 mt-20">
          <Achievements />
        </div>
      </div>

      {/* 🔹 Logo Loop */}
      <div className="py-24 w-full">
        <LogoLoop logos={logos} speed={180} logoHeight={48} gap={48} />
      </div>

      {/* 🔹 Expertise */}
      <div className="flex flex-col justify-center items-center gap-8 px-6 sm:px-12 lg:px-24 xl:px-40 py-8">
        <Expertise />
      </div>

      {/* flowing menu */}
      <div className="w-full py-16">
        <FlowingMenu
          items={[
            { link: "/", text: "Home", image: "https://picsum.photos/200" },
            {
              link: "about",
              text: "About",
              image: "https://picsum.photos/201",
            },
            {
              link: "projects",
              text: "Projects",
              image: "https://picsum.photos/204",
            },
            {
              link: "contact",
              text: "Contact",
              image: "https://picsum.photos/205",
            },
          ]}
        />
      </div>
{/* contact */}
<div className="flex flex-col gap-6 justify-center items-center py-14">
  <div className="text-center space-y-2 pb-4">
    <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
      Get in Touch
    </p>
    <h1 className=" sm:text-2xl md:text-4xl font-bold">
      Ready to Build Something Extraordinary?
    </h1>
    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    <p className={`mt-4 max-w-2xl text-base ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}>
      Let's collaborate to transform your vision into a powerful digital solution. I'm committed to delivering exceptional results that exceed expectations.
    </p>
  </div>

  <div className="flex gap-8">
    {/* Button 1 */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-medium text-gray-500">Start Collaborating</p>
        <Link to="projects">
      <button className="px-8 py-3 flex justify-center items-center gap-2 text-sm font-semibold text-white rounded-full  bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:-translate-y-1 transition-transform cursor-pointer">
        Start Your Project
        <FaArrowRight/>
      </button>
        </Link>
    </div>

    {/* Button 2 */}
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-medium text-gray-500">Know More About Me</p>
      <Link to="/about">
      <button
        className={`px-6 py-3 text-sm shadow-md font-semibold rounded-full hover:-translate-y-1 transition-transform cursor-pointer border ${
          theme === "dark" ? "border-gray-400" : "border border-gray-200"
        }`}
      >
        Learn More
      </button>
        </Link>
    </div>
  </div>
</div>
    </div>
  );
}

export default Hero;
