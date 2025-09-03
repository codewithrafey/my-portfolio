import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function Skills() {
    const { theme } = useContext(ThemeContext);
    const skills = [
      { logo: <SiHtml5 className="text-blue-500 text-xl"/>, name: "HTML", level: 95 },
      { logo: <FaCss3 className="text-blue-500 text-xl"/>, name: "CSS", level: 90 },
      { logo: <IoLogoJavascript className="text-blue-500 text-xl"/>, name: "JavaScript", level: 70 },
      { logo: <BsBootstrapFill className="text-blue-500 text-xl"/>, name: "Bootstrap", level: 80 },
      { logo: <RiTailwindCssFill className="text-blue-500 text-xl"/>, name: "Tailwind CSS", level: 95 },
      { logo: <FaReact className="text-blue-500 text-xl"/>, name: "React", level: 70 },
    ];
    
  return (
    <div
    id="skills"
     className="pt-10 pb-20 px-4 sm:px-12 lg:px-24 xl:px-40">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold pb-2">My Skills</h1>
  <div className="mx-auto w-24 h-1 pt-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-7 py-8 rounded-xl shadow-lg hover:shadow-xl border transition ${
                theme === "light" ? "border-gray-200" : "border-gray-700 bg-gray-900"
              }`}
          >
            <div className="flex gap-3 items-center mb-4">
                <div className="p-2 rounded bg-blue-50">{skill.logo}</div>
            <h2 className="text-lg font-semibold ">{skill.name}</h2>
            </div>
            <p className="text-sm mb-2">{skill.level}%</p>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
