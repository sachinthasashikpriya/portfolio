// components/EducationSection.tsx
import React from 'react';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  gpa?: string;
  certificate?: string;
}

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      year: '2020 - 2024',
      description: 'Specialized in Software Engineering and Web Technologies. Graduated Magna Cum Laude with a focus on modern web development frameworks.',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Tech Academy',
      year: '2023',
      description: 'Intensive 6-month program covering modern web development stack including React, Node.js, MongoDB, and deployment strategies.',
      certificate: 'Certified Full Stack Developer'
    },
    {
      degree: 'Advanced JavaScript Certification',
      institution: 'CodeCademy Pro',
      year: '2022',
      description: 'Advanced concepts in JavaScript including ES6+, async programming, and modern development practices.',
      certificate: 'JavaScript Expert'
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-2xl p-8 border border-gray-800/50 shadow-2xl hover:bg-black/40 transition-all duration-500 hover:scale-105">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <span className="text-slate-300 font-medium bg-gray-800/60 px-3 py-1 rounded-full text-sm border border-gray-700">{edu.year}</span>
                  </div>
                  <p className="text-slate-200 font-medium mb-3 text-lg">{edu.institution}</p>
                  <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                </div>
                <div className="space-y-3">
                  {edu.gpa && (
                    <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700">
                      <p className="text-slate-400 text-sm">GPA</p>
                      <p className="text-white font-bold text-xl">{edu.gpa}</p>
                    </div>
                  )}
                  {edu.certificate && (
                    <div className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700">
                      <p className="text-slate-400 text-sm">Certificate</p>
                      <p className="text-white font-medium text-sm">{edu.certificate}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;