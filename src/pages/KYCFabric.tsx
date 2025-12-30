
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, UserCheck, FileCheck, Lock, CheckCircle, Mail, Phone, Database, Search, Brain, TrendingUp, AlertTriangle, CreditCard, Users, Building, Smartphone, Zap, Code, Settings, Clock, FileText, DollarSign, Briefcase, Activity, Flag, BookOpen, ExternalLink, Gamepad2, Heart, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const KYCFabric = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: ''
  });

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
    
    // Check if form was submitted successfully
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setFormSubmitted(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const enrichmentOutputs = [
    {
      icon: <FileCheck size={32} className="text-brand-gold" />,
      title: 'OVD Checks',
      description: 'All Indian OVDs supported - comprehensive verification of official valid documents'
    },
    {
      icon: <Briefcase size={32} className="text-brand-gold" />,
      title: 'Employment Check',
      description: 'Verify employment status, employer details, and professional background'
    },
    {
      icon: <Home size={32} className="text-brand-gold" />,
      title: 'Asset Check',
      description: 'Verify car RC, home ownership, and other asset documentation for financial assessment'
    },
    {
      icon: <Shield size={32} className="text-brand-gold" />,
      title: 'Crime History Check',
      description: 'Check car challans, FIR records, and criminal history of individuals for risk assessment'
    }
  ];

  const personas = [
    {
      title: 'Salaried',
      description: 'Stable income, predictable cash flow, low risk profile'
    },
    {
      title: 'Gig',
      description: 'Variable income, requires income smoothing assessment'
    },
    {
      title: 'Self-Employed',
      description: 'Business revenue patterns, seasonal variations, growth trajectory'
    },
    {
      title: 'Thin-file',
      description: 'Limited credit history, alternative data enrichment needed'
    },
    {
      title: 'High-risk',
      description: 'Multiple red flags, requires enhanced monitoring and verification'
    }
  ];

  const useCases = [
    {
      icon: <DollarSign size={32} className="text-brand-gold" />,
      title: 'Lending',
      description: 'Approve smarter with alternative data beyond traditional credit scores'
    },
    {
      icon: <Shield size={32} className="text-brand-gold" />,
      title: 'Insurance',
      description: 'Detect risk-prone customers before issuing policies'
    },
    {
      icon: <CreditCard size={32} className="text-brand-gold" />,
      title: 'BNPL & Credit Cards',
      description: 'Reduce losses from impulse users and high-risk borrowers'
    },
    {
      icon: <Users size={32} className="text-brand-gold" />,
      title: 'Gig Platforms',
      description: 'Assess reliability of delivery agents, partners, and contractors'
    },
    {
      icon: <Smartphone size={32} className="text-brand-gold" />,
      title: 'Neo Banks & Personal Finance Apps',
      description: 'Enrich and personalize customer journeys with financial insights'
    },
    {
      icon: <Gamepad2 size={32} className="text-brand-gold" />,
      title: 'Gaming & Dating Platforms',
      description: 'Verify user authenticity and assess financial stability for premium features and subscriptions'
    }
  ];

  const integrationOptions = [
    {
      icon: <Code size={32} className="text-brand-gold" />,
      title: 'REST APIs',
      description: 'Seamless integration with your existing systems'
    },
    {
      icon: <Settings size={32} className="text-brand-gold" />,
      title: 'No-code Dashboard',
      description: 'Easy-to-use interface for non-technical teams'
    },
    {
      icon: <Clock size={32} className="text-brand-gold" />,
      title: 'Go live in < 1 day',
      description: 'Quick setup and deployment process'
    },
    {
      icon: <CheckCircle size={32} className="text-brand-gold" />,
      title: 'Audit Compliant',
      description: 'Built by following all authority guidelines framework'
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
            <div className={`inline-flex items-center space-x-2 bg-brand-cream px-4 py-2 rounded-full border border-brand-gold/30 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Search size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">Next-Generation KYC Infrastructure Platform</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              KYC Is Dead. <span className="text-brand-gold">Contextual Risk Is the Future</span>.
            </h1>
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              KYC checks verify identity. KYCFabric tells you who they really are — their behaviors, risk profile, and financial stability in seconds.
            </p>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              Built for fintechs, lenders, insurers, and platforms.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-600`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Get Early Access <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={scrollToDemo}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all duration-300"
              >
                <Settings size={20} className="mr-2" />
                Explore Integration
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is KYCFabric? */}
      <section ref={pageRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-display font-bold text-brand-navy mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is <span className="text-brand-gold">KYCFabric</span>?
            </h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              KYCFabric is an AI-powered enrichment layer built on top of basic KYC. It connects with user-permissioned 
              data sources like bank statements, employment signals, salary patterns, and behavioral flags, to help 
              businesses better onboard, underwrite, and serve their customers.
            </p>
            <div className={`bg-brand-cream rounded-xl p-6 border-l-4 border-brand-gold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <p className="text-brand-navy font-medium">
                Let's say your user is legit. KYCFabric helps you know if they're really stable, really risky, or somewhere in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Enrichment Outputs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Key Enrichment <span className="text-brand-gold">Outputs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {enrichmentOutputs.map((output, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-4">
                  {output.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                  {output.title}
                </h3>
                <p className="text-gray-600">
                  {output.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment Personas */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Segment <span className="text-brand-gold">Personas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {personas.map((persona, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                  {persona.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Use <span className="text-brand-gold">Cases</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`bg-brand-cream rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-display font-bold mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Why It <span className="text-brand-gold">Matters</span>
            </h2>
            <p className={`text-xl text-gray-300 mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              42% of default risk lies in users who clear KYC but hide financial stress.
            </p>
            <p className={`text-lg text-gray-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              KYCFabric gives you the signals to prevent fraud, drop-offs, and write-offs before they start.
            </p>
          </div>
        </div>
      </section>

      {/* See the Fabric in Action */}
      <section ref={demoRef} className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                See the <span className="text-brand-gold">Fabric</span> in Action
              </h2>
            </div>

            {/* Sample Visual */}
            <div className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              <div className="bg-gradient-to-br from-brand-navy to-brand-darkNavy rounded-lg p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-brand-gold">Risk Profile</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Stability Score</span>
                        <span className="font-bold">85/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Income Type</span>
                        <span className="font-bold">Salaried</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Risk Level</span>
                        <span className="font-bold text-green-400">Low</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-brand-gold">Enrichment Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brand-gold/20 rounded-full text-xs">Regular Income</span>
                      <span className="px-3 py-1 bg-brand-gold/20 rounded-full text-xs">Low Risk</span>
                      <span className="px-3 py-1 bg-brand-gold/20 rounded-full text-xs">Stable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Integration <span className="text-brand-gold">Options</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {integrationOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Crawfield & Dutton */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-display font-bold text-brand-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Built by <span className="text-brand-gold">Crawfield & Dutton</span>
            </h2>
            <p className={`text-lg text-gray-600 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              KYCFabric is powered by the same R&D team behind BankLens and uses real-time behavioral models 
              tuned to Indian consumers. Our AI models understand local financial patterns, employment structures, 
              and spending behaviors unique to the Indian market.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={formRef} className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Get <span className="text-brand-gold">Early Access</span>
              </h2>
            </div>

            {formSubmitted ? (
              <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-green-800 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                <p className="font-medium text-lg mb-2">Thank you for your interest!</p>
                <p className="text-sm">We'll get back to you shortly with early access details.</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/business@crawfieldanddutton.com"
                method="POST"
                className={`bg-white rounded-xl shadow-lg p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/kycfabric?success=true` : '/#/kycfabric?success=true'} />
                <input type="hidden" name="_subject" value="KYCFabric Early Access Request" />
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-gray-900"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-2">Organization *</label>
                    <input
                      type="text"
                      id="org"
                      name="org"
                      value={formData.org}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-gray-900"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-gray-900"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-gray-900"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg flex items-center justify-center"
                    >
                      Get Early Access <ArrowRight size={20} className="ml-2" />
                    </button>
                    <Link
                      to="/contact"
                      className="flex-1 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <BookOpen size={20} className="mr-2" />
                      See Docs
                    </Link>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KYCFabric;
