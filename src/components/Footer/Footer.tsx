import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp, Code2, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/johndoe', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:john.doe@email.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 border border-white/20 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    John Doe
                  </h3>
                  <p className="text-gray-300 text-sm">IT Student & Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Passionate about creating innovative digital solutions and learning cutting-edge technologies. 
                Currently pursuing my IT degree while building real-world experience through projects and internships.
              </p>

              <div className="flex items-center space-x-2 text-gray-300 text-sm mb-6">
                <Coffee size={16} className="text-orange-400" />
                <span>Fueled by coffee and curiosity</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 transition-all duration-300 transform hover:scale-110 hover:bg-white/20 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Mail size={16} className="text-red-400" />
                  </div>
                  <a 
                    href="mailto:john.doe@email.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    john.doe@email.com
                  </a>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium text-sm">Available for opportunities</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Open to internships, freelance projects, and full-time positions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <span>© {currentYear} John Doe. Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>and lots of</span>
                <Coffee size={16} className="text-orange-400" />
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-gray-400 text-xs">
                <span>Built with:</span>
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md">React</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md">TypeScript</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md">Tailwind</span>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110 border border-white/20"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="text-white group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs">
              <div>
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <span>Version 2.0</span>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;