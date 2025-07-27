import React, { useEffect, useRef, useState } from 'react';
import { Laptop, Server, Zap, Code2, Database, Globe } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Development",
      description: "Building robust, scalable applications using modern programming languages and frameworks. Specializing in clean code practices and efficient algorithms.",
      features: ["Desktop Applications", "Algorithm Implementation", "Code Optimization", "Software Architecture"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive, user-friendly web applications with modern technologies. From front-end interfaces to back-end services.",
      features: ["Frontend Development", "Backend Services", "API Integration", "Responsive Design"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Designing and implementing efficient database systems with proper data modeling and optimization techniques.",
      features: ["Database Design", "Query Optimization", "Data Modeling", "Performance Tuning"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Algorithm Development",
      description: "Developing and optimizing algorithms for complex problems. Strong foundation in data structures and computational efficiency.",
      features: ["Problem Solving", "Algorithm Design", "Performance Analysis", "Code Optimization"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building secure, scalable server-side applications and APIs. Focus on performance, security, and maintainability.",
      features: ["API Development", "Server Architecture", "Security Implementation", "Performance Optimization"]
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Technical Consulting",
      description: "Providing technical guidance and solutions for software development challenges. Helping optimize existing systems and processes.",
      features: ["Code Review", "Technical Analysis", "Solution Architecture", "Best Practices"]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized in Software Development Engineering with a focus on creating innovative, efficient solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm passionate about creating software solutions that solve real-world problems. 
                Let's collaborate and bring your ideas to life.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;