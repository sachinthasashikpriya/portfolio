// components/ContactSection.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to chat about
              technology, feel free to reach out!
            </p>
            <div className="space-y-4">
              {/* <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-6 h-6" />
                <span>john.developer@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-6 h-6" />
                <span>Based in San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <Smartphone className="w-6 h-6" />
                <span>Available for Remote Work</span>
              </div> */}
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Connect With Me
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:sachinthasashikpriya8968@gmail.com"
                className="flex items-center gap-4 text-blue-200 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-white/10"
              >
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-300">
                    sachinthasashikpriya8698@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-blue-200 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-white/10"
              >
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">GitHub</div>
                  <a
                    href="https://github.com/sachinthasashikpriya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    github.com/sachinthasashikpriya
                  </a>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-blue-200 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-white/10"
              >
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/sachintha-sashikpriya-8827a6267/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    github.com/sachinthasashikpriya
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl inline-block">
            <p className="text-blue-200 mb-2">Currently available for</p>
            <div className="flex gap-4 text-white font-semibold">
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                Projects
              </span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                Internships
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                Freelancing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
