// components/ProjectsSection.tsx
import { ExternalLink, Github } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Wayfinde",
      description:
        "A web application built for the travelers including the features user authentication, trip planning, blog posting, accommodation and vehicle reservations, payment integration and admin dashboard.",
      tech: ["React", ".NET", "MsSQL", "Stripe API", "JWT", "cloudinary"],
      github: "#",
      demo: "#",
      image: "👣",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, time tracking, and project analytics dashboard.",
      tech: [
        "React",
        "TypeScript",
        "Socket.io",
        "Express",
        "PostgreSQL",
        "Redux",
      ],
      github: "#",
      demo: "#",
      image: "📋",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides detailed forecasts, interactive weather maps, location-based alerts, and historical weather data visualization using multiple APIs.",
      tech: [
        "React",
        "Tailwind CSS",
        "OpenWeather API",
        "Chart.js",
        "Mapbox",
        "PWA",
      ],
      github: "#",
      demo: "#",
      image: "🌤️",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "A comprehensive social media analytics platform with data visualization, sentiment analysis, engagement tracking, and automated reporting for multiple social platforms.",
      tech: ["React", "Python", "Flask", "PostgreSQL", "D3.js", "TensorFlow"],
      github: "#",
      demo: "#",
      image: "📊",
    },
    {
      id: 5,
      title: "Learning Management System",
      description:
        "An educational platform with course creation tools, student progress tracking, interactive quizzes, video streaming, and certificate generation system.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "WebRTC", "Cloudinary"],
      github: "#",
      demo: "#",
      image: "🎓",
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
      demo: "#",
      image: "🏠",
    },
  ];

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
              className="backdrop-blur-md bg-black/30 rounded-2xl p-6 border border-gray-800/50 shadow-2xl hover:bg-black/40 transition-all duration-500 hover:scale-105 group"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{project.image}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-300 mb-6 text-sm leading-relaxed line-clamp-4">
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
              <div className="flex gap-4 justify-center">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-gray-800/40 px-3 py-2 rounded-lg hover:bg-gray-700/60 border border-gray-700"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-gray-800/40 px-3 py-2 rounded-lg hover:bg-gray-700/60 border border-gray-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
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
