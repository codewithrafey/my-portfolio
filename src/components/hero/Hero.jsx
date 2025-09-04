import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import image from "../../assets/face-vippng.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from '../../assets/rafey CV.pdf'

function Hero() {
  const { theme } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: ["Hi, I'm Rafey Shaikh"], // yahan aur words bhi add kar sakte ho
    loop: true, // ek hi bar chale
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div
      className={`px-6 sm:px-12 lg:px-24 xl:px-40 py-28 max-sm:py-32 flex flex-col justify-center items-center text-center relative overflow-hidden ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-gradient-to-b from-black via-gray-900 to-black text-white"
      }`}
    >

      {/* Profile Image */}
      <div className="w-28 h-28  overflow-hidden rounded-full shadow-lg mb-4">
        <img src={image} className="w-full h-full object-cover" alt="Rafey" />
      </div>

      {/* Intro Text */}
      <p className="text-sm uppercase tracking-widest font-semibold">
        {text}
        <Cursor />
      </p>
      <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">
        Frontend Web Developer
      </h1>

      <p
        className={`text-sm mt-4 max-w-xl ${
          theme === "light" ? "text-gray-600" : "text-gray-200"
        }`}
      >
        I’m Rafey, a passionate Front-End Developer from Karachi. I specialize
        in building responsive, user-friendly websites using HTML, CSS,
        JavaScript, and React.
      </p>
      {/* Buttons */}
      <div className="flex gap-4 pt-8">
        <button className="px-8 py-3 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:-translate-y-1 transition-transform cursor-pointer">
          <a href="#contact">Contact me</a>
        </button>
        <button className={`px-8 py-3 text-xs shadow-md font-semibold rounded-full hover:-translate-y-1 transition-transform cursor-pointer border ${theme === 'dark' ? " border-gray-400" : 'border border-gray-200'}`}>
          <a target="blank" href={CV}>Download CV</a> 
        </button>
      </div>
    </div>
  );
}

export default Hero;
