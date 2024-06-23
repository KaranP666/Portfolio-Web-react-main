import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <TechItem key={technology.name} icon={technology.icon} name={technology.name} />
      ))}
    </div>
  );
};

const TechItem = ({ icon, name }) => {
  const [styles, api] = useSpring(() => ({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
  }));

  return (
    <animated.div
      style={styles}
      className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center bg-gray-100 rounded-full shadow-lg"
    >
      <img src={icon} alt={name} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
    </animated.div>
  );
};

export default SectionWrapper(Skills, "");
