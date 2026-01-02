
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Briefcase, Building, Database, Smartphone, AlertTriangle, FileText, Shield, Mail, Phone, Settings, Server } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setFormSubmitted(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const portfolioProjects = [
    {
      title: 'Custom BRE Solution',
      description: 'Custom Business Rule Engine solution designed for automated decision-making, risk scoring, and workflow automation',
      icon: <Settings size={24} className="text-brand-gold" />
    },
    {
      title: 'CBS System',
      description: 'Core Banking System implementation with custom integrations, transaction processing, and comprehensive banking operations management',
      icon: <Server size={24} className="text-brand-gold" />
    },
    {
      title: 'Fintech BNPL Platform',
      description: 'End-to-end embedded lending infrastructure with alternate credit scoring and collections automation',
      icon: <Smartphone size={24} className="text-brand-gold" />
    },
    {
      title: 'Early Warning System',
      description: 'AI-powered loan monitoring engine predicting defaults 45 days early with automated recovery workflows',
      icon: <AlertTriangle size={24} className="text-brand-gold" />
    },
    {
      title: 'Regulatory Reporting Automation',
      description: 'Automated CIC, CIBIL, and GST reporting system reducing manual effort by 80% and ensuring compliance',
      icon: <FileText size={24} className="text-brand-gold" />
    },
    {
      title: 'VideoKYC Implementation',
      description: 'Complete VideoKYC solution with liveness detection, document verification, and fraud prevention',
      icon: <Shield size={24} className="text-brand-gold" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-brand-cream to-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center space-x-2 bg-brand-cream px-4 py-2 rounded-full border border-brand-gold/30 mb-6 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Briefcase size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">Our Work & Success Stories</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Solutions That<br />
              <span className="text-brand-gold">Transform Businesses</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-12 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Comprehensive solutions delivered across the BFSI ecosystem. Real-world projects that transformed businesses.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world solutions we've delivered for BFSI clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:border-brand-gold/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/0 to-brand-gold/0 group-hover:from-brand-cream/5 group-hover:to-brand-gold/5 transition-all duration-300 rounded-xl"></div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/0 to-transparent group-hover:from-brand-gold/10 transition-all duration-300 rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-brand-cream to-white rounded-xl shadow-md border border-brand-gold/20 group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand-gold/40 group-hover:bg-gradient-to-br group-hover:from-brand-gold/10 group-hover:to-brand-cream transition-all duration-300">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-brand-cream/30" ref={formRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">
                Let's Build Your Solution
              </h2>
              <p className="text-xl text-gray-600">
                Share your requirements and we'll get back with a tailored approach
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
                <form
                  action="https://formsubmit.co/info@crawfieldanddutton.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/#/portfolio?success=true`} />
                  <input type="hidden" name="_subject" value="Portfolio Inquiry - Custom BFSI Project" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        id="org"
                        name="org"
                        required
                        value={formData.org}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={6}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all resize-none"
                      placeholder="Tell us about your project requirements, current challenges, and what you're looking to build..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg inline-flex items-center justify-center"
                  >
                    <Mail size={20} className="mr-2" />
                    Talk to Our Product Team
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;

