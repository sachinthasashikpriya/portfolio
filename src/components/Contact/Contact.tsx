// components/ContactSection.tsx
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import React, { useRef, useState } from "react";

// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_eherg1h";
const TEMPLATE_ID = "template_mxh0f5p";
const PUBLIC_KEY = "TYLRY0AdW5wqPPHEL";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "", // Changed from "name" to match input field
    user_email: "", // Changed from "email" to match input field
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    if (!formRef.current) return;

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        // Clear the form
        setFormData({ user_name: "", user_email: "", message: "" }); // Updated to match state keys
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-gray-200 mb-2 text-sm"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name} // Updated to match state key
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-gray-200 mb-2 text-sm"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email} // Updated to match state key
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-200 mb-2 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              {submitStatus.type && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:sachinthauom@gmail.com"
            className="backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 flex items-center gap-4"
          >
            <div className="bg-blue-500/20 p-3 rounded-full">
              <Mail className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-medium">Email</h4>
              <p className="text-sm text-gray-300">
                sachinthauom@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/sachinthasashikpriya"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 flex items-center gap-4"
          >
            <div className="bg-purple-500/20 p-3 rounded-full">
              <Github className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h4 className="text-white font-medium">GitHub</h4>
              
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sachintha-sashikpriya-8827a6267/"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 flex items-center gap-4"
          >
            <div className="bg-blue-600/20 p-3 rounded-full">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-medium">LinkedIn</h4>
              
            </div>
          </a>
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
