
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Brain, TrendingUp, AlertTriangle, Users, BarChart3, MessageSquare, CheckCircle, Target, Zap, Eye, Clock, Mail, Phone, Database, FileCheck, Globe, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const IndividualLoanMonitoring = () => {
  const pageRef = useRef<HTMLDivElement>(null);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const aiCapabilities = [
    {
      icon: <Brain size={32} className="text-brand-gold" />,
      title: 'Predictive Risk Scoring',
      description: 'AI models analyze behavioral patterns, spending habits, and financial signals to predict default risk 30-60 days before DPD occurs'
    },
    {
      icon: <Target size={32} className="text-brand-gold" />,
      title: 'Real-Time Signal Detection',
      description: 'Continuous monitoring detects salary drops, job loss, credit card overlimits, and expense anomalies in real-time'
    },
    {
      icon: <Zap size={32} className="text-brand-gold" />,
      title: 'Behavioral Pattern Analysis',
      description: 'Advanced ML algorithms identify subtle shifts in financial behavior that indicate increasing stress'
    },
    {
      icon: <Eye size={32} className="text-brand-gold" />,
      title: 'Multi-Dimensional Stress Analysis',
      description: 'Comprehensive assessment across income, expenses, savings, and credit utilization patterns'
    }
  ];

  const riskTeamBenefits = [
    {
      icon: <AlertTriangle size={24} className="text-brand-gold" />,
      title: 'Early Warning System',
      description: 'Get alerts 30-60 days before default, giving risk teams time to intervene proactively'
    },
    {
      icon: <BarChart3 size={24} className="text-brand-gold" />,
      title: 'Portfolio Risk Dashboard',
      description: 'Real-time view of portfolio health with risk distribution, trends, and KPI tracking'
    },
    {
      icon: <TrendingUp size={24} className="text-brand-gold" />,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions help prioritize high-risk accounts and allocate resources efficiently'
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: 'Automated Risk Assessment',
      description: 'Reduce manual review time with AI-driven risk scoring and automated flagging'
    }
  ];

  const collectionsTeamBenefits = [
    {
      icon: <MessageSquare size={24} className="text-brand-gold" />,
      title: 'AI-Powered Recovery Engine',
      description: 'Intelligent, empathetic communication across WhatsApp, SMS, Email, and Calls with sentiment analysis'
    },
    {
      icon: <Users size={24} className="text-brand-gold" />,
      title: 'Customer Context Intelligence',
      description: 'Understand customer financial situation before reaching out for more effective conversations'
    },
    {
      icon: <Clock size={24} className="text-brand-gold" />,
      title: 'Optimal Contact Timing',
      description: 'AI determines the best time to contact customers based on their financial patterns and behavior'
    },
    {
      icon: <CheckCircle size={24} className="text-brand-gold" />,
      title: 'Recovery Performance Tracking',
      description: 'Monitor recovery rates, track conversation outcomes, and measure campaign effectiveness'
    }
  ];

  const journeySteps = [
    {
      title: 'Main Dashboard',
      description: 'Get a comprehensive overview of your entire loan portfolio with key metrics, trends, and risk indicators',
      image: '/images/banklens/1. Main Dashboard.png',
      features: ['Total Customers', 'Risky Customers', 'Signals Generated', 'Recovery Rate']
    },
    {
      title: 'Customer List',
      description: 'View all individual loan customers with risk scores, status, and quick access to detailed profiles',
      image: '/images/banklens/Individual/1. Customer List.png',
      features: ['Risk Scoring', 'Status Filtering', 'Quick Actions']
    },
    {
      title: 'Financial Overview',
      description: 'Comprehensive financial snapshot showing income, expenses, savings, and credit utilization patterns',
      image: '/images/banklens/Individual/2. Customer Detail - Financial Overview.png',
      features: ['Income Analysis', 'Expense Tracking', 'Savings Pattern']
    },
    {
      title: 'Financial Analysis',
      description: 'Deep dive into financial trends with AI-powered insights on spending behavior and financial health derived from sources - Bank Statements, Credit Report',
      image: '/images/banklens/Individual/3. Customer Detail - Financial Analysis .png',
      features: ['Trend Analysis', 'Pattern Detection', 'Anomaly Identification']
    },
    {
      title: 'Loan Progress',
      description: 'Track loan repayment progress, EMI history, and payment patterns with visual timelines',
      image: '/images/banklens/Individual/4. Customer Detail - Loan Progress.png',
      features: ['EMI Tracking', 'Payment History', 'Progress Visualization']
    },
    {
      title: 'Financial Risk Analysis',
      description: 'AI-powered risk assessment with stress dimensions, behavioral shifts, and predictive indicators',
      image: '/images/banklens/Individual/5. Customer Detail - Financial Risk Analysis.png',
      features: ['Risk Scorecard', 'Stress Dimensions', 'Behavioral Patterns']
    },
    {
      title: 'Recovery Call Interface',
      description: 'AI-assisted recovery interface with customer context, conversation history, and recovery recommendations',
      image: '/images/banklens/Individual/6. Customer Detail - Recover Call.png',
      features: ['Context Intelligence', 'Call History', 'Recovery Strategies']
    },
    {
      title: 'Risk KPIs Dashboard',
      description: 'Monitor portfolio-level risk metrics, trends, and key performance indicators in real-time',
      image: '/images/banklens/2. Monitoring Dashboard - Risk KPIs.png',
      features: ['Portfolio Health', 'Risk Distribution', 'KPI Tracking']
    },
    {
      title: 'Agent Trigger - Omnichannel',
      description: 'AI-powered omnichannel communication system that triggers personalized recovery conversations',
      image: '/images/banklens/3. Agent Trigger - Omnichannel Conversation.png',
      features: ['Multi-Channel', 'Personalized Messaging', 'Sentiment Analysis']
    },
    {
      title: 'Early Warning System (EWS)',
      description: 'Advanced EWS dashboard showing distress signals, financial stress patterns, and early intervention recommendations',
      image: '/images/banklens/4. Realtime Risk Signals .png',
      features: ['EWS Signals', 'Distress Indicators', 'Intervention Recommendations']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-white via-brand-cream to-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center space-x-2 bg-brand-cream px-4 py-2 rounded-full border border-brand-gold/30 mb-6 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <Users size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">Individual Loan Monitoring Solution</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Monitor Every <span className="text-brand-gold">Individual Loan</span> with AI Precision
            </h1>
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-4 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Predict defaults 30-60 days early. Empower risk teams with real-time insights. Enable collections teams with AI-powered recovery.
            </p>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-12 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              Comprehensive monitoring for personal loans, consumer credit, and individual borrower portfolios.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-600`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Get Started <ArrowRight size={20} className="ml-2" />
              </button>
              <Link
                to="/banklens"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold rounded-lg font-medium hover:bg-brand-gold hover:text-white transition-all duration-300"
              >
                Back to BankLens
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Individual Loan Monitoring? */}
      <section ref={pageRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-display font-bold text-brand-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is <span className="text-brand-gold">Individual Loan Monitoring</span>?
            </h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Individual Loan Monitoring is BankLens' specialized solution for tracking personal loans, consumer credit, 
              and individual borrower portfolios. Using AI and behavioral analytics, it provides real-time risk assessment, 
              early warning signals, and intelligent recovery recommendations for each borrower.
            </p>
            <p className={`text-base text-brand-navy font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Built for risk teams and collections teams who need actionable insights on individual borrowers.
            </p>
          </div>
        </div>
      </section>

      {/* Extraordinary AI Capabilities */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Extraordinary <span className="text-brand-gold">AI Capabilities</span>
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Our AI doesn't just analyze data—it understands financial behavior, predicts risk, and enables proactive intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Journey with Screenshots */}
      <section className="py-20 bg-gradient-to-b from-white via-brand-cream/20 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-brand-gold/10 rounded-2xl mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <BarChart3 size={40} className="text-brand-gold" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Complete <span className="text-brand-gold">Product Journey</span>
            </h2>
            <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Experience the full workflow from portfolio overview to individual customer insights and recovery actions
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                {/* Connecting line (desktop only) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-brand-gold/40 via-brand-gold/60 to-transparent z-0"
                    style={{ 
                      top: index % 2 === 0 ? '100%' : '100%',
                      transform: index % 2 === 0 ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(0)'
                    }}
                  ></div>
                )}

                {/* Image Container */}
                <div className="flex-1 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-darkGold to-brand-gold rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 group-hover:border-brand-gold overflow-hidden transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-2xl">
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-darkGold rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-gold/10 to-brand-gold/5 text-brand-gold text-sm font-semibold rounded-full mb-6 border border-brand-gold/20">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-2 animate-pulse"></div>
                      Preview {index + 1} of {journeySteps.length}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-brand-cream to-brand-cream/80 text-brand-gold text-sm font-medium rounded-full border border-brand-gold/20 hover:border-brand-gold hover:shadow-md transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center space-x-2">
              {journeySteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isVisible 
                      ? 'bg-brand-gold shadow-lg scale-110' 
                      : 'bg-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                ></div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-700`}>
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-3xl p-12 shadow-2xl border-2 border-brand-gold/30 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/20 rounded-full mb-6">
                  <Eye size={32} className="text-brand-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  We're Not Revealing <span className="text-brand-gold">Everything</span>
                </h3>
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  These previews only scratch the surface. Experience the full power of our AI-driven individual loan monitoring platform with real-time data, advanced analytics, and intelligent insights that transform how you manage risk.
                </p>
                <p className="text-base text-gray-300 mb-8">
                  Book a live demo and see the complete solution in action.
                </p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center px-10 py-4 bg-brand-gold text-white rounded-lg font-semibold hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg transform hover:scale-105"
                >
                  Request LIVE Demo <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources & Individual Profiling */}
      <section className="py-20 bg-gradient-to-b from-white via-brand-cream/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                End-to-End <span className="text-brand-gold">Individual Profiling</span>
              </h2>
              <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
                Comprehensive financial intelligence powered by multiple data sources, creating a complete 360° view of every borrower
              </p>
              <p className={`text-lg text-brand-navy/80 max-w-2xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
                We combine the best of traditional and alternative data to build deep, actionable insights for your financial needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: <Database size={32} className="text-brand-gold" />,
                  title: 'Account Aggregator',
                  description: 'Real-time bank statement analysis, transaction patterns, and cash flow intelligence',
                  gradient: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <FileCheck size={32} className="text-brand-gold" />,
                  title: 'Credit Bureau',
                  description: 'Comprehensive credit history, repayment behavior, and credit score trends',
                  gradient: 'from-purple-500 to-purple-600'
                },
                {
                  icon: <Globe size={32} className="text-brand-gold" />,
                  title: 'Alternate Data',
                  description: 'Digital footprint, social signals, and behavioral patterns beyond traditional credit',
                  gradient: 'from-green-500 to-green-600'
                },
                {
                  icon: <Building2 size={32} className="text-brand-gold" />,
                  title: 'Govt Portal Data',
                  description: 'Verified government records, identity validation, and official documents scraped from government portals',
                  gradient: 'from-orange-500 to-orange-600'
                }
              ].map((source, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 p-6 hover:border-brand-gold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 rounded-xl flex items-center justify-center mb-4">
                    {source.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                    {source.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Risk Teams */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              How It Helps <span className="text-brand-gold">Risk Teams</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Empower your risk management team with AI-driven insights and proactive monitoring capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {riskTeamBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Helps Collections Teams */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              How It Helps <span className="text-brand-gold">Collections Teams</span>
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Transform recovery operations with AI-powered insights and intelligent communication strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {collectionsTeamBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-brand-cream rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Key <span className="text-brand-gold">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Risk Scorecard', desc: 'AI-powered risk scoring for each borrower' },
              { title: 'Stress Dimensions', desc: 'Multi-dimensional financial stress analysis' },
              { title: 'Behavioral Pattern Shifts', desc: 'Detect changes in spending and payment behavior' },
              { title: 'Real-Time Alerts', desc: 'Instant notifications on critical risk signals' },
              { title: 'Financial Trend Analysis', desc: 'Track income, expense, and savings patterns' },
              { title: 'Recovery Recommendations', desc: 'AI-suggested recovery strategies and timing' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50 + 300}ms` }}
              >
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Get Started with <span className="text-brand-gold">Individual Loan Monitoring</span>
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
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/banklens/individual-loan-monitoring?success=true` : '/#/banklens/individual-loan-monitoring?success=true'} />
                <input type="hidden" name="_subject" value="Individual Loan Monitoring - Demo Request" />
                
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

export default IndividualLoanMonitoring;

