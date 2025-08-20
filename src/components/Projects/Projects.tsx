import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Star, Code,  Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  featured: boolean;
  date: string;
  status: 'completed' | 'in-progress' | 'planning';
  stats: {
    stars?: number;
    commits?: number;
    contributors?: number;
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
 

  const categories = [
    { id: 'all', label: 'All Projects', icon: '🚀' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'api', label: 'APIs', icon: '⚡' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce web application with user authentication, product management, and payment integration',
      longDescription: 'Built a comprehensive e-commerce platform from scratch featuring user authentication, product catalog, shopping cart, order management, and Stripe payment integration. Includes admin dashboard for inventory management and analytics.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      featured: true,
      date: '2024-03',
      status: 'completed',
      stats: { stars: 24, commits: 127, contributors: 2 }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features',
      longDescription: 'Developed a modern task management application with drag-and-drop functionality, real-time collaboration, team workspaces, and notification system. Features include project templates, time tracking, and progress analytics.',
      image: '📋',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      featured: true,
      date: '2024-01',
      status: 'completed',
      stats: { stars: 18, commits: 89, contributors: 1 }
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather and forecasts using external APIs',
      longDescription: 'Created a comprehensive weather dashboard with location-based forecasts, interactive maps, weather alerts, and historical data visualization. Integrated multiple weather APIs for accurate predictions.',
      image: '🌤️',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js', 'Geolocation'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'web',
      featured: false,
      date: '2023-11',
      status: 'completed',
      stats: { stars: 12, commits: 45, contributors: 1 }
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with user management, posts, and social interactions',
      longDescription: 'Built a scalable REST API with user authentication, post management, comments, likes, follow system, and real-time notifications. Implemented rate limiting, data validation, and comprehensive testing.',
      image: '🔌',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'Jest'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'api',
      featured: true,
      date: '2024-02',
      status: 'completed',
      stats: { stars: 31, commits: 156, contributors: 3 }
    },
    {
      id: 5,
      title: 'Fitness Tracker Mobile App',
      description: 'Cross-platform mobile app for tracking workouts, nutrition, and fitness goals',
      longDescription: 'Developed a comprehensive fitness tracking app with workout planning, nutrition logging, progress tracking, and social features. Integrated with device sensors for accurate activity monitoring.',
      image: '💪',
      technologies: ['React Native', 'Expo', 'Redux', 'AsyncStorage', 'Push Notifications'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'mobile',
      featured: false,
      date: '2023-09',
      status: 'completed',
      stats: { stars: 8, commits: 72, contributors: 1 }
    },
    {
      id: 6,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities',
      longDescription: 'Created an AI-powered chatbot using machine learning for customer support automation. Features include intent recognition, context awareness, multilingual support, and continuous learning from interactions.',
      image: '🤖',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Flask', 'OpenAI API'],
      githubUrl: '#',
      liveUrl: '#',
      category: 'ai',
      featured: true,
      date: '2024-04',
      status: 'in-progress',
      stats: { stars: 15, commits: 93, contributors: 2 }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Removed unused 'featuredProjects' variable

  const getStatusColor = (status: string): string => {
    const colors = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      'in-progress': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      planning: 'bg-blue-100 text-blue-800 border-blue-200'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusIcon = (status: string): string => {
    const icons = {
      completed: '✅',
      'in-progress': '🔄',
      planning: '📋'
    };
    return icons[status as keyof typeof icons] || '📋';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-lg">My Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Project Header */}
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                    {project.image}
                  </div>
                  <div className="flex space-x-2">
                    {project.featured && (
                      <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs font-semibold border border-yellow-200">
                        ⭐ Featured
                      </div>
                    )}
                    <div className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)} {project.status.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star size={12} />
                    <span>{project.stats.stars || 0}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Code size={12} />
                    <span>{project.stats.commits || 0} commits</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">GitHub Activity</h3>
            <p className="text-gray-300">My development journey in numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <Code className="text-blue-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300 text-sm">Repositories</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <Star className="text-yellow-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-300 text-sm">Stars Earned</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <Github className="text-purple-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Commits</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                <Globe className="text-green-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold">
                Start a Project
              </button>
              <a
                href="#"
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/50 font-semibold"
              >
                <Github size={20} />
                <span>View All on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;