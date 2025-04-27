import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    IIT,
    crossasyst,
    CBIA,
    prepnest,
    seedsearch
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title : "Home"
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Application Developer Intern",
      company_name: "C-BIA Consulting Ltd",
      icon: CBIA,
      iconBg: "#383E56",
      date: "May 2024 - Nov 2024",
      points: [
        "Designed intuitive app interfaces using .NET MAUI.",
        "Developed admin frontends with Angular 18.",
        "Implemented backend APIs with Next.js 14.",
        "Utilized app-based routing for seamless API integration.",
      ],
    },
    {
      title: "Fullstack Developer Intern",
      company_name: "IIT Bombay, Nanotechnology",
      icon: IIT,
      iconBg: "#383E56",
      date: "December 2023 - May 2024",
      points: [
        "Creating React web applications and Integrating Backend Apis",
        "Creating Mobile applications using Android Studio and Integrating Backend Apis Using Retrofit Client",
        "Creating Figma Design",
        "Projects : Medicalalgorithm HQ, OPD management system, Anemia Detection using AI",
      ],
    },
    {
      title: "Java Developer Intern",
      company_name: "CrossAsyst",
      icon: crossasyst,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2024",
      points: [
        "Learnet how to Develop a Meaven Java Application.",
        "Connecting Java Application with SQL",
        "Writing SQL Queries.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "MakeShift Solutions",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using HTML CSS JS",
        "Creating Animation using CSS",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   //company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Habitat",
      description:
        "Habitat is a modern android platform that allows users to book, buy or rent or buy the properties it is userfriendly and made using java",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "AndroidStudio",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/KaranP666/Habitat-",
      live_demo_link: "",
    },
    {
      name: "PrepNest",
      description: "PrepNest is an AI-powered platform for practicing interviews with real-time feedback, voice interaction, and performance tracking.",
      tags: [
        { name: "Next.js 14", color: "blue-text-gradient" },
        { name: "Tailwind CSS", color: "pink-text-gradient" },
        { name: "OpenAI", color: "green-text-gradient" },
      ],
      image: prepnest, 
      source_code_link: "https://github.com/KaranP666/Prepnest",
      live_demo_link: "https://prepnest.vercel.app/",
    },    
    {
      name: "SeedSearch",
      description: "SeedSearch is a platform where founders and innovators can pitch startup ideas, track views, and gain early feedback and visibility to attract potential investors.",
      tags: [
        { name: "Next.js 14", color: "blue-text-gradient" },
        { name: "Sanity CMS", color: "green-text-gradient" },
        { name: "Sentry", color: "pink-text-gradient" },
      ],
      image: seedsearch, 
      source_code_link: "https://github.com/KaranP666/Seed-Search",
      live_demo_link: "https://seed-search.vercel.app/",
    },   
  ];
  
  export { services, technologies, experiences, testimonials, projects };