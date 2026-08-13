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
  atlasCopco as meta_placeholder, 
  idlab as tesla_placeholder,     
  outlierAI as starbucks_placeholder, /
  python,
  cpp,
  sql,
  rust,
  nextjs,
  fastapi,
  flask,
  pytorch,
  sklearn,
  postgresql,
  mysql,
  linux,
} from "../assets";
 
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
 
const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Researcher",
    icon: creator,
  },
];
 
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Linux",
    icon: linux,
  },
];
 
const experiences = [
  {
    title: "AI Models Trainer",
    company_name: "Outlier AI",
    icon: starbucks_placeholder,
    iconBg: "#383E56",
    date: "October 2024 - 2025",
    points: [
      "Trained and refined generative AI LLM models by evaluating, rating, and rewriting model responses.",
      "Assessed response quality against detailed guidelines to improve model alignment and accuracy.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "IDlab",
    icon: tesla_placeholder,
    iconBg: "#E6DEDD",
    date: "February 2025 - June 2025",
    points: [
      "Developed a hybrid distributed task-scheduling framework for swarm robotics, combining centralized optimization with parallel local refinement.",
      "Implemented and evaluated the framework in ROS using Docker and Python, achieving improved scalability and reduced computation time.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Atlas Copco",
    icon: meta_placeholder,
    iconBg: "#383E56",
    date: "March 2025 - February 2026",
    points: [
      "Built and maintained a unified component library for Atlas Copco developers using TypeScript, React, CSS, and HTML.",
      "Enabled consistent and efficient application development across teams by standardizing shared UI components.",
    ],
  },
];
 
const projects = [
  {
    name: "Deep Learning Image Classification",
    description:
      "Designed and trained convolutional neural network models for image classification using PyTorch with a ResNet18 backbone, including custom fully connected layers and output heads.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "gradcam",
        color: "pink-text-gradient",
      },
    ],
    image: creator, // TODO: replace with a project screenshot
    source_code_link: "https://github.com/sclatch1",
  },
  {
    name: "Swarm Robotics Task Scheduling",
    description:
      "Hybrid distributed task-scheduling framework for swarm robotics combining centralized optimization with parallel local refinement, implemented in ROS with Docker and Python.",
    tags: [
      {
        name: "ros",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: creator, // TODO: replace with a project screenshot
    source_code_link: "https://github.com/sclatch1",
  },
  {
    name: "Atlas Copco Component Library",
    description:
      "Unified, reusable component library built with TypeScript, React, CSS, and HTML to enable consistent, efficient application development across Atlas Copco teams.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: creator, // TODO: replace with a project screenshot
    source_code_link: "https://github.com/sclatch1",
  },
];
 
const publications = [
  {
    title:
      "Hybrid Multiverse-based Parallel Computing Framework for Task Scheduling in Swarm Robotics",
    venue: "IEEE",
    date: "January 2026",
    description:
      "Developed a ROS-based, Python-implemented hybrid scheduling framework for efficient swarm coordination, reducing computation time and improving scalability through parallel execution across robots.",
  },
];
 
const education = [
  {
    school: "University of Antwerp",
    degree: "MSc Artificial Intelligence and Data Science",
    date: "2025 - present",
    courses:
      "Database Systems, Artificial Neural Networks, Reinforcement Learning, Data Mining, IoT",
  },
  {
    school: "University of Antwerp, Belgium",
    degree: "BSc Computer Science",
    date: "2021 - 2024",
    courses:
      "Data Structures and Algorithms, Artificial Intelligence, Computer Security, Computer Networks, Databases, Software Engineering, Operating Systems",
  },
];
 
export {
  services,
  technologies,
  experiences,
  projects,
  publications,
  education,
};
