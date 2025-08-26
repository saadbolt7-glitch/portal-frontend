import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Droplets, BarChart3, Shield, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-navy-100 dark:from-navy-900 dark:to-navy-800 transition-colors duration-300">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6 leading-tight">
              Advanced Flow
              <span className="block text-transparent bg-gradient-to-r from-navy-600 to-navy-800 dark:from-navy-400 dark:to-navy-200 bg-clip-text">
                Measurement Solutions
              </span>
            </h2>
            <p className="text-xl text-navy-600 dark:text-navy-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Professional portal for monitoring and managing your flow measurement systems with precision and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 dark:from-navy-500 dark:to-navy-600 dark:hover:from-navy-400 dark:hover:to-navy-500 text-white rounded-xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Start Monitoring
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-white/20 dark:bg-navy-800/30 backdrop-blur-sm border border-white/30 dark:border-navy-700/50 text-navy-700 dark:text-navy-200 rounded-xl font-semibold hover:bg-white/30 dark:hover:bg-navy-700/40 transition-all duration-200"
              >
                Access Portal
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 dark:bg-navy-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-navy-700/30 hover:bg-white/20 dark:hover:bg-navy-700/30 transition-all duration-300">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-3 rounded-xl w-fit mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">Real-time Analytics</h3>
              <p className="text-navy-600 dark:text-navy-300">Monitor your flow systems with live data and comprehensive analytics dashboard.</p>
            </div>

            <div className="bg-white/10 dark:bg-navy-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-navy-700/30 hover:bg-white/20 dark:hover:bg-navy-700/30 transition-all duration-300">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-3 rounded-xl w-fit mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">Secure Platform</h3>
              <p className="text-navy-600 dark:text-navy-300">Enterprise-grade security ensuring your data and systems are protected.</p>
            </div>

            <div className="bg-white/10 dark:bg-navy-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-navy-700/30 hover:bg-white/20 dark:hover:bg-navy-700/30 transition-all duration-300">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-3 rounded-xl w-fit mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-3">High Performance</h3>
              <p className="text-navy-600 dark:text-navy-300">Optimized for speed and reliability in critical measurement applications.</p>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white/10 dark:bg-navy-800/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 dark:border-navy-700/30">
            <h3 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">About Our Platform</h3>
            <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed max-w-3xl mx-auto">
              Saher Flow Solutions Portal provides comprehensive monitoring and management capabilities for advanced flow measurement systems. 
              Our platform combines cutting-edge technology with intuitive design to deliver precise, reliable, and actionable insights 
              for your critical operations.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-navy-500 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;