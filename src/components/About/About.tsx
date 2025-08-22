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
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I’m a third-year undergraduate student at the University of
              Moratuwa with a strong passion for full-stack web development.
              With over three years of hands-on experience, I enjoy building
              modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I love transforming complex problems into simple, elegant
              solutions and bringing ideas to life through code. Beyond
              development, I’m always eager to explore new technologies and
              contribute to open-source projects to expand my knowledge and
              skills.
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
