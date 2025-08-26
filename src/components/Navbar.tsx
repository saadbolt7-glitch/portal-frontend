import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Only show navbar on landing page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <nav className="fixed left-0 right-0 z-40 transition-all duration-300 top-0 bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - enlarged for light mode */}
          <Link to="/">
            <img
              src={darkMode ? "https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg" : "https://res.cloudinary.com/drnak5yb2/image/upload/v1755589239/output-onlinepngtools_fnkcov.png"}
              alt="Saher Flow"
              className={`w-auto transition-all duration-300 ${darkMode ? 'h-12' : 'h-28'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/20 dark:bg-navy-800/50 backdrop-blur-sm border border-white/30 dark:border-navy-700/50 hover:bg-white/30 dark:hover:bg-navy-700/50 transition-all duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-navy-700" />
              )}
            </button>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-navy-600 hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy-900 dark:text-white p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-navy-200 dark:border-navy-700 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-navy-700" />
                    Dark Mode
                  </>
                )}
              </button>
              <Link 
                to="/login" 
                className="text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-navy-600 hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;