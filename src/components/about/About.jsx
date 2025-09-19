import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import image from "../../assets/face-vippng.png";
import { GrCode } from "react-icons/gr";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiBriefcase } from "react-icons/pi";
import vscode from "../../assets/vscode.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import reactLogo from "../../assets/react.png";
import tailwind from "../../assets/tailwindcss.png";
import figma from "../../assets/figma.png";
import { PiBriefcaseBold } from "react-icons/pi";
import { FiAward } from "react-icons/fi";
import CountUp from "react-countup";
import { IoLocationOutline } from "react-icons/io5";
import Skills from "../skills/Skills";
import LogoLoop from "../folder/LogoLoop";

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
import { FiPhone, FiMessageCircle } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";


function About() {
  const { theme } = useContext(ThemeContext);

  const contact = [
    {
      icon: <MdOutlineEmail className="text-2xl text-blue-500"/>,
      name: 'Email',
      title: 'rafeyshaikh57@gmail.com'
    },
    {
      icon: <FiPhone className="text-2xl text-purple-500"/>,
      name: 'Phone',
      title: '+92 312 0281155'
    },
    {
      icon: <FiMessageCircle className="text-2xl text-green-500"/>,
      name: 'Whatsapp',
      title: '+92 312 0281155'
    },
  ]

  const tools = [
    {
      name: "VS Code",
      logo: <img src={vscode} alt="VS Code" className="w-full h-full" />,
    },
    {
      name: "Git",
      logo: <img src={git} alt="Git" className="w-full h-full" />,
    },
    {
      name: "GitHub",
      logo:
        theme === "light" ? (
          <img src={github} alt="GitHub" className="w-full h-full" />
        ) : (
          <FaGithub className="text-white mt-[2px] text-2xl" />
        ),
    },
    {
      name: "React",
      logo: <img src={reactLogo} alt="React" className="w-full h-full" />,
    },
    {
      name: "Tailwind CSS",
      logo: <img src={tailwind} alt="Tailwind" className="w-full h-full" />,
    },
    {
      name: "Figma",
      logo: <img src={figma} alt="Figma" className="w-full h-full" />,
    },
  ];

  const achievements = [
    {
      icon: <IoLocationOutline className="w-10 h-10 text-blue-500" />,
      title: "Location",
      subtitle: "Pakistan", // static text
      isCount: false,
    },
    {
      icon: <FiAward className="w-10 h-10 text-purple-500" />,
      title: "Experience",
      number: 1,
      suffix: "+",
      subtitle: "Years Professional",
      isCount: true,
    },
    {
      icon: <PiBriefcaseBold className="w-10 h-10 text-green-500" />,
      title: "Projects",
      number: 30,
      suffix: "+",
      subtitle: "Successfully Completed",
      isCount: true,
    },
  ];

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
        <FaJsSquare
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
        <FaHtml5
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } text-8xl`}
        />
      ),
    },
  ];
  

  return (
    <div className="py-16">
      <div
        className={`px-4 sm:px-12 lg:px-24 xl:px-40 flex flex-col justify-center items-center gap-8`}
      >
        {/* Heading */}
        <div className="text-center w-full space-y-2 pb-6">
          <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
            Introduction
          </p>
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 sm:gap-12">
          {/* Profile Image */}
          <div className="max-sm:w-full mx-auto text-center w-full rounded overflow-hidden shadow-lg">
            <img
              src={image}
              className="object-cover w-full h-full rounded"
              alt="Profile"
            />
          </div>

          <div className="w-full">
            {/* Intro Text */}
            <p
              className={`text-md w-full max-w-3xl leading-relaxed ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              I'm Rafey, a passionate Front-End Developer from Karachi and a BS
              Computer Science student. I specialize in creating responsive,
              user-friendly, and visually appealing websites using HTML, CSS,
              JavaScript, and React. With a strong eye for UI/UX design, I often
              transform ideas and Figma/AI-based designs into clean, functional
              code. I'm always eager to learn, grow, and collaborate on
              real-world projects that make an impact.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
              {/* Languages */}
              <div
                className={`py-6 px-5 space-y-3 text-center rounded-xl backdrop-blur-3xl shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300 ${
                  theme === "light" ? "" : "bg-white/5 "
                }`}
              >
                <GrCode className="mx-auto text-3xl text-indigo-500" />
                <h3 className="text-lg font-semibold">Languages</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  } `}
                >
                  HTML, CSS, JavaScript, React JS
                </p>
              </div>

              {/* Education */}
              <div
                className={`py-6 px-5 space-y-3 text-center rounded-xl backdrop-blur-3xl shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300 ${
                  theme === "light" ? "" : "bg-white/5"
                }`}
              >
                <RiGraduationCapLine className="mx-auto text-3xl text-green-500" />
                <h3 className="text-lg font-semibold">Education</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  } `}
                >
                  BS Computer Science (Ongoing)
                </p>
              </div>

              {/* Projects */}
              <div
                className={`py-6 px-5 space-y-3 text-center rounded-xl backdrop-blur-3xl shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300 ${
                  theme === "light" ? "" : "bg-white/5"
                }`}
              >
                <PiBriefcase className="mx-auto text-3xl text-pink-500" />
                <h3 className="text-lg font-semibold">Projects</h3>
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  } `}
                >
                  E-commerce, Weather App and more.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div className="mt-6 max-w-4xl w-full">
              <p className="text-sm font-semibold">Tools I use:</p>
              <div className="flex flex-wrap gap-6 mt-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 p-2 rounded-xl shadow-md border transition-all duration-300 transform hover:-translate-y-1 ${
                      theme === "light" ? "border-gray-300" : "border-gray-700"
                    }`}
                  >
                    <div className="w-7 flex justify-center items-center overflow-hidden">
                      {tool.logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Card with CountUp */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center my-12">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl w-full text-center flex flex-col items-center gap-3
                bg-white/5 backdrop-blur-3xl shadow-md
                hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
                hover:scale-105 transition-transform duration-300"
              >
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p
                  className={` text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {item.isCount ? (
                    <>
                      <span className="">
                        <CountUp
                          end={item.number}
                          duration={2}
                          enableScrollSpy
                        />
                        {item.suffix}
                      </span>{" "}
                      {item.subtitle}
                    </>
                  ) : (
                    item.subtitle
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-full  border rounded bg-white/5 backdrop-blur-3xl py-6 px-8 ${theme === 'light' ? 'border-gray-400' : 'border-gray-700' }`}>
          <div className="text-center space-y-2 pb-10 ">
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
              Overview
            </p>
            <h1 className="text-4xl font-bold">Professional Summary</h1>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="">
              <h2 className="text-xl font-bold pb-4">What I Do</h2>
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                I specialize in creating modern, responsive web applications
                using cutting-edge technologies. My expertise spans the entire
                development lifecycle, from initial concept and design to
                deployment and maintenance.
              </p>
              <br />
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                With a strong foundation in both frontend development, I deliver
                comprehensive solutions that are not only visually appealing but
                also performant, scalable, and maintainable.
              </p>
            </div>
            <div className="">
              <h2 className="text-xl font-bold pb-4">My Approach</h2>
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                I believe in writing clean, efficient code and following
                industry best practices. Every project is approached with
                attention to detail, focusing on user experience, performance
                optimization, and long-term maintainability.
              </p>
              <br />
              <p
                className={`${
                  theme === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                Collaboration and communication are key to my process. I work
                closely with clients to understand their vision and translate it
                into exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="w-full">
          <Skills />
        </div>
      </div>
      {/* technology */}
      <div className="w-full">
        <div className="text-center space-y-2 pb-14">
          <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
            Tech Stack
          </p>
          <h1 className="text-4xl font-bold">Technologies & Tools</h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <div className="pt-6 w-full">
          <LogoLoop logos={logos} speed={180} logoHeight={48} gap={48} />
        </div>
      </div>

  {/* Experience Card */}
<div className="w-full py-18 px-4 sm:px-12 lg:px-24 xl:px-40">
  <div className="text-center space-y-2 pb-14">
    <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
      Role Highlights
    </p>
    <h1 className="text-4xl font-bold">Professional Experience</h1>
    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
  </div>

  {/* Timeline container */}
  <div className="relative border-l-[2px] border-blue-500 ml-4 pl-8 space-y-10">

    {/* Entry 1 */}
    <div className="relative">
      <div className="absolute -left-[38px] top-0 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white"></div>
      <div className={`bg-white/5 p-6 rounded-md  border  ${theme === 'light' ? 'border-gray-400' : 'border-gray-700' }`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">2025 – Present</span>
          <span className="text-sm text-purple-400 font-medium">Portfolio Project</span>
        </div>
        <h3 className="text-lg font-semibold text-blue-400">Personal Portfolio Website</h3>
        <p className={`text-sm text-gray-300 mt-2 leading-relaxed  ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          Designed and developed a modern portfolio using <strong>React.js</strong> and <strong>Tailwind CSS</strong> to showcase skills, projects, and contact information. Implemented dark mode, responsive design, and smooth animations.
        </p>
      </div>
    </div>

    {/* Entry 2 */}
      <div className="relative">
      <div className="absolute -left-[38px] top-0 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-white"></div>
      <div className={`bg-white/5 p-6 rounded-md  border  ${theme === 'light' ? 'border-gray-400' : 'border-gray-700' }`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded">2024 - 2025</span>
          <span className="text-sm text-purple-400 font-medium">Self-Employed</span>
        </div>
        <h3 className="text-lg font-semibold text-blue-400">Frontend Developer</h3>
        <p className={`text-sm  mt-2 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
          Developed responsive web apps using <strong>React.js, Tailwind CSS, Bootstrap, JavaScript</strong>, and <strong>HTML/CSS</strong>. Focused on performance, mobile responsiveness, and clean UI/UX for clients and personal projects.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="w-full px-4 sm:px-12 lg:px-24 xl:px-40">
  <div className={`w-full  border rounded bg-white/5 backdrop-blur-3xl py-6 px-8 ${theme === 'light' ? 'border-gray-400' : 'border-gray-700' }`}>
    <div className="text-center space-y-2 pb-14">
    <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
      Contact Info
    </p>
    <h1 className="text-4xl font-bold ">Let's Connect</h1>
    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {contact.map((contact, i) => (
      <div className="p-6 rounded-xl w-full flex  items-center gap-3
  bg-white/5 backdrop-blur-3xl shadow-md
  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  hover:scale-105 transition-transform duration-300" key={i}>
           <div className={` rounded p-3 ${theme === 'light' ? 'bg-gray-300/50' : 'bg-white/10'}`}>{contact.icon}</div>
           <div className="">
            <h2 className="text-xl font-semibold">{contact.name}</h2>
            <p className={` text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{contact.title}</p>
           </div>

      </div>
    )
    )}

  </div>

</div>
</div>

    </div>
  );
}

export default About;
