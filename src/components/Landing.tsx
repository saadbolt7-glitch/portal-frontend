import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Droplets, BarChart3, Shield, Zap, ArrowRight, CheckCircle, Play, Star, Users, TrendingUp, Award } from 'lucide-react';

const Landing: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const heroImages = [
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-700/70 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-700/70 z-10" />
              <img
                src={image}
                alt="Saher Flow Solutions"
                className="w-full h-full object-cover object-center"
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center text-white">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                  <Star size={16} />
                  Trusted by Industry Leaders
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Revolutionary
                  <span className="block text-yellow-400 mt-2">Flow Measurement</span>
                  <span className="block mt-2">Portal</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Professional monitoring platform for advanced multiphase flow measurement systems. 
                  Access real-time data, analytics, and comprehensive system management tools.
                </p>
              </div>

              {/* Key Features Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {['Real-time Analytics', 'Advanced Security', 'Cloud Connectivity', 'Expert Support'].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-3 rounded-full text-sm font-medium"
                  >
                    <CheckCircle size={16} className="text-yellow-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-3 bg-yellow-500 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Start Monitoring
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 backdrop-blur-sm"
                >
                  Access Portal
                  <Play className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.8%</div>
                  <div className="text-sm text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">±2-5%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-500 w-8' : 'bg-white/50 hover:bg-white/70 w-3'}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-6">
              Professional Monitoring Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools for managing your flow measurement systems with precision and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white dark:bg-navy-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 text-center">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Advanced dashboards with live data visualization and comprehensive reporting tools.</p>
            </div>

            <div className="group bg-white dark:bg-navy-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 text-center">Enterprise Security</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Bank-level security protocols ensuring your data and systems remain protected.</p>
            </div>

            <div className="group bg-white dark:bg-navy-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 text-center">Flow Precision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Industry-leading accuracy in multiphase flow measurement and monitoring.</p>
            </div>

            <div className="group bg-white dark:bg-navy-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 dark:from-navy-400 dark:to-navy-500 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 text-center">High Performance</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Optimized for speed and reliability in mission-critical applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white dark:bg-navy-900">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Award size={16} />
              Industry Trust
            </div>
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-6">
              Trusted by Leading Energy Companies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join professionals worldwide who rely on our advanced flow measurement platform 
              for their most critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-8 border border-gray-200 dark:border-navy-600">
              <Users className="w-12 h-12 text-navy-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Users</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-8 border border-gray-200 dark:border-navy-600">
              <TrendingUp className="w-12 h-12 text-navy-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">99.9%</h3>
              <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-navy-800 dark:to-navy-700 rounded-2xl p-8 border border-gray-200 dark:border-navy-600">
              <Award className="w-12 h-12 text-navy-600 dark:text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">ISO</h3>
              <p className="text-gray-600 dark:text-gray-300">Certified Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join industry professionals who trust our platform for their critical flow measurement needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-3 border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-900 hover:text-white transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;