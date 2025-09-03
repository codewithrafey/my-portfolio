import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
// import { RiMenu4Line } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";



function Contact() {
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

      <div className={`max-w-4xl rounded-3xl  overflow-hidden shadow-xl`}>
        <div className="grid grid-col-1 sm:grid-cols-2">
          <div className={`p-12 space-y-6  ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
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
              <MdOutlineEmail className="text-blue-600 text-2xl"/>rafeyshaikh57@gmail.com
            </div>
            <div
              className={` flex items-center gap-3 ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              <FiPhone className="text-blue-600 text-2xl"/>+92 31202811 55
            </div>
            <div
              className={` flex items-center gap-3 ${
                theme === "light" ? "text-gray-600" : "text-gray-200"
              }`}
            >
              <RiMapPinLine className="text-blue-600 text-2xl"/>Karachi, Pakistan
            </div>
          </div>
          <div className="p-12">
            <form
              onSubmit={onSubmit}
              className={`flex flex-col gap-3 max-w-2xl mx-auto w-full`}
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
    </div>
  );
}

export default Contact;
