
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shield, Brain, TrendingUp, AlertTriangle, Building, BarChart3, MessageSquare, CheckCircle, Target, Zap, Eye, Clock, Mail, Phone, FileText, Database, FileCheck, Globe, Building2, Receipt } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BusinessLoanMonitoring = () => {
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
      title: 'GST Data Intelligence',
      description: 'AI analyzes GST returns, filing patterns, and tax compliance to assess business financial health and revenue stability'
    },
    {
      icon: <Target size={32} className="text-brand-gold" />,
      title: 'Business Revenue Pattern Analysis',
      description: 'Machine learning models identify seasonal trends, growth trajectories, and revenue volatility patterns'
    },
    {
      icon: <Zap size={32} className="text-brand-gold" />,
      title: 'Cash Flow Prediction',
      description: 'Predict business cash flow challenges by analyzing payment cycles, receivables, and operational expenses'
    },
    {
      icon: <FileText size={32} className="text-brand-gold" />,
      title: 'Early Warning System (EWS)',
      description: 'Advanced EWS detects business distress signals including declining revenue, increasing expenses, and payment delays'
    }
  ];

  const riskTeamBenefits = [
    {
      icon: <AlertTriangle size={24} className="text-brand-gold" />,
      title: 'Business Risk Assessment',
      description: 'Comprehensive risk scoring based on GST data, revenue patterns, and business financial health indicators'
    },
    {
      icon: <BarChart3 size={24} className="text-brand-gold" />,
      title: 'Portfolio-Level Insights',
      description: 'Monitor entire business loan portfolio with aggregated risk metrics, trends, and KPI dashboards'
    },
    {
      icon: <TrendingUp size={24} className="text-brand-gold" />,
      title: 'Predictive Business Analytics',
      description: 'AI predicts business loan defaults by analyzing GST trends, revenue patterns, and operational indicators'
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: 'Automated Risk Flagging',
      description: 'Real-time alerts on business financial distress, GST irregularities, and revenue decline patterns'
    }
  ];

  const collectionsTeamBenefits = [
    {
      icon: <MessageSquare size={24} className="text-brand-gold" />,
      title: 'Business Context Intelligence',
      description: 'Understand business financial situation, cash flow challenges, and operational context before recovery outreach'
    },
    {
      icon: <Building size={24} className="text-brand-gold" />,
      title: 'Stakeholder Communication',
      description: 'AI-powered communication strategies tailored for business owners, considering business cycles and cash flow patterns'
    },
    {
      icon: <Clock size={24} className="text-brand-gold" />,
      title: 'Strategic Recovery Timing',
      description: 'AI determines optimal contact timing based on business revenue cycles, GST filing dates, and payment patterns'
    },
    {
      icon: <CheckCircle size={24} className="text-brand-gold" />,
      title: 'Business Recovery Tracking',
      description: 'Monitor recovery performance for business loans with specialized metrics and business-specific insights'
    }
  ];

  const journeySteps = [
    {
      title: 'Main Dashboard',
      description: 'Get a comprehensive overview of your entire loan portfolio with key metrics, trends, and risk indicators for both individual and business loans',
      image: '/images/banklens/1. Main Dashboard.png',
      features: ['Total Customers', 'Risky Customers', 'Signals Generated', 'Recovery Rate']
    },
    {
      title: 'Business Customer List',
      description: 'View all business loan customers with risk scores, business type, GST status, and quick access to detailed business profiles',
      image: '/images/banklens/Business/1. Business Customer List.png',
      features: ['Business Risk Scoring', 'GST Status', 'Quick Actions']
    },
    {
      title: 'Financial Overview',
      description: 'Comprehensive business financial snapshot showing revenue trends, GST data, cash flow patterns, and operational metrics',
      image: '/images/banklens/Business/2. Business Customer Detail - Financial Overview.png',
      features: ['Revenue Analysis', 'GST Data', 'Cash Flow Tracking']
    },
    {
      title: 'Financial Analysis',
      description: 'Deep dive into business financial trends with AI-powered insights on revenue patterns, expense analysis, and growth indicators derived from sources - GST, Bank Statements, Credit Report',
      image: '/images/banklens/Business/3. Business Customer Detail - Financial Analysis.png',
      features: ['Revenue Trends', 'Expense Analysis', 'Growth Indicators']
    },
    {
      title: 'Loan Progress',
      description: 'Track business loan repayment progress, EMI history, payment patterns, and business performance correlation',
      image: '/images/banklens/Business/4. Business Customer Detail - Loan Progress.png',
      features: ['EMI Tracking', 'Payment History', 'Business Performance']
    },
    {
      title: 'Financial Risk Analysis',
      description: 'AI-powered business risk assessment with GST-based insights, revenue stress dimensions, and predictive indicators',
      image: '/images/banklens/Business/5. Business Customer Detail - Financial Risk Analysis.png',
      features: ['GST Analysis', 'Revenue Stress', 'Risk Scorecard']
    },
    {
      title: 'Early Warning System (EWS)',
      description: 'Advanced EWS dashboard showing business distress signals, revenue decline patterns, and early intervention recommendations',
      image: '/images/banklens/Business/6. Business Customer Detail - EWS.png',
      features: ['EWS Signals', 'Distress Indicators', 'Intervention Recommendations']
    },
    {
      title: 'Risk KPIs Dashboard',
      description: 'Monitor portfolio-level risk metrics, business loan trends, and key performance indicators in real-time',
      image: '/images/banklens/2. Monitoring Dashboard - Risk KPIs.png',
      features: ['Portfolio Health', 'Risk Distribution', 'KPI Tracking']
    },
    {
      title: 'Agent Trigger - Omnichannel',
      description: 'AI-powered omnichannel communication system that triggers personalized recovery conversations for business loans',
      image: '/images/banklens/3. Agent Trigger - Omnichannel Conversation.png',
      features: ['Multi-Channel', 'Business Context', 'Sentiment Analysis']
    },
    {
      title: 'Real-Time Risk Signals',
      description: 'Instant alerts on critical business risk signals including GST irregularities, revenue drops, and cash flow issues',
      image: '/images/banklens/4. Realtime Risk Signals .png',
      features: ['Real-Time Alerts', 'Business Signals', 'Severity Levels']
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
              <Building size={16} className="text-brand-gold" />
              <span className="text-sm font-medium text-brand-navy">Business Loan Monitoring Solution</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Monitor Every <span className="text-brand-gold">Business Loan</span> with AI Precision
            </h1>
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-4 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Predict defaults 30-60 days early. Empower risk teams with GST intelligence. Enable collections teams with business context.
            </p>
            <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-12 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              Comprehensive monitoring for business loans, MSME portfolios, and commercial credit with GST data analysis.
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

      {/* What is Business Loan Monitoring? */}
      <section ref={pageRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-display font-bold text-brand-navy mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What is <span className="text-brand-gold">Business Loan Monitoring</span>?
            </h2>
            <p className={`text-lg text-gray-600 mb-6 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Business Loan Monitoring is BankLens' specialized solution for tracking business loans, MSME portfolios, 
              and commercial credit. Using AI and GST data intelligence, it provides real-time business risk assessment, 
              revenue pattern analysis, and intelligent recovery recommendations for each business borrower.
            </p>
            <p className={`text-base text-brand-navy font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              Built for risk teams and collections teams who need actionable insights on business borrowers and MSME portfolios.
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
              Our AI analyzes business financial data, GST patterns, and revenue trends to predict risk and enable proactive business loan management.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Complete <span className="text-brand-gold">Product Journey</span>
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Experience the full workflow from portfolio overview to business customer insights and recovery actions
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold text-sm font-medium rounded-full mb-4">
                    Preview {index + 1}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-brand-navy mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-brand-cream text-brand-gold text-sm font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
                  These previews only scratch the surface. Experience the full power of our AI-driven business loan monitoring platform with real-time data, advanced analytics, and intelligent insights that transform how you manage risk.
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

      {/* Data Sources & Business Profiling */}
      <section className="py-20 bg-gradient-to-b from-white via-brand-cream/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                End-to-End <span className="text-brand-gold">Business Profiling</span>
              </h2>
              <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
                Comprehensive business intelligence powered by multiple data sources, creating a complete 360° view of every business borrower
              </p>
              <p className={`text-lg text-brand-navy/80 max-w-2xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
                We combine GST data, financial records, and alternative sources to build deep, actionable insights for your business loan needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: <Receipt size={32} className="text-brand-gold" />,
                  title: 'GST Data',
                  description: 'Comprehensive GST return analysis, filing patterns, tax compliance, and revenue verification for business financial health',
                  gradient: 'from-blue-500 to-blue-600'
                },
                {
                  icon: <Database size={32} className="text-brand-gold" />,
                  title: 'Account Aggregator',
                  description: 'Real-time business bank statement analysis, cash flow patterns, and transaction intelligence for MSME portfolios',
                  gradient: 'from-purple-500 to-purple-600'
                },
                {
                  icon: <Globe size={32} className="text-brand-gold" />,
                  title: 'Alternate Data',
                  description: 'Digital footprint, business signals, and behavioral patterns beyond traditional financial data',
                  gradient: 'from-green-500 to-green-600'
                },
                {
                  icon: <Building2 size={32} className="text-brand-gold" />,
                  title: 'Govt Portal Data',
                  description: 'Verified government records, business registration, compliance status, and official documents from government portals',
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
              Empower your risk management team with AI-driven business insights and GST-based monitoring capabilities
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
              Transform business loan recovery operations with AI-powered insights and business context intelligence
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
              { title: 'GST Data Analysis', desc: 'Comprehensive GST return analysis and filing pattern tracking' },
              { title: 'Revenue Pattern Tracking', desc: 'Monitor business revenue trends and seasonal variations' },
              { title: 'Cash Flow Monitoring', desc: 'Track business cash flow and identify liquidity challenges' },
              { title: 'Early Warning System', desc: 'Advanced EWS for business distress detection' },
              { title: 'Business Risk Scorecard', desc: 'AI-powered risk scoring based on multiple business indicators' },
              { title: 'Recovery Recommendations', desc: 'AI-suggested recovery strategies tailored for businesses' }
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
                Get Started with <span className="text-brand-gold">Business Loan Monitoring</span>
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
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/banklens/business-loan-monitoring?success=true` : '/#/banklens/business-loan-monitoring?success=true'} />
                <input type="hidden" name="_subject" value="Business Loan Monitoring - Demo Request" />
                
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

export default BusinessLoanMonitoring;

