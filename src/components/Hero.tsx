
import { ArrowRight, BarChart2, Shield, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-brand-cream to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-brand-cream px-3 py-1 rounded-full border border-brand-gold/30">
              <span className="bg-brand-gold w-2 h-2 rounded-full"></span>
              <span className="text-sm font-medium text-brand-navy">Built in India, For Indians</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-brand-navy">
              AI-Powered <span className="text-brand-gold">Financial Intelligence</span> for the Modern Era
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Leverage AI-driven bank statement analysis to assess financial behavior, spending patterns, 
              and creditworthiness through cutting-edge identity intelligence solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup" className="btn-primary px-8 py-3 rounded-md font-medium flex items-center justify-center">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
              <a href="#solutions" className="btn-outline px-8 py-3 rounded-md font-medium flex items-center justify-center">
                Explore Solutions
              </a>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-brand-gold" />
                <span className="text-sm font-medium">Secure Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart2 size={20} className="text-brand-gold" />
                <span className="text-sm font-medium">Real-time Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap size={20} className="text-brand-gold" />
                <span className="text-sm font-medium">Fast Processing</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Video */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'} animation-delay-300`}>
            <div className="relative rounded-2xl overflow-hidden shadow-gold-lg border border-brand-gold/20">
              <div className="aspect-w-16 aspect-h-9 bg-brand-navy/5 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Financial intelligence dashboard" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 glassmorphism rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Banks & NBFCs</p>
                    <p className="text-lg font-semibold text-brand-navy">150+</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-xs text-gray-500">Accuracy</p>
                    <p className="text-lg font-semibold text-brand-navy">99.2%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Processing Time</p>
                    <p className="text-lg font-semibold text-brand-navy">&lt;5s</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-3 animate-pulse-soft">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-800">Live Processing</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-pulse-soft">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span className="text-sm font-medium text-gray-800">AA Framework</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
