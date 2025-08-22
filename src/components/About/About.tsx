// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">John</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">Full Stack Web Developer</p>
        <div className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white shadow-2xl border border-gray-700">
          JD
        </div>
      </div>
      
      <div className="backdrop-blur-md bg-black/30 rounded-3xl p-8 md:p-12 border border-gray-800/50 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack web developer with 3+ years of experience creating modern, 
              responsive web applications. I specialize in React, Node.js, and modern JavaScript frameworks.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I love turning complex problems into simple, beautiful designs and bringing ideas to life through code. 
              When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span>3+ Years Experience</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span>50+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span>Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span>Open Source Contributor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;