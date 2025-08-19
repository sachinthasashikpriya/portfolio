import React, { useState } from 'react';
import { Code2, Database, Globe, Smartphone, Wrench, Brain, Star } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
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
      title: 'Frontend Development',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Creating beautiful and interactive user interfaces',
      skills: [
        { name: 'React', level: 85, icon: '⚛️', color: 'text-blue-500' },
        { name: 'TypeScript', level: 80, icon: '🔷', color: 'text-blue-600' },
        { name: 'JavaScript', level: 90, icon: '🟨', color: 'text-yellow-500' },
        { name: 'HTML5', level: 95, icon: '🧡', color: 'text-orange-500' },
        { name: 'CSS3', level: 90, icon: '💙', color: 'text-blue-400' },
        { name: 'Tailwind CSS', level: 85, icon: '🌊', color: 'text-teal-500' },
        { name: 'Sass/SCSS', level: 75, icon: '🎨', color: 'text-pink-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Building robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢', color: 'text-green-600' },
        { name: 'Python', level: 75, icon: '🐍', color: 'text-blue-500' },
        { name: 'Java', level: 70, icon: '☕', color: 'text-orange-600' },
        { name: 'PHP', level: 65, icon: '🐘', color: 'text-purple-600' },
        { name: 'Express.js', level: 80, icon: '🚂', color: 'text-gray-700' },
        { name: 'REST APIs', level: 85, icon: '🔌', color: 'text-indigo-500' },
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      gradient: 'from-purple-500 to-violet-500',
      description: 'Designing and managing data storage solutions',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬', color: 'text-blue-600' },
        { name: 'MongoDB', level: 80, icon: '🍃', color: 'text-green-600' },
        { name: 'PostgreSQL', level: 75, icon: '🐘', color: 'text-blue-700' },
        { name: 'Firebase', level: 70, icon: '🔥', color: 'text-orange-500' },
        { name: 'Redis', level: 65, icon: '💎', color: 'text-red-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      gradient: 'from-orange-500 to-red-500',
      description: 'Development tools and technologies I work with',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🐱', color: 'text-gray-800' },
        { name: 'Docker', level: 70, icon: '🐳', color: 'text-blue-500' },
        { name: 'VS Code', level: 95, icon: '💙', color: 'text-blue-600' },
        { name: 'Figma', level: 75, icon: '🎨', color: 'text-purple-500' },
        { name: 'Postman', level: 80, icon: '📮', color: 'text-orange-500' },
        { name: 'Webpack', level: 65, icon: '📦', color: 'text-blue-400' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Brain,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Personal and professional development skills',
      skills: [
        { name: 'Problem Solving', level: 90, icon: '🧩', color: 'text-purple-600' },
        { name: 'Team Work', level: 85, icon: '🤝', color: 'text-blue-500' },
        { name: 'Communication', level: 80, icon: '💬', color: 'text-green-500' },
        { name: 'Time Management', level: 85, icon: '⏰', color: 'text-orange-500' },
        { name: 'Learning Agility', level: 95, icon: '📚', color: 'text-indigo-500' },
        { name: 'Creativity', level: 80, icon: '✨', color: 'text-yellow-500' },
      ]
    }
  ];

  const getSkillLevelText = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Beginner';
    return 'Learning';
  };

  const getSkillLevelColor = (level: number): string => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    if (level >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-lg">My Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and the technologies I love working with
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {skillCategories[activeCategory].title}
            </h3>
            <p className="text-gray-600">
              {skillCategories[activeCategory].description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h4>
                      <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                        {getSkillLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{skill.level}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].gradient} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code2 className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">25+</h4>
              <p className="text-gray-600">Technologies</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">3+</h4>
              <p className="text-gray-600">Years Learning</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">∞</h4>
              <p className="text-gray-600">Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;