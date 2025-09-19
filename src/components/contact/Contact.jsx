import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { GoPerson } from "react-icons/go";
import toast from "react-hot-toast";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { FiCheckCircle, FiUser } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiChat3Line } from "react-icons/ri";

function Contact() {
  const connect = [
    {
      icon: <MdOutlineEmail className="w-10 h-10 text-blue-500 " />,
      name: "Email",
      title:
        "rafeyshaikh57@gmail.com",
    },
    {
      icon: <RiChat3Line className="w-10 h-10 text-green-500 " />,
      name: "Whatsapp",
      title:
        "+92 312 0281155",
    },
    {
      icon: <IoLocationOutline className="w-10 h-10 text-purple-500 " />,
      name: "Location",
      title: "Pakistan",
    },
  ];
  const offer = [
    {
      icon: <FiCheckCircle className="text-2xl " />,
      name: "Professional Excellence",
      title:
        "Committed to delivering high-quality solutions that exceed expectations",
    },
    {
      icon: <FiUser className="text-2xl " />,
      name: "Client-Focused Approach",
      title:
        "Your success is my priority. I work closely with clients throughout the project",
    },
    {
      icon: <HiOutlineBriefcase className="text-2xl " />,
      name: "Proven Track Record",
      title: "30+ successful projects with 100% client satisfaction rate",
    },
  ];

  const { theme } = useContext(ThemeContext);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2e815bfa-5dee-4596-9816-9fd76028372c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
  };
  return (
    <div
      id="contact"
      className={`px-4 sm:px-12 lg:px-24 xl:px-40 pb-16 flex flex-col justify-center items-center gap-8 `}
    >
      {/* Section Header */}
      <div className="text-center space-y-2 py-6">
        <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
          contact with me
        </p>
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div
        className={`max-w-4xl rounded-3xl  overflow-hidden shadow-xl ${
          theme === "dark" ? "border border-gray-800" : ""
        }`}
      >
        <div className="grid grid-col-1 sm:grid-cols-2">
          <div
            className={`p-4 sm:p-12 space-y-6  ${
              theme === "light" ? "bg-gray-100" : "bg-gray-900 "
            }`}
          >
            <h1 className="text-2xl font-bold">Contact Information</h1>
            <p
              className={` ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              I'd love to hear from you. Fill out the form or reach out directly
              through the following channels:
            </p>
            <div
              className={` flex items-center gap-3 ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              <MdOutlineEmail className="text-blue-600 text-2xl" />
              rafeyshaikh57@gmail.com
            </div>
            <div
              className={` flex items-center gap-3 ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              <FiPhone className="text-blue-600 text-2xl" />
              +92 31202811 55
            </div>
            <div
              className={` flex items-center gap-3 ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              <RiMapPinLine className="text-blue-600 text-2xl" />
              Karachi, Pakistan
            </div>
          </div>
          <div className="p-4 sm:p-12">
            <form
              onSubmit={onSubmit}
              className={`flex flex-col gap-3  mx-auto w-full`}
            >
              <div className="">
                <div
                  className={`flex justify-center items-center pl-3 rounded-lg border ${
                    theme === "dark"
                      ? "border-gray-600 placeholder-gray-400"
                      : "border-gray-300"
                  }`}
                >
                  <GoPerson className="text-xl" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="p-3 w-full text-sm outline-none"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div
                  className={`flex justify-center items-center pl-3 rounded-lg border ${
                    theme === "dark"
                      ? "border-gray-600 placeholder-gray-400"
                      : "border-gray-300"
                  }`}
                >
                  <MdOutlineEmail className="text-xl" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 w-full text-sm outline-none"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Enter your message"
                  required
                  className={`w-full p-3 text-sm outline-none rounded-lg border ${
                    theme === "dark"
                      ? "border-gray-600 placeholder-gray-400"
                      : "border-gray-300"
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full text-center flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-10 py-3 rounded-lg cursor-pointer shadow-lg hover:-translate-y-1 transition-all`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

{/* offer */}
      <div className="w-full mt-10">
        <div
          className={`w-full  border rounded bg-white/5 backdrop-blur-3xl py-6 px-8 ${
            theme === "light" ? "border-gray-400" : "border-gray-700"
          }`}
        >
          <div className="text-center space-y-2 pb-14">
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
              What I Offer
            </p>
            <h1 className="text-4xl font-bold ">Why Choose Me?</h1>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offer.map((contact, i) => (
              <div
                className="p-6 rounded-xl text-center w-full flex flex-col items-center gap-3
  bg-white/5 backdrop-blur-3xl shadow-md
  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  hover:scale-105 transition-transform duration-300"
                key={i}
              >
                <div
                  className={` rounded p-3 bg-gradient-to-tl from-green-600 to-green-400`}
                >
                  {contact.icon}
                </div>
                <h2 className="text-xl font-semibold">{contact.name}</h2>
                <p
                  className={` text-sm ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {contact.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* connect */}
      <div className="w-full my-10">
    <div className="text-center space-y-2 pb-14">
            <p className="text-sm uppercase tracking-widest font-medium text-gray-500">
              Let’s Get in Touch
            </p>
            <h1 className="text-4xl font-bold ">Connect With me</h1>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {connect.map((contact, i) => (
              <div
                className="p-6 rounded-xl text-center w-full flex flex-col items-center gap-3
  bg-white/5 backdrop-blur-3xl shadow-md
  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  hover:scale-105 transition-transform duration-300"
                key={i}
              >
                  {contact.icon}
                <h2 className="text-xl font-semibold">{contact.name}</h2>
                <p
                  className={` text-sm ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  {contact.title}
                </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Contact;
