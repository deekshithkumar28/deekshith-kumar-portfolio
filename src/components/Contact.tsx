import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "deekshithkumar.m23@iiits.in",
      href:"https://mail.google.com/mail/?view=cm&fs=1&to=deekshithkumar.m23@iiits.in&su=Let's%20Connect&body=Hi%20there!",
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/deekshith-kumar-mandapati-922bb2376",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/deekshithkumar28",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:bg-gray-50 dark:hover:bg-gray-800/50"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's connect and explore opportunities to collaborate on exciting projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                    <Send className="w-6 h-6 mr-3 text-blue-600" />
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    I'm always excited to discuss new opportunities, collaborate on projects, 
                    or simply connect with fellow developers and tech enthusiasts. Feel free to reach out!
                  </p>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>Eluru, Andhra Pradesh, India</span>
                  </div>

                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`flex items-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 ${method.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {method.icon}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {method.title}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glassmorphism Contact Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
                  {/* Animated Background Elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute top-8 right-6 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                      Ready to Collaborate?
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Software Development</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Looking for opportunities in software development roles where I can contribute 
                          to building innovative solutions.
                        </p>
                      </div>

                      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Open Source</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Interested in contributing to open source projects and collaborating 
                          with the developer community.
                        </p>
                      </div>

                      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Learning Together</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Always eager to learn from experienced developers and share knowledge 
                          with fellow students and professionals.
                        </p>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=deekshithkumar.m23@iiits.in&su=Let's%20Connect&body=Hi%20there!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                        <Mail className="w-4 h-4 mr-2" />
                          Send Message
                      </a>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;