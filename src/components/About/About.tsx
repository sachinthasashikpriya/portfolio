// components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-4 pt-20"
  >
    <div className="container mx-auto max-w-4xl">
      <div className="backdrop-blur-md bg-black/30 rounded-3xl p-8 md:p-12 border border-gray-800/50 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-gap-8 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
            I’m a third-year undergraduate at the University of Moratuwa with a strong focus on full-stack web development and building scalable, real-world software solutions. With over three years of hands-on development experience, I specialize in turning complex requirements into clean, efficient, and user-centered applications.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
            My work spans both frontend and backend development, where I enjoy designing intuitive interfaces while also engineering robust server-side systems, APIs, and database structures. I’m passionate about writing maintainable, well-structured code and creating systems that are not only functional but also performant and reliable.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed text-justify">
            Beyond academics, I actively explore modern technologies and best practices, continuously improving my skills through personal projects, system design, and open-source contributions. I thrive on solving challenging problems, learning new tools, and building solutions that make a meaningful impact.
            </p>
          </div>
          {/* Stats Section */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-all duration-300">
              <p className="text-3xl font-bold text-white mb-1">3+</p>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>
            <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-all duration-300">
              <p className="text-3xl font-bold text-white mb-1">7+</p>
              <p className="text-slate-400 text-sm">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-all duration-300">
              <p className="text-3xl font-bold text-white mb-1">Full Stack</p>
              <p className="text-slate-400 text-sm">Developer</p>
            </div>
            <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700 hover:bg-gray-700/40 transition-all duration-300">
              <p className="text-3xl font-bold text-white mb-1">Open Source</p>
              <p className="text-slate-400 text-sm">Contributor</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
