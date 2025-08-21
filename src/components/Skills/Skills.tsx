import { Brain, Code2, Database, Star, Wrench } from "lucide-react";
import React, { useState } from "react";

// Changed Skill interface to use string paths for icons
interface Skill {
  name: string;
  level: number;
  icon: string; // Changed from React.ElementType to string path
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  gradient: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      description: "Creating beautiful and interactive user interfaces",
      skills: [
        {
          name: "React",
          level: 85,
          icon: "/Skills/Frontend/react.svg",
          color: "text-blue-500",
        },
        {
          name: "TypeScript",
          level: 80,
          icon: "/Skills/Frontend/typescript.svg",
          color: "text-blue-600",
        },
        {
          name: "JavaScript",
          level: 90,
          icon: "/Skills/Frontend/javascript.svg",
          color: "text-yellow-500",
        },
        {
          name: "HTML5",
          level: 95,
          icon: "/Skills/Frontend/html-5.svg",
          color: "text-orange-500",
        },
        {
          name: "CSS3",
          level: 90,
          icon: "/Skills/Frontend/css3.svg",
          color: "text-blue-400",
        },
        {
          name: "Tailwind CSS",
          level: 85,
          icon: "/Skills/Frontend/tailwindcss.svg",
          color: "text-teal-500",
        },
        {
          name: "Bootstrap",
          level: 75,
          icon: "/Skills/Frontend/bootstrap.svg",
          color: "text-pink-500",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      description: "Building robust server-side applications and APIs",
      skills: [
        {
          name: "Node.js",
          level: 80,
          icon: "/Skills/Backend/node-js.svg",
          color: "text-green-600",
        },
        {
          name: "Python",
          level: 75,
          icon: "/Skills/Backend/.net-framework.svg",
          color: "text-blue-500",
        },
        {
          name: "PHP",
          level: 65,
          icon: "/Skills/Backend/php-logo.svg",
          color: "text-purple-600",
        },
        {
          name: "Express.js",
          level: 80,
          icon: "/Skills/Backend/express-js.svg",
          color: "text-gray-700",
        }
       
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      gradient: "from-purple-500 to-violet-500",
      description: "Designing and managing data storage solutions",
      skills: [
        {
          name: "MySQL",
          level: 85,
          icon: "/Skills/Database/mysql.svg",
          color: "text-blue-600",
        },
        {
          name: "MongoDB",
          level: 80,
          icon: "/Skills/Database/mongodb.svg",
          color: "text-green-600",
        },
        
        {
          name: "MsSQL",
          level: 65,
          icon: "/Skills/Database/microsoft-sql-server.svg",
          color: "text-red-500",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      description: "Development tools and technologies I work with",
      skills: [
        {
          name: "Git/GitHub",
          level: 90,
          icon: "/Skills/Tools/git.svg",
          color: "text-gray-800",
        },
        {
          name: "Docker",
          level: 70,
          icon: "/Skills/Tools/docker.svg",
          color: "text-blue-500",
        },
        {
          name: "Figma",
          level: 75,
          icon: "/Skills/Tools/figma.svg",
          color: "text-purple-500",
        },
        {
          name: "Postman",
          level: 80,
          icon: "/Skills/Tools/postman.svg",
          color: "text-orange-500",
        },
        {
          name: "Webpack",
          level: 65,
          icon: "/Skills/Tools/webpack.svg",
          color: "text-blue-400",
        },
      ],
    },
    {
      title: "Soft Skills",
      icon: Brain,
      gradient: "from-pink-500 to-rose-500",
      description: "Personal and professional development skills",
      skills: [
        {
          name: "Problem Solving",
          level: 90,
          icon: "/Skills/Soft/problem-solving.svg",
          color: "text-purple-600",
        },
        {
          name: "Team Work",
          level: 85,
          icon: "/Skills/Soft/teamwork.svg",
          color: "text-blue-500",
        },
        {
          name: "Communication",
          level: 80,
          icon: "/Skills/Soft/communication.svg",
          color: "text-green-500",
        },
        {
          name: "Time Management",
          level: 85,
          icon: "/Skills/Soft/time-management.svg",
          color: "text-orange-500",
        },
        {
          name: "Learning Agility",
          level: 95,
          icon: "/Skills/Soft/learning.svg",
          color: "text-indigo-500",
        },
        {
          name: "Creativity",
          level: 80,
          icon: "/Skills/Soft/creativity.svg",
          color: "text-yellow-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-lg">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and the technologies
            I love working with
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : "bg-gray-800/50 text-white hover:bg-gray-700/50 shadow-md hover:shadow-lg"
              }`}
            >
              <category.icon size={20} />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-gray-300">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="glass-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                
              >
                <div >
                  <div className="glass-card flex items-center space-x-3">
                    <div className={`${skill.color}`}>
                      {/* Changed to img tag instead of component */}
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-24 h-24"
                      />
                      <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">25+</h4>
              <p className="text-gray-300">Technologies</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">3+</h4>
              <p className="text-gray-300">Years Learning</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white">∞</h4>
              <p className="text-gray-300">Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
