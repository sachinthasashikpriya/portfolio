import {
  Award,
  BookOpen,
  Calendar,
  GraduationCap,
  MapPin,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import React from "react";

interface CourseWork {
  name: string;
  grade: string;
  icon: string;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: React.ElementType;
  color: string;
}

interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  gpa: string;
  status: string;
  description: string;
  coursework: CourseWork[];
  achievements: Achievement[];
}

const Education: React.FC = () => {
  const education: Education = {
    degree: "Bachelor of Information Technology",
    institution: "University of Technology",
    duration: "2022 - 2026 (Expected)",
    location: "City, Country",
    gpa: "3.7/4.0",
    status: "Currently in 3rd Year",
    description:
      "Specializing in software development, web technologies, and database management with a focus on modern programming practices and emerging technologies.",
    coursework: [
      { name: "Data Structures & Algorithms", grade: "A", icon: "🧠" },
      { name: "Database Management Systems", grade: "A-", icon: "🗄️" },
      { name: "Web Development", grade: "A+", icon: "🌐" },
      { name: "Software Engineering", grade: "A", icon: "⚙️" },
      { name: "Computer Networks", grade: "A-", icon: "🔗" },
      { name: "Operating Systems", grade: "B+", icon: "💻" },
      { name: "Object-Oriented Programming", grade: "A", icon: "📝" },
      { name: "Human-Computer Interaction", grade: "A-", icon: "👥" },
    ],
    achievements: [
      {
        title: "Dean's List",
        description: "Recognized for academic excellence with GPA above 3.5",
        date: "2023-2024",
        icon: Trophy,
        color: "text-yellow-600",
      },
      {
        title: "Best Web Development Project",
        description: "Awarded for creating an innovative e-commerce platform",
        date: "2024",
        icon: Award,
        color: "text-blue-600",
      },
      {
        title: "Programming Competition - 2nd Place",
        description: "Placed second in inter-university coding competition",
        date: "2023",
        icon: Star,
        color: "text-purple-600",
      },
      {
        title: "Tech Society Vice President",
        description: "Elected as VP of university technology society",
        date: "2024-Present",
        icon: Users,
        color: "text-green-600",
      },
    ],
  };

  const getGradeColor = (grade: string): string => {
    if (grade.includes("A"))
      return "bg-green-100 text-green-800 border-green-200";
    if (grade.includes("B")) return "bg-blue-100 text-blue-800 border-blue-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const skills = [
    { name: "Critical Thinking", level: 90 },
    { name: "Research & Analysis", level: 85 },
    { name: "Academic Writing", level: 80 },
    { name: "Presentation Skills", level: 85 },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-lg">
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Building a strong foundation in Information Technology and Computer
            Science
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-2xl border border-blue-100/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8 text-white">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-blue-100 text-lg font-medium">
                      {education.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-blue-100">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm mb-2">
                    <div className="text-2xl font-bold">
                      GPA: {education.gpa}
                    </div>
                  </div>
                  <div className="bg-green-500/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                    <div className="text-sm font-medium">
                      {education.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {education.description}
              </p>

              {/* Academic Skills */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <BookOpen className="text-blue-600" size={20} />
                    <span>Academic Skills</span>
                  </h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-600 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        3rd
                      </div>
                      <div className="text-sm text-gray-600">Current Year</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        8
                      </div>
                      <div className="text-sm text-gray-600">Semesters</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">
                        90+
                      </div>
                      <div className="text-sm text-gray-600">Credit Hours</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        4+
                      </div>
                      <div className="text-sm text-gray-600">Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework and Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Relevant Coursework */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <BookOpen className="text-blue-600" size={24} />
              <span>Relevant Coursework</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.coursework.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-4 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-semibold border ${getGradeColor(
                        course.grade
                      )}`}
                    >
                      {course.grade}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                    {course.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Award className="text-blue-600" size={24} />
              <span>Achievements</span>
            </h3>
            <div className="space-y-4">
              {education.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-purple-50/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <achievement.icon className={achievement.color} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-1">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-gray-500">
                      {achievement.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Continuing to Learn & Grow
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              My academic journey has provided me with a strong foundation, and
              I'm excited to apply this knowledge in real-world projects and
              continue learning new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold">
                View My Projects
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50/50 font-semibold">
                Download Transcript
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
