import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Find all sections that exist in the DOM
      const visibleSections = sections.filter((section) =>
        document.getElementById(section)
      );

      for (let i = visibleSections.length - 1; i >= 0; i--) {
        const sectionId = visibleSections[i];
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <About scrollToSection={scrollToSection} />

      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
