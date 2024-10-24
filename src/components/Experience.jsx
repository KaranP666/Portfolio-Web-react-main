import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement
  contentStyle={{
    background: '#1d1836',
    color: '#fff',
    padding: '20px',
    width: '100%', // Make content responsive
    maxWidth: '500px', // Limit width to avoid excessive size on large screens
  }}
  contentArrowStyle={{ borderRight: '7px solid #232631' }}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
>
  <div>
    <h3 className="text-white text-[24px] font-bold">
      {experience.title}
    </h3>
    <p 
      className="text-secondary text-[16px] font-semibold" 
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </p>
  </div>
  <ul className="mt-5 list-disc pl-5 space-y-2">
    {experience.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className="text-white-100 text-[14px] tracking-wider"
      >
        {point}
      </li>
    ))}
  </ul>

  <style jsx>{`
    @media (max-width: 720px) {
      .text-[24px] {
        font-size: 20px;
      }
      .text-[16px] {
        font-size: 14px;
      }
      .text-[14px] {
        font-size: 12px;
      }
      .pl-5 {
        padding-left: 1.25rem;
      }
      .mt-5 {
        margin-top: 1rem;
      }
      .space-y-2 > * + * {
        margin-top: 0.5rem;
      }
      ul {
        padding-left: 16px;
      }
      h3, p {
        text-align: center; /* Optional: Center-align text on small screens */
      }
    }

    /* Adjust vertical line alignment */
    .vertical-timeline-element-content {
      margin-left: 60px; /* Shift content to avoid overlapping with the line */
      max-width: 500px; /* Limit width for better layout */
    }

    .vertical-timeline-element-date {
      min-width: 75px; /* Ensure the date section doesn’t squeeze */
      text-align: right; /* Align date text to the right */
    }
  `}</style>
</VerticalTimelineElement>


//   <VerticalTimelineElement
//   contentStyle={{
//     background: '#1d1836',
//     color: '#fff',
//     padding: '16px',
//   }}
//   contentArrowStyle={{ borderRight: '7px solid #232631' }}
//   date={experience.date}
//   iconStyle={{ background: experience.iconBg }}
//   icon={
//     <div className="flex justify-center items-center w-full h-full">
//       <img 
//         src={experience.icon}
//         alt={experience.company_name}
//         className="w-[60%] h-[60%] object-contain"
//       />
//     </div>
//   }
// >
//   <div>
//     <h3 className="text-white text-[24px] font-bold">
//       {experience.title}
//     </h3>
//     <p 
//       className="text-secondary text-[16px] font-semibold" 
//       style={{ margin: 0 }}
//     >
//       {experience.company_name}
//     </p>
//   </div>
//   <ul className="mt-5 list-disc ml-5 space-y-2">
//     {experience.points.map((point, index) => (
//       <li
//         key={`experience-point-${index}`}
//         className="text-white-100 text-[14px] pl-1 tracking-wider"
//       >
//         {point}
//       </li>
//     ))}
//   </ul>

//   {/* Media query for responsiveness */}
//   <style jsx>{`
//     @media (max-width: 720px) {
//       .text-[24px] {
//         font-size: 20px;
//       }
//       .text-[16px] {
//         font-size: 14px;
//       }
//       .text-[14px] {
//         font-size: 12px;
//       }
//       .ml-5 {
//         margin-left: 1rem;
//       }
//       .mt-5 {
//         margin-top: 1rem;
//       }
//       .space-y-2 > * + * {
//         margin-top: 0.5rem;
//       }
//       ul {
//         padding-left: 16px;
//       }
//       h3, p {
//         text-align: center; /* Optional: Center-align text on small screens */
//       }
//     }
//   `}</style>
// </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="m-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")