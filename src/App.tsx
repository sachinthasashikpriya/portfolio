// App.tsx
import { useEffect, useState } from "react";
import "./App.css";
import AboutSection from "./components/About/About";
import ContactSection from "./components/Contact/Contact";
import EducationSection from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/Projects/Projects";
import SkillsSection from "./components/Skills/Skills";
import WaterDrop from "./components/WaterDrop/WaterDrop";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = [
      "home",
      "about",
      "education",
      "projects",
      "skills",
      "contact",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Water Drops Background */}
      {Array.from({ length: 100 }, (_, i) => (
        <WaterDrop
          key={i}
          delay={Math.random() * 5}
          x={Math.random() * 100}
          y={Math.random() * 100}
        />
      ))}

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* All Sections */}
      <Hero />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-md border-t border-gray-800/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 mb-4">
            Built with React, Tailwind CSS, and lots of ☕
          </p>
          <p className="text-gray-600 text-sm">
            © 2024 John Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
