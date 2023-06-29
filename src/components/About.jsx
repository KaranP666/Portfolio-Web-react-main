import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServicesCard = ({ index,title, icon}) =>{
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
       I'm a skilled developer with a strong focus on React, Java, and JavaScript. With a passion for creating interactive and user-centric web applications, I have honed my expertise in building modern UIs using React, implementing robust backend systems with Java, and leveraging JavaScript to enhance web interactivity. With a knack for problem-solving and a commitment to delivering high-quality solutions, I thrive in collaborative environments and enjoy tackling complex challenges head-on. Explore my portfolio to see the projects I've worked on and get in touch to discuss how I can contribute to your next web development venture.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((services,index)=>(
        <ServicesCard key={services.title} index={index} {...services} />
      ))}

    </div>
    </>
  )
}

export default About