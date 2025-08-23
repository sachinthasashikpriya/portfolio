// components/SkillsSection.tsx
import {
  Code,
  Database,
  Github,
  Globe,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import React from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategories {
  [key: string]: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategories = {
    Frontend: [
      { name: "React", icon: <img src="Frontend/typescript.svg" className="w-full h-full" /> },
      { name: "JavaScript", icon: <img src="Frontend/javascript.svg" className="w-full h-full" /> },
      {
        name: "TypeScript",
        icon: <img src="Frontend/typescript.svg" className="w-full h-full" />,
      },
      { name: "Tailwind CSS", icon: <img src="Frontend/tailwindcss.svg" className="w-full h-full" /> },
      { name: "Bootstrap", icon: <img src="Frontend/bootstrap.svg" className="w-full h-full" /> },
      { name: "HTML5", icon: <img src="Frontend/html-5.svg" className="w-full h-full" /> },
      { name: "CSS3", icon: <img src="Frontend/css3.svg" className="w-full h-full" /> }
    ],
    "Backend & Databases": [
      { name: "Node.js", icon: <img src="Backend/node-js.svg" className="w-full h-full" /> },
      { name: "Express.js", icon: <img src="Backend/express-js.svg" className="w-full h-full" /> },
      { name: ".NET", icon: <img src="Backend/.net-.svg" className="w-full h-full" /> },
      { name: "PHP", icon:<img src="Backend/php-logo.svg" className="w-full h-full" /> },
      { name: "MySQL", icon: <img src="Backend/mysql.svg" className="w-full h-full" /> },
      { name: "MongoDB", icon: <img src="Backend/mysql.svg" className="w-full h-full" /> },
      { name: "MSSQL", icon: <img src="Backend/mssql.svg" className="w-full h-full" /> }
    ],
    "Tools & Others": [
      { name: "Vite", icon: <Code className="w-full h-full" /> },
      { name: "Git & GitHub", icon: <Github className="w-full h-full" /> },
      { name: "Docker", icon: <Server className="w-full h-full" /> },
      { name: "AWS", icon: <Server className="w-full h-full" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-full h-full" /> },
      { name: "Testing (Jest)", icon: <Code className="w-full h-full" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Skills & Technologies
        </h2>
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="backdrop-blur-md bg-black/30 rounded-2xl p-8 border border-gray-800/50 shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                      <div className="text-slate-400">{skill.icon}</div>
                      <span className="font-medium flex-1">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
