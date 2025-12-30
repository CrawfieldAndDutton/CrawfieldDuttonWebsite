
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, AlertTriangle, BarChart3, Zap, CheckCircle, Mail, Phone, TrendingDown, DollarSign, Clock, Users, Building, Smartphone, CreditCard, FileText, MessageSquare, Settings, Eye, Target, Brain, Database, Calculator, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BankLens = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    // Make hero visible immediately on mount
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

  const differentiators = [
    {
      icon: <Brain size={32} className="text-brand-gold" />,
      title: 'AI-based Early Warning Signal Detection',
      description: 'Advanced machine learning algorithms identify risk patterns 30-45 days before DPD occurs'
    },
    {
      icon: <Database size={32} className="text-brand-gold" />,
      title: 'Combines Different Financial Datasets',
      description: 'Multi-source data integration for comprehensive borrower financial health assessment'
    },
    {
      icon: <Target size={32} className="text-brand-gold" />,
      title: 'Predicts DPD Before It Happens',
      description: 'Proactive risk prediction enabling early intervention and recovery strategies'
    },
    {
      icon: <MessageSquare size={32} className="text-brand-gold" />,
      title: 'AI Recovery Engine with Omnichannel Nudges',
      description: 'Intelligent, empathetic communication across WhatsApp, SMS, Email, and Calls'
    }
  ];

  const keyResults = [
    {
      icon: <TrendingDown size={32} className="text-brand-gold" />,
      value: '43%',
      label: 'Reduction in DPD',
      color: 'text-green-600'
    },
    {
      icon: <DollarSign size={32} className="text-brand-gold" />,
      value: '25%',
      label: 'Increase in Recovery',
      color: 'text-brand-gold'
    },
    {
      icon: <AlertTriangle size={32} className="text-brand-gold" />,
      value: '6',
      label: 'Real-time alerts from risk zones',
      color: 'text-brand-navy'
    },
    {
      icon: <Clock size={32} className="text-brand-gold" />,
      value: '< 7 days',
      label: 'Plug-and-play integration',
      color: 'text-brand-navy'
    }
  ];

  const modules = [
    {
      title: 'Individual Loan Monitoring',
      icon: <Eye size={32} className="text-brand-gold" />,
      features: [
        'Risk Scorecard',
        'Stress Dimensions',
        'Behavioral Pattern Shifts'
      ]
    },
    {
      title: 'Business Loan Monitoring',
      icon: <Building size={32} className="text-brand-gold" />,
      features: [
        'GST Data Analysis',
        'Business Financial Health',
        'Revenue & Cash Flow Tracking'
      ]
    },
    {
      title: 'Recovery Engine',
      icon: <MessageSquare size={32} className="text-brand-gold" />,
      features: [
        'Empathetic Nudges',
        'Omnichannel Messaging',
        'Conversation Summary + Prediction'
      ]
    },
    {
      title: 'Monitoring Dashboard',
      icon: <BarChart3 size={32} className="text-brand-gold" />,
      features: [
        'Risk Movement Tracker',
        'Portfolio Health Reports',
        'Custom Strategy Settings'
      ]
    }
  ];

  const targetAudience = [
    {
      icon: <Building size={32} className="text-brand-gold" />,
      title: 'NBFCs',
      description: 'Non-banking financial companies seeking advanced loan monitoring'
    },
    {
      icon: <Building size={32} className="text-brand-gold" />,
      title: 'Banks',
      description: 'Traditional banks looking to modernize their loan portfolio management'
    },
    {
      icon: <Smartphone size={32} className="text-brand-gold" />,
      title: 'Lending Fintechs',
      description: 'Digital-first lending platforms requiring real-time risk intelligence'
    },
    {
      icon: <Users size={32} className="text-brand-gold" />,
      title: 'Collections Teams',
      description: 'Recovery teams needing predictive insights for better outcomes'
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
              <Shield size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">India's First AI-Powered Loan Monitoring Solution</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-12 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Stop Risk <span className="text-brand-gold">Before It Starts</span>
            </h1>
            
            {/* Demo Video */}
            <div className={`max-w-4xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-600`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/30 bg-brand-navy">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/4e8NigppV9E"
                    title="BankLens Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="absolute -top-3 -right-3 bg-brand-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Watch Demo
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-700`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all duration-300"
              >
                Get Access Now
              </button>
            </div>
            
            {/* Quick Links */}
            <div className={`flex items-center justify-center gap-6 mt-8 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-700`}>
              <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
              <div className="flex items-center gap-4">
                <Link
                  to="/pricing"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-brand-navy hover:text-brand-gold transition-all duration-300 rounded-lg hover:bg-brand-cream/50"
                >
                  <Calculator size={18} className="text-brand-gold group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">Pricing</span>
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <Link
                  to="/methodology"
                  className="group inline-flex items-center gap-2 px-4 py-2 text-brand-navy hover:text-brand-gold transition-all duration-300 rounded-lg hover:bg-brand-cream/50"
                >
                  <BookOpen size={18} className="text-brand-gold group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-sm">Methodology</span>
                </Link>
              </div>
              <div className="h-px bg-gray-300 flex-1 max-w-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is BankLens? */}
      <section ref={pageRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-display font-bold text-brand-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is <span className="text-brand-gold">BankLens</span>?
            </h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              BankLens is a post-loan intelligence engine that uses AI + behavioral analytics to monitor borrowers 
              in real-time, predict financial distress, and trigger early interventions — enabling faster recovery 
              and reduced delinquency.
            </p>
            <p className={`text-base text-brand-navy font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Built by Crawfield & Dutton. Trusted by early NBFCs and Lending Partners.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes It Different? */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What Makes It <span className="text-brand-gold">Different</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Preview */}
      <section ref={demoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Get Full Control on Your <span className="text-brand-gold">Loan Book</span>
              </h2>
              <p className={`text-gray-600 mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
                Account by account.
              </p>
            </div>

            {/* Dashboard Preview Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <BarChart3 size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Risk Dashboard</h3>
                  <p className="text-sm text-gray-600">Real-time portfolio risk overview</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <Users size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Customer Profile & Stress Scores</h3>
                  <p className="text-sm text-gray-600">Individual borrower risk assessment</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <AlertTriangle size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Real-Time Alerts</h3>
                  <p className="text-sm text-gray-600">Instant notifications on risk changes</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <DollarSign size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Collection Summary View</h3>
                  <p className="text-sm text-gray-600">Recovery performance metrics</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <TrendingDown size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Monitoring Graphs</h3>
                  <p className="text-sm text-gray-600">Trend analysis and predictions</p>
                </div>
              </div>
              <div className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                    <Settings size={28} className="text-brand-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">Custom Configurations</h3>
                  <p className="text-sm text-gray-600">Tailored risk parameters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results / Impact */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Proven <span className="text-brand-gold">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {keyResults.map((result, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {result.icon}
                </div>
                <div className={`text-5xl font-display font-bold mb-2 ${result.color}`}>
                  {result.value}
                </div>
                <p className="text-gray-600 font-medium">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules You Get */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Modules You <span className="text-brand-gold">Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-4">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle size={18} className="text-brand-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Who Is It <span className="text-brand-gold">For</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className={`bg-brand-cream rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Demo Form */}
      <section ref={formRef} className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Book a <span className="text-brand-gold">Demo</span>
              </h2>
              <p className={`text-xl text-gray-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
                Talk to Our Product Team
              </p>
            </div>

            {formSubmitted ? (
              <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-green-800 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                <p className="font-medium text-lg mb-2">Thank you for your interest!</p>
                <p className="text-sm">We'll get back to you shortly to schedule your demo.</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/business@crawfieldanddutton.com"
                method="POST"
                className={`bg-white rounded-xl shadow-lg p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/banklens?success=true` : '/#/banklens?success=true'} />
                <input type="hidden" name="_subject" value="BankLens Demo Request" />
                
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
                    <Mail size={20} className="mr-2" />
                    Talk to Our Product Team
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

export default BankLens;
