// components/ProjectsSection.tsx
import { Github, LinkedinIcon } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string | { label: string; url: string }[];
  linkedin: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Wayfinde",
      description:
        "A web application built for the travelers including the features user authentication, trip planning, blog posting, accommodation and vehicle reservations, payment integration and admin dashboard.",
      tech: [
        "React",
        ".NET",
        "MSSQL",
        "Stripe API",
        "Google Map API",
        "JWT",
        "cloudinary",
      ],
      github: "https://github.com/Navoda-Rajapakshe01/project_WayFinde.git",
      linkedin: "#",
      image: "👣",
    },
    {
      id: 2,
      title: "Track Me",
      description:
        "A web application designed to help users manage their personal finances efficiently. It allows users to record and monitor their daily income and expenses, analyze them through statistical summaries, and create budgets for special occasions. Additionally, the system provides reminder features for important financial activities such as bill payments, helping users stay organized and in control of their spending.",
      tech: [
        "React",
        "TypeScript",
        "Socket.io",
        "Express",
        "PostgreSQL",
        "Redux",
      ],
      github:
        "https://github.com/sachinthasashikpriya/PersonalExpenseTracker.git",
      linkedin:
        "https://www.linkedin.com/posts/sachintha-sashikpriya-8827a6267_react-express-mongodb-ugcPost-7389882125686173696-paSb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFvW2IBZm0Da_bb505CXoh2hd_IZMl0UhQ",
      image: "📋",
    },
    {
      id: 3,
      title: "School Management System",
      description:
        "A responsive weather application that provides detailed forecasts, interactive weather maps, location-based alerts, and historical weather data visualization using multiple APIs.",
      tech: ["React", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
      github:
        "https://github.com/sachinthasashikpriya/SchoolManagementSystem.git",
      linkedin: "#",
      image: "🎓",
    },
    {
      id: 4,
      title: "Bagify – Multi-Vendor E-Commerce Platform",
      description:
        "A full-stack multi-vendor e-commerce web application designed for buying and selling bags online. The platform supports buyer, seller, and admin roles with features like product management, shopping cart, order processing, authentication, and an admin dashboard for system control and analytics.",
      tech: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "JWT",
        "Tailwind CSS",
      ],
      github: [
        {
          label: "Frontend",
          url: "https://github.com/sachinthasashikpriya/bagify-project",
        },
        {
          label: "Backend",
          url: "https://github.com/sachinthasashikpriya/bagify-backend",
        },
      ],
      linkedin: "#",
      image: "🛍️",
    },
    {
      id: 5,
      title: "FlexFit – Smart Fitness Monitoring System",
      description:
        "An IoT-based fitness monitoring system built using the Arduino Nano 33 BLE Sense Rev 2 to track body movements and physical activity. The system utilizes onboard sensors to capture motion data, analyze exercise patterns, and provide real-time feedback, enabling smarter workout tracking and performance monitoring.",
      tech: [
        "Arduino",
        "Firebase",
        "Arduino nano 33 BLE sense",
        "GPS module",
        "Heart rate sensor",
      ],
      github:
        "https://github.com/sachinthasashikpriya/Arduino-hardware-project",
      linkedin: "#",
      image: "🤖",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description:
        "A modern real estate platform with property listings, virtual tours, mortgage calculator, agent profiles, and integrated mapping functionality.",
      tech: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Mapbox",
        "Stripe",
      ],
      github: "#",
      linkedin: "#",
      image: "🏠",
    },
  ];

  const renderGithubLinks = (
    github: string | { label: string; url: string }[]
  ) => {
    if (typeof github === "string") {
      // Single repository
      return (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-gray-800/40 px-3 py-2 rounded-lg hover:bg-gray-700/60 border border-gray-700"
        >
          <Github className="w-4 h-4" />
          <span className="text-sm">Code</span>
        </a>
      );
    } else {
      // Multiple repositories
      return (
        <div className="flex gap-2">
          {github.map((repo, index) => (
            <a
              key={index}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors bg-gray-800/40 px-2 py-2 rounded-lg hover:bg-gray-700/60 border border-gray-700"
              title={repo.label}
            >
              <Github className="w-4 h-4" />
              <span className="text-xs">{repo.label}</span>
            </a>
          ))}
        </div>
      );
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-md bg-black/30 rounded-2xl p-6 border border-gray-800/50 shadow-2xl hover:bg-black/40 transition-all duration-500 hover:scale-105 group flex flex-col h-full"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{project.image}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed line-clamp-4 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800/60 text-slate-300 rounded-full text-xs hover:bg-gray-700/60 transition-colors border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 justify-center mt-auto pt-4">
                {renderGithubLinks(project.github)}
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-blue-600/40 px-3 py-2 rounded-lg hover:bg-blue-700/60 border border-blue-600"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
