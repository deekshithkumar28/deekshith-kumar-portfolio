import React, { useEffect, useRef, useState } from 'react';
import { Folder, Plus, Code, Star, ArrowRight } from 'lucide-react';

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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing my development journey and upcoming innovations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Glassmorphism Project Placeholder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                {/* Animated Background Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-8 w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-8 w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-300"></div>

                {/* Main Content */}
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-500">
                      <Folder className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                    Projects Coming Soon
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    I'm currently working on exciting projects that will showcase my skills in software development, 
                    web applications, and algorithm implementation. Stay tuned for updates!
                  </p>

                  {/* Feature Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                      <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Web Applications</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Full-stack web development projects using modern technologies</p>
                    </div>

                    <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                      <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Algorithm Solutions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Complex problem-solving with optimized algorithms and data structures</p>
                    </div>

                    <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-gray-700/10 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
                      <Plus className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Innovative Ideas</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Creative solutions to real-world problems using cutting-edge technology</p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                    >
                      Collaborate With Me
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    
                    <button
                      onClick={() => window.open('https://github.com/deekshithkumar28', '_blank')}
                      className="px-8 py-3 border-2 border-blue-600/50 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600/10 dark:hover:bg-blue-600/10 transition-all duration-200"
                    >
                      View GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Projects Teaser */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 italic">
                "The best way to predict the future is to create it." - Building tomorrow's solutions today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;