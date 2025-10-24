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
  bio: "Passionate Software Engineer with a strong foundation in Java and Reactjs for building applications using modern Java frameworks. Proven ability to design and implement RESTful APIs, optimize performance, and deliver end‑to‑end solutions — from concept to deployment.",
  shortBio: "I build things for the web.",
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
    title: "Tickethelp",
    tech: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "API Integration",
      "JWT",
    ],
    description:
      "Ticket Help empowers business owners to register the products they provide support for, and customers can raise support tickets and share feedback on thier products and features. It streamlines customer support workflows by enabling product‑specific ticketing, eliminating irrelevant submissions, and improving resolution efficiency.",
    date: "March 2025 – Present",
    githubLink: "https://github.com/Niteshprimedev/ticket-help", // Replace with actual link
    liveLink: "https://ticket-help-niteshprimedev.vercel.app/", // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
  },
  {
    title: "PathVisualizer",
    tech: ["TypeScript", "React JS", "BFS", "DFS", "Algorithms"],
    description:
      "Pathfinding Visualizer, an interactive web app, that brings algorithms like BFS, DFS, Dijkstra’s, and A* to life. Users can draw walls, choose algorithm types, adjust speed, and watch how each algorithm explores the grid to find the shortest path in an intuitive, visual experience. This project highlights my ability to translate complex logic into engaging, practical applications.",
    date: "May 2025 – June 2025",
    githubLink: "https://github.com/Niteshprimedev/pathfinding-visualizer-v2", // Replace with actual link
    liveLink: "https://pfv-niteshprimedev.netlify.app/",
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1" />,
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
    role: "Software Engineer",
    organization: "Wipro Technologies",
    duration: "May 2024 – Present",
    points: [
      "Designed and implemented backend services using Java and Spring Boot, ensuring efficient and scalable business logic.",
      "Implemented and optimized REST APIs to improve data exchange speed and system performance by 30%.",
      "Participated in code reviews, debugging, and low-level design discussions to ensure clean, modular, and maintainable architecture.",
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
    role: "SDET",
    organization: "Wipro Technologies",
    duration: "Nov 2020 – Apr 2024",
    points: [
      "Developed internal Datafeed automation and backend test utilities application using Java, reducing repetitive manual tasks and saving 8 + hours per sprint.",
      "Designed and executed API and integration test cases using Java and Postman, cutting post-release defects by 25%",
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
