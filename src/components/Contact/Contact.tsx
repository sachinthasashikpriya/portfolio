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
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Me</h3>
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
              
              {/* Fixed GitHub link - removed outer <a> tag */}
              <div className="flex items-center gap-4 text-blue-200 group p-4 rounded-xl hover:bg-white/10">
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
              </div>
              
              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                className="flex items-center gap-4 text-blue-200 hover:text-white transition-all duration-300 group p-4 rounded-xl hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-gray-300">
                    linkedin.com/in/your-linkedin
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right column for contact form or additional info */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
            <p className="text-slate-300 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you have any questions or want to work together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;