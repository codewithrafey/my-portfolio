import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import MagicBento from '../magicbento/MagicBento';

// Import images
import mensfashion from '../../assets/mensfashion.jpg';
import agency from '../../assets/agency.jpg';
import zebi from '../../assets/zebi.jpg';
import larana from '../../assets/larana.jpg';
import spotify from '../../assets/spotifyclone.jpg';
import realestate from '../../assets/real-state.png';
import weather from '../../assets/weatherapp.jpg';
import currency from '../../assets/currency.png';
import news from '../../assets/news.png';
import random from '../../assets/randomjoke.png';
import guessing from '../../assets/guessing.png';
import password from '../../assets/password.png';
import { Link } from 'react-router-dom';

function Work() {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      image: mensfashion,
      title: "Men's Fashion Store",
      link: "https://mensfashion-1.vercel.app/",
      code: "https://github.com/codewithrafey/React-Ecommerce",
      desc: "An e-commerce store design focused on men’s clothing with a modern UI.",
      tools: ["React", "Tailwind CSS"],
    },
    {
      image: agency,
      title: "Digital Agency",
      link: "https://agency-app-chi.vercel.app/",
      code: "https://github.com/codewithrafey/Agency-app",
      desc: "A digital agency landing page with smooth animations and responsive design.",
      tools: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      image: zebi,
      title: "Zebi Web App",
      link: "https://zebi-xi.vercel.app/",
      code: "https://github.com/codewithrafey/E-COMMERCE",
      desc: "A responsive web application showcasing services with interactive UI.",
      tools: ["React", "Tailwind CSS"],
    },
    {
      image: larana,
      title: "Larana Website",
      link: "https://ecommerce-web-com.netlify.app/",
      code: "https://github.com/codewithrafey/e-commerce-web",
      desc: "An online shopping website with multiple product categories.",
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      image: spotify,
      title: "Spotify Clone",
      link: "https://spotify-clone-tech.netlify.app/",
      code: "https://github.com/codewithrafey/spotify-clone",
      desc: "A functional Spotify clone with playlist UI and music player features.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: realestate,
      title: "Real-Estate Web",
      link: "https://real-estate-agency-web.vercel.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A weather forecast application showing live temperature and conditions.",
      tools: ["React", "Tailwind CSS"],
    },
    {
      image: weather,
      title: "Weather App",
      link: "https://climate-app-io.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A weather forecast application showing live temperature and conditions.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: currency,
      title: "Currency Converter",
      link: "https://currency-converter-tech.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A currency converter app that allows users to convert between different currencies in real time.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: news,
      title: "News App",
      link: "https://news-app-info.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A news app that fetches and displays the latest headlines from various sources.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: random,
      title: "Random-Joke Generator",
      link: "https://randomjoke-generator-org.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A random joke generator that provides you with a fresh joke every time you click a button.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: guessing,
      title: "Guessing Game",
      link: "https://guessing-n0.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "An interactive guessing game where users try to guess a random number within a range.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: password,
      title: "Password Generator",
      link: "https://password-generator-icu.netlify.app/",
      code: "https://github.com/codewithrafey/weather-app",
      desc: "A password generator tool that creates secure passwords based on user preferences.",
      tools: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // State to control number of displayed projects
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects(projects.length); // Show all projects
  };

  return (
    <div className={`px-4 sm:px-12 lg:px-24 xl:px-40 pb-16 pt-10 flex flex-col justify-center items-center gap-8`}>
      {/* Section Header */}
      <div className="text-center space-y-2 py-6">
        <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
          my portfolio
        </p>
        <h1 className="text-4xl font-bold">My Latest Work</h1>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <MagicBento key={index}>
            <div
              className={`rounded-lg group overflow-hidden shadow-lg hover:-translate-y-1 border transition-transform duration-300 cursor-pointer ${
                theme === "light" ? "border-gray-200" : "border-gray-600"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div
                className={`p-4 ${
                  theme === "light" ? "border-gray-300" : "border-gray-700 bg-gray-900"
                }`}
              >
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {project.title}
                </h3>
                <p className={`text-sm mt-2 ${theme === 'light' ? 'text-gray-500' : 'text-white'}`}>{project.desc}</p>
                <p className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`}
                    >
                      {tool}
                    </span>
                  ))}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 gap-1 text-sm hover:underline pb-3 pt-4"
                  >
                    View Project <LuSquareArrowOutUpRight />
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-500 gap-1 text-sm hover:underline pb-3 pt-4"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          </MagicBento>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < projects.length && (
        <button
          onClick={loadMore}
          className="mt-8 py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-700 text-white rounded shadow-md hover:-translate-y-1 transition-transform cursor-pointer"
        >
          Load More
        </button>
      )}


      <div className="pt-16">
          <div className="text-center space-y-2 pb-14">
    <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
      Available for Collaboration
    </p>
    <h1 className="text-4xl font-bold">Interested in working together?</h1>
    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    <p className={`max-w-2xl mt-4 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-200'}`}>Ready to transform your ideas into exceptional digital experiences? I'm here to help you build innovative solutions that drive success and growth.</p>
    <Link to="/contact">
    <button className='mt-6 py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-700 text-white rounded-full shadow-md hover:-translate-y-1 transition-transform cursor-pointer'>Let's Work Together</button>
    </Link>
  </div>

      </div>
    </div>
  );
}

export default Work;
