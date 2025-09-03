import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import image from "../../assets/face-vippng.png";
import { GrCode } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBriefcase } from "react-icons/pi";
import vscode from "../../assets/vscode.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import githubdark from "../../assets/github-dark.png";
import reactLogo from "../../assets/react.png";
import tailwind from "../../assets/tailwindcss.png";
import figma from "../../assets/figma.png";

function About() {
  const { theme } = useContext(ThemeContext);
  const tools = [
    { name: "VS Code", logo: vscode },
    { name: "Git", logo: git },
    { name: "GitHub", logo: theme === 'light' ? github : githubdark },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "figma", logo: figma },
  ];
  return (
    <div
    id="about"
      className={`px-4 sm:px-12 lg:px-24 xl:px-40 pb-16 flex flex-col justify-center items-center gap-8 `}
    >
{/* Heading */}
<div className="sm:text-center w-full space-y-2 pb-6">
  <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
    Introduction
  </p>
  <h1 className="text-4xl font-bold">About Me</h1>
  <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
        {/* Profile Image */}
        <div className="w-80  max-sm:w-full rounded overflow-hidden shadow-lg">
          <img
            src={image}
            className="object-cover w-full h-full rounded"
            alt="Profile"
          />
        </div>

        <div className="  w-full">
          {/* Intro Text */}
          <p
            className={`text-md w-full  max-w-3xl leading-relaxed ${
              theme === "light" ? "text-gray-600" : "text-gray-200"
            }`}
          >
            I'm Rafey, a passionate Front-End Developer from Karachi and a BS
            Computer Science student. I specialize in creating responsive,
            user-friendly, and visually appealing websites using HTML, CSS,
            JavaScript, and React. With a strong eye for UI/UX design, I often
            transform ideas and Figma/AI-based designs into clean, functional
            code. I'm always eager to learn, grow, and collaborate on real-world
            projects that make an impact.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
            {/* Languages */}
            <div
              className={`py-6 px-5 space-y-3 text-center border rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                theme === "light" ? "border-gray-300" : "border-gray-700 bg-gray-900"
              }`}
            >
              <GrCode className="mx-auto text-3xl text-indigo-500" />
              <h3 className="text-lg font-semibold">Languages</h3>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-white'} `}>
                HTML, CSS, JavaScript, React JS
              </p>
            </div>

            {/* Education */}
            <div
              className={`py-6 px-5 space-y-3 text-center border rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                theme === "light" ? "border-gray-200" : "border-gray-700 bg-gray-900"
              }`}
            >
              <RiGraduationCapLine className="mx-auto text-3xl text-green-500" />
              <h3 className="text-lg font-semibold">Education</h3>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-white'} `}>
                BS Computer Science (Ongoing)
              </p>
            </div>

            {/* Projects */}
            <div
              className={`py-6 px-5 space-y-3 text-center border rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                theme === "light" ? "border-gray-300" : "border-gray-700 bg-gray-900"
              }`}
            >
              <PiBriefcase className="mx-auto text-3xl text-pink-500" />
              <h3 className="text-lg font-semibold">Projects</h3>
              <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-white'} `}>
                E-commerce, Weather App, News App
              </p>
            </div>
          </div>
          <div className="mt-6 max-w-4xl w-full">
            <p className="text-sm font-semibold">Tools I use</p>
            <div className="flex flex-wrap  gap-6 mt-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-2 p-2 rounded-xl shadow-md border transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                    theme === "light" ? "border-gray-300" : "border-gray-700"
                  }`}
                >
                  <div className="w-7 overflow-hidden">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-full h-full "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
