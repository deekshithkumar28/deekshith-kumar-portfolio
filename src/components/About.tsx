import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
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

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indian Institute of Information Technology, Sri City",
      period: "2023 – Present",
      cgpa: "7.29",
      marks: null,
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College Eluru",
      period: "2021 – 2023",
      cgpa: null,
      marks: "853/1000",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Secondary Education",
      institution: "Bhashyam E/M High School",
      period: "Completed 2021",
      cgpa: null,
      marks: "600/600",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover my journey, passion, and aspirations in the world of technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Bio */}
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I am a highly motivated and driven third-year Computer Science and Engineering student at the prestigious Indian Institute of Information Technology, Sri City. With a strong academic foundation reflected in my current CGPA of 9.2, I am passionate about pushing the boundaries of technology.
                </p>
                <p>
                  My technical expertise spans multiple programming languages including Python, Java, and C, complemented by solid knowledge in data structures, algorithms, and software development fundamentals. I thrive on solving complex problems and creating innovative solutions.
                </p>
                <p>
                  My primary focus is on software development engineering roles, where I can leverage my technical skills and creative thinking to build applications that make a meaningful impact. I am constantly learning and staying updated with the latest industry trends and emerging technologies.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {index !== education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        {edu.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.institution}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </span>
                          {edu.cgpa && (
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full font-semibold">
                              CGPA: {edu.cgpa}
                              {/* marks: {edu.marks} */}
                            </span>
                          )}
                               {edu.marks && (
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full font-semibold">
                             
                              marks: {edu.marks}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;