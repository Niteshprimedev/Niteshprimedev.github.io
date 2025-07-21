import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa"; // Example icons
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiLeetcode,
} from "react-icons/si"; // More specific tech icons

export const personalInfo = {
  name: "Nitesh Sharma",
  title: "Full Stack Developer",
  email: "niteshprimedev@gmail.com",
  leetcode: "https://leetcode.com/u/niteshprimedev",
  linkedin: "https://linkedin.com/in/niteshprimedev",
  github: "https://github.com/niteshprimedev",
  resumeLink: "/NiteshResume.pdf", // Make sure your resume is in public/
  bio: "Passionate Full Stack Developer with a strong foundation in modern JavaScript, HTML, CSS, and Reactjs for front-end development, and hands-on experience with Node.js, Express.js, and MongoDB for back-end solutions. Proven ability to design and implement RESTful APIs, optimize performance, and deliver end‑to‑end solutions — from concept to deployment.",
  shortBio: "I build things for the web.", // For Hero section
};

export const education = [
  {
    institution: "Birla Institute of Technology and Science, Pilani (WILP)",
    degree: "Master of Technology in Software Systems",
    duration: "Apr 2021 – Dec 2024",
    score: "CGPA: 7.1/10",
  },
  {
    institution: "Govt Autonomous Science College, Jabalpur",
    degree: "Bachelor of Science in Mathematics",
    duration: "July 2017 - Oct 2020",
    score: "CGPA: 7.0/10",
  },
  {
    institution: "Govt Model Science School",
    degree: "Class 12th State Board",
    duration: "April 2016 - May 2017",
    score: "88%",
  },
];

export const projects = [
  {
    title: "AgriSure",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Improved financial access for over 12,000 farmers boosting microloan approvals by 35% via CIBIL-based lending, integrating AI insights, and Hindi support via Google Translation. Engineered the full-stack system, handling frontend UI, backend API and database management.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/aditiarya37/AgriSure", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "BuildBridge",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/aditiarya37/BuildBridge", // Replace with actual link
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "FarmConnect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    date: "Feb 2025 – Present",
    githubLink: "https://github.com/aditiarya37/FarmConnect",
    liveLink: "https://farm-connect-iota-psi.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "WealthWise",
    tech: ["React JS", "Node JS", "Firebase", "API Integration"],
    description:
      "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/aditiarya37/WealthWise",
    liveLink: "https://wealthwisefinance.vercel.app/",
    category: "Fintech",
    icon: <SiFirebase size={24} className="text-accent-1" />,
  },
  {
    title: "Blood Shortage Survey and Dashboard",
    tech: ["React.js", "Node.js", "MongoDB"],
    description:
      "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
    date: "Jan 2025 – Present",
    githubLink: "https://github.com/aditiarya37/BloodLink", // Replace with actual link
    liveLink: null,
    category: "Healthcare",
    icon: <FaDatabase size={24} className="text-accent-1" />,
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    { name: "Bootstrap", icon: <FaCode /> },
  ], // Placeholder icon],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
  ],
};

export const leadershipAndInvolvement = [
  {
    role: "Senior Software Engineer",
    organization: "Wipro Technologies",
    duration: "Jan 2025 – Present",
    points: [
      "Enhanced layout consistency and visual appeal by implementing design principles and building components such as contact form, and quote.",
      "Improved application stability and user experience by resolving UI issues, bugs, and debugging errors.",
    ],
  },
  {
    role: "Freelancer",
    organization: "Upwork",
    duration: "Feb 2022 - Aug 2022",
    points: [
      "Reduced operation costs by proposing and delivering a custom multi-step product checkout form.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
  {
    role: "Scholar Trainee",
    organization: "Wipro Technologies",
    duration: "Nov 2020 – Dec 2024",
    points: [
      "Developed the ResourceHub app for accessing the resources and updating the resources.",
      "Created an internal Datafeed application using JavaScript that reduced manual data feeding by 80%.",
      "Managed the QA and Application Tester role to rectify bugs and issues.",
    ],
  },
];

export const socialLinks = {
  leetcode: { url: personalInfo.leetcode, icon: <SiLeetcode size={24} /> },
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
