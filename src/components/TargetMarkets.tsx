import { useState, useEffect, useRef } from 'react';
import { Building, Users, Shield, User, ArrowRight, FileText, BarChart, Wallet, PieChart, Lock, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
const TargetMarkets = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const markets = [{
    id: 'banks',
    icon: <Building size={32} className="text-brand-gold" />,
    title: 'Banks & NBFCs',
    description: 'Enhance credit decisions with comprehensive financial behavior analysis.',
    features: [{
      icon: <FileText size={16} />,
      text: 'Credit scoring enhancement'
    }, {
      icon: <BarChart size={16} />,
      text: 'Risk assessment'
    }, {
      icon: <Shield size={16} />,
      text: 'Fraud detection'
    }]
  }, {
    id: 'insurance',
    icon: <Shield size={32} className="text-brand-gold" />,
    title: 'Insurance Companies',
    description: 'Optimize premium calculations with accurate risk profiling.',
    features: [{
      icon: <PieChart size={16} />,
      text: 'Risk assessment'
    }, {
      icon: <BarChart size={16} />,
      text: 'Premium optimization'
    }, {
      icon: <Shield size={16} />,
      text: 'Fraud prevention'
    }]
  }, {
    id: 'lms-vendors',
    icon: <GraduationCap size={32} className="text-brand-gold" />,
    title: 'LMS Vendors',
    description: 'Offer early warning signals and recovery intelligence to your clients.',
    features: [{
      icon: <FileText size={16} />,
      text: 'Early warning signals'
    }, {
      icon: <BarChart size={16} />,
      text: 'Recovery intelligence'
    }, {
      icon: <Wallet size={16} />,
      text: 'Financial health insights'
    }]
  }];
  return <section id="target-markets" ref={sectionRef} className="py-20 bg-brand-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Tailored for <span className="text-brand-gold">Diverse Needs</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
            Our AI-driven financial intelligence platform serves various market segments with specialized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {markets.map((market, index) => <div key={market.id} className={`feature-card bg-white transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="p-2 w-16 h-16 rounded-2xl bg-brand-cream mb-5 flex items-center justify-center">
                {market.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">
                {market.title}
              </h3>
              
              <p className="text-gray-600 mb-5">
                {market.description}
              </p>
              
              <div className="space-y-3 mb-5">
                {market.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="text-brand-gold">{feature.icon}</div>
                    <span>{feature.text}</span>
                  </div>)}
              </div>
              
              <Link to="/contact" className="inline-flex items-center text-sm font-medium text-brand-gold hover:text-brand-darkGold transition-colors">
                Free Consultation <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>)}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-4xl font-display font-bold text-brand-gold mb-2">5+</p>
            <p className="text-gray-600">Subscribed Clients</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-4xl font-display font-bold text-brand-gold mb-2">99.2%</p>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-4xl font-display font-bold text-brand-gold mb-2">50K+</p>
            <p className="text-gray-600">Customers Monitored</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-4xl font-display font-bold text-brand-gold mb-2">10X</p>
            <p className="text-gray-600">Efficiency Gain</p>
          </div>
        </div>
      </div>
    </section>;
};
export default TargetMarkets;