import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mandapati Deekshith Kumar
            </h3>
            <p className="text-gray-400">
              Computer Science Engineering Student • Software Developer
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Built with 
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              and 
              <Code className="w-4 h-4 mx-2 text-blue-500" />
              by Deekshith Kumar © {new Date().getFullYear()}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Crafted with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;