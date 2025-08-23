// components/SkillsSection.tsx
import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, Github } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  
}

interface SkillCategories {
  [key: string]: Skill[];
}

const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategories = {
    'Frontend': [
      { name: 'React', icon: <Code className="w-6 h-6" /> },
      { name: 'JavaScript', icon: <Globe className="w-6 h-6" /> },
      { name: 'TypeScript', icon: <Code className="w-6 h-6" />},
      { name: 'Tailwind CSS', icon: <Palette className="w-6 h-6" /> },
      { name: 'Next.js', icon: <Code className="w-6 h-6" /> },
      { name: 'Vue.js', icon: <Code className="w-6 h-6" /> }
    ],
    'Backend': [
      { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
      { name: 'Express.js', icon: <Server className="w-6 h-6" /> },
      { name: 'Python', icon: <Code className="w-6 h-6" />},
      { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
      { name: 'PostgreSQL', icon: <Database className="w-6 h-6" /> },
      { name: 'GraphQL', icon: <Database className="w-6 h-6" /> }
    ],
    'Tools & Others': [
      { name: 'Vite', icon: <Code className="w-6 h-6" /> },
      { name: 'Git & GitHub', icon: <Github className="w-6 h-6" /> },
      { name: 'Docker', icon: <Server className="w-6 h-6" />},
      { name: 'AWS', icon: <Server className="w-6 h-6" />},
      { name: 'Responsive Design', icon: <Smartphone className="w-6 h-6" /> },
      { name: 'Testing (Jest)', icon: <Code className="w-6 h-6" /> }
    ]
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Skills & Technologies</h2>
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="backdrop-blur-md bg-black/30 rounded-2xl p-8 border border-gray-800/50 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">{category}</h3>
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