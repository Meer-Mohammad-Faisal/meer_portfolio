import { Heart, Code } from 'lucide-react';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className={`flex items-center gap-2 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <span>Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and</span>
            <Code size={16} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            <span>by Meer Mohammad Faisal</span>
          </div>

          <div
            className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>

        <div className="mt-4 text-center">
          <p
            className={`text-xs ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            Designed & Developed with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
