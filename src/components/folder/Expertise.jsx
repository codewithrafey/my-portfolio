import React from "react";
import { FaCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function Expertise() {
  const expertise = [
    {
      icon: <FaCode className="text-4xl text-blue-500" />,
      title: "Frontend Development",
      desc: "React.js, Tailwind CSS, Responsive Design",
    },
    {
      icon: <CiGlobe className="text-4xl text-purple-500" />,
      title: "Cloud & Deployment",
      desc: "Vercel, Netlify, Performance Optimization",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-500" />,
      title: "UI/UX Design",
      desc: "React.js, Tailwind CSS, Responsive Design",
    },
  ];

  return (
    <div className="w-full">
            <div className="text-center space-y-2 pb-14">
          <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
            expertise
          </p>
          <h1 className="text-4xl font-bold">Professional Expertise</h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {expertise.map((item, index) => (
          <div
  key={index}
  className="p-6 rounded-xl w-full text-center flex flex-col items-center gap-3
  bg-white/5 backdrop-blur-3xl shadow-md
  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  hover:scale-105 transition-transform duration-300"
>            {item.icon}
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 ">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
