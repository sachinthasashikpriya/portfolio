import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
  color: string;
  handle: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@email.com',
      href: 'mailto:john.doe@email.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'City, Country',
      href: '#',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/johndoe',
      icon: Github,
      color: 'hover:text-gray-900 hover:bg-gray-100',
      handle: '@johndoe'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/johndoe',
      icon: Linkedin,
      color: 'hover:text-blue-600 hover:bg-blue-50',
      handle: '/in/johndoe'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/johndoe',
      icon: Twitter,
      color: 'hover:text-blue-400 hover:bg-blue-50',
      handle: '@johndoe'
    }
  ];

  const availabilityStatus = {
    status: 'available',
    message: 'Available for new opportunities',
    responseTime: 'Usually responds within 24 hours'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const quickMessages = [
    { text: "I'd like to discuss a project", icon: '💼' },
    { text: "Let's schedule a call", icon: '📞' },
    { text: "I have a question about your work", icon: '❓' },
    { text: "Interested in collaboration", icon: '🤝' }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="text-blue-600" size={24} />
            <span className="text-blue-600 font-semibold text-lg">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-semibold">{availabilityStatus.message}</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700 text-sm">
                <Clock size={16} />
                <span>{availabilityStatus.responseTime}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <info.icon className={info.color} size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{info.label}</div>
                    <div className="text-gray-600 text-sm">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-md transition-all duration-300 transform hover:scale-105 group ${social.color}`}
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{social.platform}</div>
                      <div className="text-gray-600 text-sm">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
                <p className="text-blue-100">I'll get back to you as soon as possible</p>
              </div>

              <div className="p-8">
                {/* Quick Message Options */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick options:</h4>
                  <div className="flex flex-wrap gap-2">
                    {quickMessages.map((quick, index) => (
                      <button
                        key={index}
                        onClick={() => setFormData(prev => ({ ...prev, subject: quick.text }))}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-xl text-sm transition-all duration-300 transform hover:scale-105"
                      >
                        <span>{quick.icon}</span>
                        <span>{quick.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Project Discussion"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                      className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Me Directly</h3>
            <p className="text-gray-600 text-sm mb-4">For quick questions or formal inquiries</p>
            <a
              href="mailto:john.doe@email.com"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>john.doe@email.com</span>
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Me</h3>
            <p className="text-gray-600 text-sm mb-4">Available Mon-Fri, 9 AM - 6 PM</p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
            >
              <span>+1 (555) 123-4567</span>
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
            <p className="text-gray-600 text-sm mb-4">Connect with me on social platforms</p>
            <div className="flex justify-center space-x-3">
              {socialLinks.slice(0, 2).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center text-white transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🚀 How quickly do you respond?</h4>
              <p className="text-gray-600 text-sm">I typically respond to all messages within 24 hours, often much sooner during business hours.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">💼 What types of projects do you work on?</h4>
              <p className="text-gray-600 text-sm">I work on web applications, mobile apps, APIs, and full-stack development projects of all sizes.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">💰 Do you offer free consultations?</h4>
              <p className="text-gray-600 text-sm">Yes! I offer a free 30-minute consultation to discuss your project requirements and how I can help.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🌍 Do you work with international clients?</h4>
              <p className="text-gray-600 text-sm">Absolutely! I work with clients worldwide and am comfortable with different time zones and remote collaboration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;