import React from 'react'
import { PiBriefcaseBold } from "react-icons/pi";
import { FiAward, FiCheckCircle, FiUsers } from "react-icons/fi";
import CountUp from "react-countup";

function Achievements() {
  const achievements = [
    {
      icon: <PiBriefcaseBold className="w-10 h-10 text-blue-500" />,
      number: 30,
      suffix: "+",
      title: 'Projects Completed'
    },
    {
      icon: <FiUsers className="w-10 h-10 text-purple-500" />,
      number: 10,
      suffix: "+",
      title: 'Happy Clients'
    },
    {
      icon: <FiAward className="w-10 h-10 text-green-500" />,
      number: 1,
      suffix: "+",
      title: 'Years Experience'
    },
    {
      icon: <FiCheckCircle className="w-10 h-10 text-pink-500" />,
      number: 100,
      suffix: "%",
      title: 'Client Satisfaction'
    },
  ];

  return (
    <div className="w-full">
                <div className="text-center space-y-2 pb-14">
                  <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
                    Highlights
                  </p>
                  <h1 className="text-4xl font-bold">Professional Achievements</h1>
                  <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
        

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {achievements.map((item, index) => (
          <div 
  key={index}
  className="p-6 rounded-xl w-full text-center flex flex-col items-center gap-3
  bg-white/5 backdrop-blur-3xl shadow-md
  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  hover:scale-105 transition-transform duration-300"
          >
            {item.icon}
            <h2 className="text-3xl font-bold mt-3">
              <CountUp 
                end={item.number} 
                duration={2.5} 
                enableScrollSpy // jab scroll pe aaye tab start hoga
              />
              {item.suffix}
            </h2>
            <p className="text-gray-500 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
