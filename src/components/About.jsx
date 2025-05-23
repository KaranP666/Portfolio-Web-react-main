import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled developer with a strong focus on React, Java, and
        JavaScript. With a passion for creating interactive and user-centric web
        applications, I have honed my expertise in building modern UIs using
        React, implementing robust backend systems with Java, and leveraging
        JavaScript to enhance web interactivity. With a knack for
        problem-solving and a commitment to delivering high-quality solutions, I
        thrive in collaborative environments and enjoy tackling complex
        challenges head-on. Explore my portfolio to see the projects I've worked
        on and get in touch to discuss how I can contribute to your next web
        development venture.
      </motion.p>

      <a
        href="/resume/Karan_Panchal_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 pl-3 pr-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 ease-in-out hover:pl-4 hover:pr-6 w-[48px] hover:w-[140px] overflow-hidden"
      >
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
          <img src="/download-icon.png" alt="Download" className="w-4 h-4" />
        </div>
        <span className="text-white font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Resume
        </span>
      </a>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServicesCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
