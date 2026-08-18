import React, { useEffect, useRef, useState } from 'react';
import {
  Server,
  Zap,
  Code2,
  Database,
  Globe,
  Brain,
  Briefcase,
} from 'lucide-react';

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
      { threshold: 0.05 }
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
      description:
        "Building reliable and efficient software solutions using modern programming languages, strong problem-solving skills, and software development practices.",
      features: [
        "Java & Python Development",
        "Object-Oriented Programming",
        "Problem Solving",
        "Code Optimization",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Developing responsive and user-friendly web applications using modern frontend and backend technologies.",
      features: [
        "React.js Development",
        "Responsive Interfaces",
        "Frontend Integration",
        "Full-Stack Applications",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Building secure and scalable backend services and RESTful APIs with a focus on maintainability, performance, and authentication.",
      features: [
        "Node.js & Express.js",
        "REST API Development",
        "JWT Authentication",
        "Backend Integration",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Development",
      description:
        "Working with database systems to design structured data models, write efficient queries, and build reliable data-driven applications.",
      features: [
        "MongoDB",
        "SQL",
        "Database Design",
        "DBMS Concepts",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Algorithm & DSA Solutions",
      description:
        "Applying data structures and algorithms to solve computational problems efficiently with a focus on optimization and problem solving.",
      features: [
        "Data Structures",
        "Algorithm Design",
        "Problem Solving",
        "Performance Analysis",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Computer Vision",
      description:
        "Exploring AI-driven computer vision solutions including object detection, image analysis, and 3D scene understanding.",
      features: [
        "Object Detection",
        "Computer Vision",
        "3D Scene Understanding",
        "Model Evaluation",
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services & Expertise
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Focused on software development, full-stack engineering, and
              AI-driven computer vision solutions.
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Experience
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Practical experience gained through industry-oriented work.
              </p>
            </div>

            <div
              className={`max-w-5xl mx-auto ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              } transition-all duration-700`}
            >
              <div className="group relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Experience Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-5 mb-7">
                    <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Infosys Springboard Virtual Internship 6.0
                      </h4>

                      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                        AI / Machine Learning
                      </p>
                    </div>
                  </div>

                  {/* Experience Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-7">
                    Worked on an AI-driven archaeological site mapping project,
                    focusing on object detection, model training, evaluation,
                    backend API development, and prediction visualization.
                  </p>

                  {/* Experience Highlights */}
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Trained YOLOv8 and YOLOv11 models on archaeological
                        datasets.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Achieved mAP@50 scores of 0.71 and 0.58 respectively.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Developed FastAPI REST APIs for image upload and model
                        prediction.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Integrated predictions with a React dashboard for
                        visualization and analysis.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 md:col-span-2">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        Performed preprocessing, annotation, and evaluation
                        using Precision, Recall, F1-score, and mAP.
                      </p>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {[
                        'Python',
                        'YOLOv8',
                        'YOLOv11',
                        'FastAPI',
                        'React',
                        'Computer Vision',
                      ].map((technology) => (
                        <span
                          key={technology}
                          className="px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-700/50 border border-gray-200/60 dark:border-gray-600/50 text-xs font-medium text-gray-700 dark:text-gray-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h3>

              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm passionate about creating software solutions that solve
                real-world problems. Let's collaborate and bring your ideas to
                life.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
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
