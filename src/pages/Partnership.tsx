
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Settings, Search, Rocket, Briefcase, DollarSign, Brain, Users, Building, Code, BarChart, Shield, TrendingUp, Zap, CreditCard, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

const Partnership = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    linkedin: '',
    useCase: ''
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

  const whyPartner = [
    {
      icon: <Settings size={24} className="text-brand-gold" />,
      title: 'Ready-to-integrate APIs & SDKs',
      description: 'Seamless integration with comprehensive documentation and support'
    },
    {
      icon: <Search size={24} className="text-brand-gold" />,
      title: 'Whitelabelled & co-branded options',
      description: 'Flexible branding options to match your brand identity'
    },
    {
      icon: <Rocket size={24} className="text-brand-gold" />,
      title: 'Access to breakthrough tech: BankLens, KYCFabric',
      description: 'India\'s most advanced AI-driven risk & monitoring stack'
    },
    {
      icon: <Briefcase size={24} className="text-brand-gold" />,
      title: 'Dedicated Partner Success Team',
      description: 'Expert support to ensure your success and client satisfaction'
    },
    {
      icon: <DollarSign size={24} className="text-brand-gold" />,
      title: 'Generous revenue share & long-term value',
      description: 'Competitive revenue sharing model with sustainable growth'
    },
    {
      icon: <Brain size={24} className="text-brand-gold" />,
      title: 'Advisory access & roadmap collaboration',
      description: 'Influence product roadmap and get strategic advisory support'
    }
  ];

  const partnerProfiles = [
    {
      icon: <Code size={32} className="text-brand-gold" />,
      title: 'LMS/LOS Vendors',
      description: 'Looking to level up product suite with advanced AI capabilities'
    },
    {
      icon: <Zap size={32} className="text-brand-gold" />,
      title: 'Fintech Product Companies',
      description: 'Needing loan intelligence layer for enhanced offerings'
    },
    {
      icon: <BarChart size={32} className="text-brand-gold" />,
      title: 'Risk Analytics & Decision Engine Providers',
      description: 'Seeking to enhance risk assessment capabilities'
    },
    {
      icon: <Users size={32} className="text-brand-gold" />,
      title: 'Consultants',
      description: 'Serving NBFCs, Banks, or MFIs with comprehensive solutions'
    },
    {
      icon: <Building size={32} className="text-brand-gold" />,
      title: 'System Integrators & IT Vendors',
      description: 'In BFSI space looking to add AI-powered solutions'
    },
    {
      icon: <CreditCard size={32} className="text-brand-gold" />,
      title: 'Digital Banking & Payment Platforms',
      description: 'Enhancing digital banking experiences with AI-driven risk intelligence'
    }
  ];

  const clientOfferings = [
    {
      icon: <TrendingUp size={24} className="text-brand-gold" />,
      title: 'Bank statement intelligence + early warning signals',
      product: 'BankLens',
      description: 'Predict loan defaults 30-60 days early with real-time risk intelligence'
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: 'Real-time onboarding & risk flagging',
      product: 'KYCFabric',
      description: 'Comprehensive KYC verification and contextual risk assessment'
    },
    {
      icon: <BarChart size={24} className="text-brand-gold" />,
      title: 'Personalized dashboards and AI agents',
      description: 'Customizable interfaces and intelligent automation for your clients'
    },
    {
      icon: <ArrowRight size={24} className="text-brand-gold" />,
      title: 'Monitoring + Recovery insights',
      description: 'Drive DPD reduction with actionable insights and recovery strategies'
    },
    {
      icon: <Settings size={24} className="text-brand-gold" />,
      title: 'End-to-end post-loan lifecycle automation',
      description: 'Complete automation from disbursement to recovery'
    },
    {
      icon: <AlertTriangle size={24} className="text-brand-gold" />,
      title: 'Fraud detection & prevention',
      description: 'Advanced AI-powered fraud detection to protect your clients from financial crimes'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign up',
      description: 'Get onboarding kit & API access'
    },
    {
      step: '2',
      title: 'Deploy',
      description: 'Whitelabel / co-branded version'
    },
    {
      step: '3',
      title: 'Sell',
      description: 'To clients or bundle into existing workflows'
    },
    {
      step: '4',
      title: 'Track',
      description: 'Performance via Partner Dashboard'
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
            <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 text-brand-navy ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Power the Future of <span className="text-brand-gold">Banking</span> with Us
            </h1>
            <p className={`text-xl md:text-2xl text-brand-navy/80 mb-12 max-w-3xl mx-auto ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Join our partner program and white-label India's most advanced AI-driven risk & monitoring stack. 
              Serve your BFSI clients better, faster, and smarter.
            </p>
            <div className={`${heroVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold text-lg"
              >
                Become a Partner <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Crawfield & Dutton */}
      <section className="py-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Why Partner With <span className="text-brand-gold">Crawfield & Dutton</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyPartner.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 ${
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

      {/* Who You Are */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Who <span className="text-brand-gold">You Are</span>
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto mt-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Partner Profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerProfiles.map((profile, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {profile.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                  {profile.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Offer Your Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              What You Can Offer <span className="text-brand-gold">Your Clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {clientOfferings.map((offering, index) => (
              <div
                key={index}
                className={`bg-brand-cream rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {offering.icon}
                  </div>
                  <div>
                    {offering.product && (
                      <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-medium rounded-full mb-2">
                        {offering.product}
                      </span>
                    )}
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              How It <span className="text-brand-gold">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-navy">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={formRef} className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Let's Unlock the Future of <span className="text-brand-gold">Lending</span>, Together
              </h2>
            </div>

            {formSubmitted ? (
              <div className={`bg-green-50 border border-green-200 rounded-xl p-8 text-green-800 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <CheckCircle size={48} className="mx-auto mb-4 text-green-600" />
                <p className="font-medium text-lg mb-2">Thank you for your interest!</p>
                <p className="text-sm">We'll get back to you shortly with partnership details.</p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/business@crawfieldanddutton.com"
                method="POST"
                className={`bg-white rounded-xl shadow-lg p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formDataToSubmit = new FormData();
                  formDataToSubmit.append('name', formData.name);
                  formDataToSubmit.append('company', formData.company);
                  formDataToSubmit.append('email', formData.email);
                  formDataToSubmit.append('linkedin', formData.linkedin);
                  formDataToSubmit.append('useCase', formData.useCase);
                  formDataToSubmit.append('_subject', 'Partnership Program Application - Crawfield & Dutton');

                  try {
                    const response = await fetch('https://formsubmit.co/business@crawfieldanddutton.com', {
                      method: 'POST',
                      body: formDataToSubmit,
                    });

                    if (response.ok) {
                      setFormSubmitted(true);
                      setTimeout(() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          linkedin: '',
                          useCase: ''
                        });
                      }, 5000);
                    } else {
                      alert('There was an error submitting your application. Please try again.');
                    }
                  } catch (error) {
                    alert('There was an error submitting your application. Please try again.');
                    console.error('Form submission error:', error);
                  }
                }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/partnership?success=true` : '/#/partnership?success=true'} />
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Use Case *</Label>
                    <Textarea
                      id="useCase"
                      name="useCase"
                      required
                      value={formData.useCase}
                      onChange={handleChange}
                      placeholder="Tell us about your use case and how you plan to use our solutions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-4 bg-brand-gold text-white hover:bg-brand-darkGold text-lg"
                  >
                    Apply to Partner Program <ArrowRight size={20} className="ml-2" />
                  </Button>
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

export default Partnership;
