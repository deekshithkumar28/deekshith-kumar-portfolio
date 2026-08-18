import React, { useEffect, useRef, useState } from 'react';
import {
  Brain,
  Box,
  Utensils,
  Code,
  Database,
  Cpu,
  Server,
} from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      category: 'AI / COMPUTER VISION',
      title: 'AI-Driven Archaeological Site Mapping',
      icon: <Brain className="w-7 h-7" />,
      description:
        'An AI-based archaeological object detection system using YOLO models, FastAPI REST APIs, and a React dashboard for image upload and prediction visualization.',
      technologies: [
        { name: 'Python', icon: <Code className="w-3.5 h-3.5" /> },
        { name: 'YOLOv8', icon: <Brain className="w-3.5 h-3.5" /> },
        { name: 'YOLOv11', icon: <Brain className="w-3.5 h-3.5" /> },
        { name: 'FastAPI', icon: <Server className="w-3.5 h-3.5" /> },
        { name: 'React', icon: <Code className="w-3.5 h-3.5" /> },
      ],
      highlights: [
        'Achieved mAP@50 scores of 0.71 with YOLOv8 and 0.58 with YOLOv11',
        'Developed FastAPI REST APIs for image upload and model prediction',
        'Built a React dashboard for prediction visualization and evaluation',
      ],
      color: 'from-blue-500 to-cyan-500',
      glow: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 2,
      category: '3D COMPUTER VISION',
      title:
        'Evaluation of Pretrained 3D Object Detection on SAM3D-Reconstructed Scenes',
      icon: <Box className="w-7 h-7" />,
      description:
        'A 3D computer vision project evaluating pretrained object detection models on SAM3D-reconstructed point cloud scenes using manual annotation and automated dataset preparation.',
      technologies: [
        { name: 'Python', icon: <Code className="w-3.5 h-3.5" /> },
        { name: 'PyTorch', icon: <Cpu className="w-3.5 h-3.5" /> },
        { name: 'Linux', icon: <Code className="w-3.5 h-3.5" /> },
        { name: 'CUDA', icon: <Cpu className="w-3.5 h-3.5" /> },
        { name: 'CloudCompare', icon: <Box className="w-3.5 h-3.5" /> },
      ],
      highlights: [
        'Generated manual annotations for SAM3D-reconstructed 3D point cloud scenes',
        'Developed Python scripts for bounding-box generation and annotation preprocessing',
        'Evaluated pretrained 3D object detection models using PyTorch in CUDA-enabled environments',
      ],
      color: 'from-purple-500 to-pink-500',
      glow: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 3,
      category: 'FULL-STACK DEVELOPMENT',
      title: 'RestoConnect',
      icon: <Utensils className="w-7 h-7" />,
      description:
        'A full-stack restaurant management platform supporting Admin, Staff, Reservation, Menu, and Customer workflows with secure RESTful APIs and MongoDB.',
      technologies: [
        { name: 'React.js', icon: <Code className="w-3.5 h-3.5" /> },
        { name: 'Node.js', icon: <Server className="w-3.5 h-3.5" /> },
        { name: 'Express.js', icon: <Server className="w-3.5 h-3.5" /> },
        { name: 'MongoDB', icon: <Database className="w-3.5 h-3.5" /> },
      ],
      highlights: [
        'Developed Admin, Staff, Reservation, Menu, and Customer workflows',
        'Implemented JWT authentication and role-based authorization',
        'Designed RESTful APIs with middleware validation and optimized MongoDB schemas',
      ],
      color: 'from-orange-500 to-red-500',
      glow: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
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
              Projects
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of projects showcasing my experience in software
              development, artificial intelligence, and computer vision.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group h-full"
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.glow} rounded-3xl blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500`}
                ></div>

                {/* Card */}
                <div className="relative h-full flex flex-col bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 rounded-3xl p-7 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden">
                  
                  {/* Decorative Elements */}
                  <div
                    className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r ${project.glow} rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500`}
                  ></div>

                  <div className="absolute top-5 right-5 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>

                  {/* Category */}
                  <div className="relative z-10 flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}
                    >
                      {project.icon}
                    </div>

                    <span
                      className={`text-xs font-bold tracking-wider bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="relative z-10 text-2xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 h-px bg-gray-200/50 dark:bg-gray-700/50 mb-6"></div>

                  {/* Technologies */}
                  <div className="relative z-10 mb-7">
                    <h4 className="text-xs font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-3">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/70 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 text-xs font-medium text-gray-700 dark:text-gray-200"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="relative z-10 mt-auto">
                    <h4 className="text-xs font-bold tracking-wider text-gray-500 dark:text-gray-400 uppercase mb-3">
                      Highlights
                    </h4>

                    <div className="space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}
                          ></div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 dark:text-gray-400 italic">
              "The best way to predict the future is to create it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
