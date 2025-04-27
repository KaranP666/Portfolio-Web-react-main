import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { avatar } from "../assets";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/karanpanchal999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 hover:shadow-[inset_0_0_50px_50px_#8000ff] transition-all duration-500"
          >
            <FaLinkedin className="text-white text-3xl" />
          </a>
          <a
            href="https://github.com/KaranP666"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 hover:shadow-[inset_0_0_50px_50px_#8000ff] transition-all duration-500"
          >
            <FaGithub className="text-white text-3xl" />
          </a>
          <a
            href="mailto:karanhpanchal09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-300 hover:shadow-[inset_0_0_50px_50px_#8000ff] transition-all duration-500"
          >
            <FaEnvelope className="text-white text-3xl" />
          </a>
        </div>

        <div className="w-48 mt-8 relative flex justify-center items-end">
          <img
            src={avatar}
            alt="Your Avatar"
            className="w-full z-10"
          />
        </div>
      </div>
      <div className="w-full bg-black text-gray-400 text-lg pb-8 text-center py-4">
          Design & Built by Karan Panchal ©
        </div>
    </div>
  );
};

export default Footer;
