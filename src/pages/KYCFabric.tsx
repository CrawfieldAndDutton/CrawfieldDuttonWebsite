
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, UserCheck, FileCheck, Lock, CheckCircle, Mail, Phone, Database, Search, Brain, TrendingUp, AlertTriangle, CreditCard, Users, Building, Smartphone, Zap, Code, Settings, Clock, FileText, DollarSign, Briefcase, Activity, Flag, BookOpen, ExternalLink, Gamepad2, Heart, Home, IdCard, Car, Server, Globe, UserCircle, Receipt, TrendingDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const KYCFabric = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
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

  const scrollToIntegration = () => {
    integrationRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      icon: <Building size={32} className="text-brand-gold" />,
      title: 'Banking',
      description: 'Complete KYC verification for account opening, loan processing, and compliance with regulatory requirements'
    },
    {
      icon: <Gamepad2 size={32} className="text-brand-gold" />,
      title: 'Gaming Platforms',
      description: 'Verify user authenticity, age verification, and assess financial stability for premium features and in-app purchases'
    },
    {
      icon: <Heart size={32} className="text-brand-gold" />,
      title: 'Dating Platforms',
      description: 'Ensure user safety with identity verification, background checks, and fraud prevention for secure connections'
    },
    {
      icon: <UserCircle size={32} className="text-brand-gold" />,
      title: 'HR & Recruitment',
      description: 'Verify candidate credentials, employment history, and background checks for hiring decisions'
    },
    {
      icon: <DollarSign size={32} className="text-brand-gold" />,
      title: 'Lending & NBFCs',
      description: 'Approve smarter with alternative data beyond traditional credit scores and comprehensive risk assessment'
    },
    {
      icon: <Shield size={32} className="text-brand-gold" />,
      title: 'Insurance',
      description: 'Detect risk-prone customers before issuing policies and verify policyholder information'
    },
    {
      icon: <CreditCard size={32} className="text-brand-gold" />,
      title: 'BNPL & Credit Cards',
      description: 'Reduce losses from impulse users and high-risk borrowers with instant verification'
    },
    {
      icon: <Users size={32} className="text-brand-gold" />,
      title: 'Gig Platforms',
      description: 'Assess reliability of delivery agents, partners, and contractors with background verification'
    },
    {
      icon: <Smartphone size={32} className="text-brand-gold" />,
      title: 'Neo Banks & Fintech',
      description: 'Enrich and personalize customer journeys with financial insights and seamless onboarding'
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
              Built for every industry doing KYC - Banking, Gaming, Dating, HR, Fintech, Insurance, and more.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-600`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Get Early Access <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={scrollToIntegration}
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
              KYCFabric is a comprehensive KYC infrastructure platform that verifies identity documents, enriches user profiles with contextual risk data, and automates onboarding workflows through a customized Business Rule Engine (BRE). It connects with multiple backend data sources to ensure high uptime and reliability, providing businesses with real-time verification and risk assessment capabilities.
            </p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <div className="bg-brand-cream rounded-xl p-6 border-l-4 border-brand-gold">
                <h3 className="text-brand-navy font-bold mb-2 flex items-center">
                  <Settings size={20} className="mr-2 text-brand-gold" />
                  Customized BRE
                </h3>
                <p className="text-brand-navy">
                  Our Business Rule Engine automates the entire onboarding process, making decisions based on your custom rules and risk thresholds.
                </p>
              </div>
              <div className="bg-brand-cream rounded-xl p-6 border-l-4 border-brand-gold">
                <h3 className="text-brand-navy font-bold mb-2 flex items-center">
                  <Server size={20} className="mr-2 text-brand-gold" />
                  Multiple Backend Sources
                </h3>
                <p className="text-brand-navy">
                  Integrated with multiple data providers to ensure high uptime, redundancy, and reliable verification services.
                </p>
              </div>
            </div>
            <div className={`bg-brand-cream rounded-xl p-6 border-l-4 border-brand-gold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              <p className="text-brand-navy font-medium">
                Let's say your user is legit. KYCFabric helps you know if they're really stable, really risky, or somewhere in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Types */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Comprehensive <span className="text-brand-gold">Verification</span> Services
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              KYCFabric supports all major Indian identity documents and verification services with multiple backend sources for maximum reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <IdCard size={24} className="text-brand-gold" />, title: 'PAN Verification', desc: 'Permanent Account Number validation' },
              { icon: <IdCard size={24} className="text-brand-gold" />, title: 'Aadhaar Verification', desc: '12-digit unique identity verification' },
              { icon: <FileText size={24} className="text-brand-gold" />, title: 'Voter ID Verification', desc: 'Electoral roll validation' },
              { icon: <Car size={24} className="text-brand-gold" />, title: 'Vehicle RC Verification', desc: 'Vehicle registration document check' },
              { icon: <Globe size={24} className="text-brand-gold" />, title: 'Passport Verification', desc: 'International travel document validation' },
              { icon: <IdCard size={24} className="text-brand-gold" />, title: 'Driving Licence Verification', desc: 'DL number and validity check' },
              { icon: <FileText size={24} className="text-brand-gold" />, title: 'GSTIN Verification', desc: 'GST registration number validation' },
              { icon: <Phone size={24} className="text-brand-gold" />, title: 'Mobile Lookup', desc: 'Phone number verification and carrier info' },
              { icon: <Mail size={24} className="text-brand-gold" />, title: 'Email Lookup', desc: 'Email address validation and verification' },
              { icon: <Briefcase size={24} className="text-brand-gold" />, title: 'Job Verification', desc: 'Employment status and employer check' },
              { icon: <Shield size={24} className="text-brand-gold" />, title: 'Crime History', desc: 'FIR records, challans, and criminal history' },
              { icon: <Home size={24} className="text-brand-gold" />, title: 'Asset Verification', desc: 'Property, vehicle, and asset documentation' },
              { icon: <Building size={24} className="text-brand-gold" />, title: 'Company Verification', desc: 'Business registration and company details validation' },
              { icon: <Receipt size={24} className="text-brand-gold" />, title: 'Utility Bills Verification', desc: 'Electricity, water, and other utility bill validation' },
              { icon: <TrendingDown size={24} className="text-brand-gold" />, title: 'Salary Detection', desc: 'Income verification and salary pattern analysis' },
            ].map((verification, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-5 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50 + 300}ms` }}
              >
                <div className="flex justify-center mb-3">
                  {verification.icon}
                </div>
                <h3 className="text-sm font-display font-bold text-brand-navy mb-1">
                  {verification.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {verification.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-1000`}>
            <div className="bg-gradient-to-r from-brand-navy to-brand-darkNavy rounded-xl p-8 md:p-12 text-white max-w-4xl mx-auto shadow-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                We Verify <span className="text-brand-gold">Much More</span> Than You Think
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                From bank statements to employment records, asset ownership to behavioral patterns — 
                KYCFabric's comprehensive verification ecosystem covers everything you need for complete risk assessment.
              </p>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Explore All Verifications <ArrowRight size={20} className="ml-2" />
              </button>
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

      {/* Integration Options */}
      <section ref={integrationRef} className="py-20 bg-white">
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
            <p className={`text-lg text-gray-600 leading-relaxed mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              KYCFabric is powered by the same R&D team behind BankLens and uses real-time behavioral models 
              tuned to Indian consumers. Our AI models understand local financial patterns, employment structures, 
              and spending behaviors unique to the Indian market.
            </p>
            <p className={`text-lg text-gray-600 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              With multiple backend data sources integrated, KYCFabric ensures high uptime, redundancy, and reliable 
              verification services even during peak loads or provider outages.
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
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg flex items-center justify-center"
                  >
                    Talk to our Product Team <ArrowRight size={20} className="ml-2" />
                  </button>
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
