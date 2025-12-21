// components/EducationSection.tsx
import React from "react";

interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  gpa?: string;
  certificate?: string;
  logo?: string; // New field for institute logo
}

const EducationSection: React.FC = () => {
  const education: Education[] = [
    {
      degree: "Bachelor of Information Technology and Management",
      institution: "University of Moratuwa",
      year: "2023 - current",
      description: "",
      gpa: "3.8/4.0",
      logo: "/University_of_Moratuwa_logo.png",
    },
    {
      degree: "Secondary Education",
      institution: "Ibbaganuwa Central College",
      year: "2013-2021",
      description:
        "GCE O/L 2018 - 8A's B\nGCE A/L 2021 - 3B's (Physical Science Stream)",
      certificate: "Certified Full Stack Developer",
      logo: "/ICC logo.png",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-black/30 rounded-2xl p-8 border border-gray-800/50 shadow-2xl hover:bg-black/40 transition-all duration-500 hover:scale-105"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <span className="text-slate-300 font-medium bg-gray-800/60 px-3 py-1 rounded-full text-sm border border-gray-700">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-slate-200 font-medium mb-3 text-lg">
                    {edu.institution}
                  </p>
                  <div className="text-slate-300 leading-relaxed">
                    {edu.description.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
                {/* Logo Column */}
                <div className="flex items-center justify-center">
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-white/10 rounded-xl border border-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
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
