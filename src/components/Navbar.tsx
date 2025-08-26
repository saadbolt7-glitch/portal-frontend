import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-navy-900 to-navy-700 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-500" />
            </div>
            <span className="text-xl font-bold text-navy-900">FlowTech Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">Features</a>
            <a href="#about" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">Contact</a>
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-navy-900 hover:text-navy-700 transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-yellow-500 text-navy-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-navy-900 transition-colors font-medium">Contact</a>
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link 
                  to="/login" 
                  className="text-navy-900 hover:text-navy-700 transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-yellow-500 text-navy-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;