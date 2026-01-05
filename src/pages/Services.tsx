
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Settings, Shield, Database, Code, BarChart3, AlertTriangle, Zap, FileText, CreditCard, Users, Building, Smartphone, CheckCircle, Mail, Phone, Briefcase, TrendingUp, Lock, Activity, Target, Brain, Link2, MessageSquare, BookOpen, Globe, Umbrella, PieChart, Wallet, TrendingDown, Heart, Home, LineChart, Calculator } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const serviceModules = [
    {
      category: 'Core Systems & Engines',
      icon: <Settings size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'Business Rule Engines (BREs)',
          description: 'Custom rule engines for loan approval workflows, risk scoring, pricing models, and automated decision-making systems',
          icon: <Brain size={24} className="text-brand-gold" />
        },
        {
          title: 'Early Warning Signal Engines',
          description: 'AI-powered systems that detect borrower distress signals 30-60 days before default, enabling proactive interventions',
          icon: <AlertTriangle size={24} className="text-brand-gold" />
        },
        {
          title: 'Collections Automation Workflows',
          description: 'Intelligent collection strategies with omnichannel communication, payment reminders, and recovery optimization',
          icon: <MessageSquare size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'KYC & Identity Verification',
      icon: <Shield size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'eKYC / VideoKYC Systems',
          description: 'End-to-end KYC solutions with document verification, biometric authentication, and liveness detection',
          icon: <Users size={24} className="text-brand-gold" />
        },
        {
          title: 'Identity Intelligence Platforms',
          description: 'Multi-source identity verification combining PAN, Aadhaar, bank statements, and behavioral signals',
          icon: <Database size={24} className="text-brand-gold" />
        },
        {
          title: 'Alternate Data Verification Platform',
          description: 'Comprehensive verification using employment data, utility bills, and other alternative data sources for enhanced identity validation',
          icon: <FileText size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'Integration & APIs',
      icon: <Link2 size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'AA (Account Aggregator) Integrations',
          description: 'Seamless integration with RBI-AA framework for secure, consent-based financial data aggregation',
          icon: <Lock size={24} className="text-brand-gold" />
        },
        {
          title: 'APIs for Alternate Data Credit Models',
          description: 'Custom APIs for bank statement analysis, GST data processing, and alternative credit scoring models',
          icon: <Code size={24} className="text-brand-gold" />
        },
        {
          title: 'Regulatory API Integrations',
          description: 'Seamless integration with regulatory APIs including CKYC (Central KYC), EKYC (Electronic KYC), and other compliance frameworks for automated verification and reporting',
          icon: <Shield size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: <BarChart3 size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'Risk & Analytical Dashboards',
          description: 'Real-time risk monitoring dashboards with portfolio health metrics, stress indicators, and predictive analytics',
          icon: <TrendingUp size={24} className="text-brand-gold" />
        },
        {
          title: 'Reporting Engines',
          description: 'Automated reporting systems for CIC, CIBIL, GST, MCA, and regulatory compliance requirements',
          icon: <FileText size={24} className="text-brand-gold" />
        },
        {
          title: 'Portfolio Analytics & Performance Metrics',
          description: 'Comprehensive portfolio analytics with performance tracking, profitability analysis, asset quality metrics, and business intelligence dashboards for data-driven decision making',
          icon: <BarChart3 size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'Lending Infrastructure',
      icon: <CreditCard size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'Embedded Lending / BNPL Infrastructure',
          description: 'White-label lending infrastructure for BNPL, buy-now-pay-later, and embedded finance solutions',
          icon: <Zap size={24} className="text-brand-gold" />
        },
        {
          title: 'Loan Origination System Customizations',
          description: 'Tailored LOS solutions with custom workflows, document management, and approval hierarchies',
          icon: <Target size={24} className="text-brand-gold" />
        },
        {
          title: 'LMS / CBS Portals & Integrations',
          description: 'Custom integrations with custom crafted Loan Management Systems, and Core Banking Systems',
          icon: <Activity size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'Insurance Infrastructure',
      icon: <Umbrella size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'Policy Management Systems',
          description: 'End-to-end policy lifecycle management with automated underwriting, claims processing, and customer portal integration',
          icon: <Shield size={24} className="text-brand-gold" />
        },
        {
          title: 'Claims Processing Automation',
          description: 'AI-powered claims assessment, fraud detection, and automated settlement workflows for faster processing',
          icon: <FileText size={24} className="text-brand-gold" />
        },
        {
          title: 'Risk Assessment & Underwriting',
          description: 'Advanced risk modeling and underwriting engines with real-time data integration for accurate premium calculation',
          icon: <AlertTriangle size={24} className="text-brand-gold" />
        }
      ]
    },
    {
      category: 'Investment Infrastructure',
      icon: <PieChart size={32} className="text-brand-gold" />,
      solutions: [
        {
          title: 'Portfolio Management Systems',
          description: 'Comprehensive portfolio tracking, performance analytics, and rebalancing automation for wealth management',
          icon: <TrendingUp size={24} className="text-brand-gold" />
        },
        {
          title: 'Trading & Order Management',
          description: 'Real-time trading platforms with order routing, execution management, and compliance monitoring',
          icon: <Activity size={24} className="text-brand-gold" />
        },
        {
          title: 'Investment Advisory Platforms',
          description: 'Robo-advisory systems with automated investment recommendations, goal-based planning, and client engagement tools',
          icon: <Wallet size={24} className="text-brand-gold" />
        }
      ]
    }
  ];

  const useCases = [
    {
      title: 'NBFC Digital Transformation',
      description: 'Complete LOS overhaul with BRE, eKYC integration, and real-time risk dashboards for a mid-size NBFC',
      icon: <Building size={24} className="text-brand-gold" />
    },
    {
      title: 'Bank AA Integration Project',
      description: 'Seamless Account Aggregator integration enabling real-time bank statement analysis for credit decisions',
      icon: <Database size={24} className="text-brand-gold" />
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
              <Settings size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">Custom BFSI Solutions & Consulting</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Build vs Buy?<br />
              <span className="text-brand-gold">We Build It Right</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-12 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Custom BFSI solutions tailored to your needs. From Business Rule Engines to AA integrations, we deliver enterprise-grade fintech infrastructure.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Book a Consultation
                <ArrowRight size={20} className="ml-2" />
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 text-lg"
              >
                Check Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Expertise */}
      <section className="py-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                BFSI Expertise That Delivers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Crawfield & Dutton brings deep fintech expertise to every custom BFSI project. We've built solutions for NBFCs, banks, and lending platforms across India, combining AI-powered intelligence with robust engineering. Our team understands regulatory requirements, integration complexities, and the unique challenges of the Indian financial services landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Whether you need a complete system overhaul or a targeted module, we deliver solutions that scale, comply, and perform. From proof-of-concept to production deployment, we're your trusted technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modules */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">
              Solutions We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive BFSI modules and systems tailored to your business needs
            </p>
          </div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {serviceModules.map((module, moduleIndex) => (
              <div key={moduleIndex} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${moduleIndex * 100}ms` }}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-brand-cream to-white rounded-xl shadow-lg border border-brand-gold/30">
                      {module.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-3">
                    {module.category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {module.solutions.map((solution, solutionIndex) => (
                    <div
                      key={solutionIndex}
                      className="group relative bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:border-brand-gold/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/0 to-brand-gold/0 group-hover:from-brand-cream/5 group-hover:to-brand-gold/5 transition-all duration-300 rounded-xl"></div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/0 to-transparent group-hover:from-brand-gold/10 transition-all duration-300 rounded-bl-full"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-br from-brand-cream to-white rounded-xl shadow-md border border-brand-gold/20 group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand-gold/40 group-hover:bg-gradient-to-br group-hover:from-brand-gold/10 group-hover:to-brand-cream transition-all duration-300">
                            <div className="group-hover:scale-110 transition-transform duration-300">
                              {solution.icon}
                            </div>
                          </div>
                          <h4 className="text-xl font-semibold text-brand-navy flex-1 group-hover:text-brand-gold transition-colors duration-300">
                            {solution.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Verticals CTA */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">
              Verticals We Serve
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Trusted by leading financial institutions and fintech companies across diverse verticals
            </p>
            <Link
              to="/verticals"
              className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg group"
            >
              <span>Explore Verticals</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-white" ref={formRef}>
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
                <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
                <form
                  action="https://formsubmit.co/business@crawfieldanddutton.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/#/services?success=true`} />
                  <input type="hidden" name="_subject" value="Services Inquiry - Custom BFSI Project" />
                  
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

export default Services;

