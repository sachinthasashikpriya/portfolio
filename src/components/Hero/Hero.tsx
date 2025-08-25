import { Download, Send } from "lucide-react"; // Import icons
import React, { useEffect, useRef } from "react";
import { Typed } from "react-typed";

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let nameTyped: Typed | null = null;
    let titleTyped: Typed | null = null;

    if (nameRef.current) {
      nameTyped = new Typed(nameRef.current, {
        strings: ["Sachintha"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: false,
      });
    }

    if (titleRef.current) {
      titleTyped = new Typed(titleRef.current, {
        strings: [
          "Turning ideas into scalable applications",
          "Crafting seamless frontend & robust backend",
          "Building modern web experiences",
          "Passionate about clean code & design",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });
    }

    return () => {
      if (nameTyped) nameTyped.destroy();
      if (titleTyped) titleTyped.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        {/* Left column - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white">Hi, I'm</h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent">
              <span ref={nameRef}></span>
            </span>
          </h1>
          <div className="mb-2">
            <span className="text-slate-400 uppercase tracking-wider text-3xl font-medium">
              Full Stack Web Developer
            </span>
          </div>

          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            <span ref={titleRef}></span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1Z08gk7C7NsP0ZhMX0Xy7ronntUd53QSq/view?usp=sharing"
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right column - Circle with image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-2xl border border-gray-700 overflow-hidden">
            <img
              src="Profile-pic-sitting.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
