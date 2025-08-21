import {
  Code,
  Coffee,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import React from "react";

interface AboutProps {
  scrollToSection: (sectionId: string) => void;
}

const About: React.FC<AboutProps> = ({ scrollToSection }) => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-red-500" },
  ];

  const stats = [
    { number: "3+", label: "Years Learning", icon: "📚" },
    { number: "10+", label: "Projects", icon: "💻" },
    { number: "5+", label: "Technologies", icon: "🚀" },
    { number: "100%", label: "Dedication", icon: "⚡" },
  ];

  return (
    <section
      id="about"
      className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                <span>Hello, I'm</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                  Sachintha Sashikpriya
                </span>

                <div className="flex items-center mt-2">
                  <Sparkles
                    className="text-yellow-500 mr-2 animate-spin"
                    size={24}
                  />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
                    IT Student & Developer
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-blue-600 font-semibold">
                  3rd-year Undergraduate
                </span>{" "}
                at the{" "}
                <span className="text-blue-600 font-semibold">
                  University of Moratuwa
                </span>{" "}
                with a love for creating innovative digital solutions. Currently
                exploring the exciting world of
                <span className="text-purple-600 font-semibold">
                  {" "}
                  full-stack development
                </span>{" "}
                and
                <span className="text-indigo-600 font-semibold">
                  {" "}
                  modern web technologies
                </span>
                .
              </p>

              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span>Moratuwa, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Coffee size={16} className="text-orange-500" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                <Download size={20} className="group-hover:animate-bounce" />
                <span className="font-semibold">Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/50 flex items-center justify-center space-x-2"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                <span className="font-semibold">Let's Talk</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">Connect with me:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-600 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Image/Visual Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full animate-pulse shadow-2xl"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="/Profile pic sitting.jpg" // 👉 replace with your image path
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <Code className="text-white" size={24} />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white text-xl">💡</span>
                </div>

                <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce delay-1000">
                  <span className="text-white text-lg">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
