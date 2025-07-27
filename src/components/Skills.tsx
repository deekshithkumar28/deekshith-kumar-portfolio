import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Cpu, Terminal, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars progressively
          setTimeout(() => {
            setAnimatedSkills(new Set(['programming']));
          }, 200);
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, 'web']));
          }, 400);
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, 'dsa']));
          }, 600);
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, 'database']));
          }, 800);
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, 'tools']));
          }, 1000);
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, 'os']));
          }, 1200);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'TypeScript', level: 50 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'React', level: 50 },
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'dsa',
      title: 'Data Structures & Algorithms',
      icon: <Zap className="w-6 h-6" />,
      skills: [
        { name: 'Arrays & Linked Lists', level: 90 },
        { name: 'Stacks & Queues', level: 85 },
        { name: 'Trees & Graphs', level: 80 },
        { name: 'Sorting & Searching', level: 85 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 80 },
        { name: 'DBMS Concepts', level: 85 },
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Command Line', level: 80 },
        { name: 'Git', level: 75 },
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'os',
      title: 'Operating Systems',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: 'OS Fundamentals', level: 75 },
        { name: 'Linux', level: 70 },
        { name: 'Windows', level: 85 },
      ],
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className={`flex items-center mb-6 text-white bg-gradient-to-r ${category.color} rounded-lg p-3`}>
                  {category.icon}
                  <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out ${
                            animatedSkills.has(category.id) ? '' : 'w-0'
                          }`}
                          style={{
                            width: animatedSkills.has(category.id) ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;