
import { useState, useEffect, useRef } from 'react';
import { Shield, User, Briefcase, PieChart, LineChart, BarChart3, CreditCard, Layers, Database, Lock } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('individuals');
  const featureRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-20 bg-white" ref={featureRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Comprehensive <span className="text-brand-gold">AI Solutions</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
            Our platform leverages artificial intelligence to analyze financial data and provide valuable insights tailored to different stakeholders.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 max-w-2xl mx-auto">
          <TabButton 
            id="individuals" 
            active={activeTab === 'individuals'} 
            onClick={() => setActiveTab('individuals')}
            icon={<User size={18} />}
            text="For Individuals"
          />
          <TabButton 
            id="lenders" 
            active={activeTab === 'lenders'} 
            onClick={() => setActiveTab('lenders')}
            icon={<CreditCard size={18} />}
            text="For Banks & NBFCs"
          />
          <TabButton 
            id="employers" 
            active={activeTab === 'employers'} 
            onClick={() => setActiveTab('employers')}
            icon={<Briefcase size={18} />}
            text="For Employers"
          />
          <TabButton 
            id="insurance" 
            active={activeTab === 'insurance'} 
            onClick={() => setActiveTab('insurance')}
            icon={<Shield size={18} />}
            text="For Insurance"
          />
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            {activeTab === 'individuals' && (
              <TabContent
                title="Personal Financial Insights"
                description="Gain a comprehensive understanding of your financial behavior, spending patterns, and potential areas for improvement through our AI-powered analysis."
                features={[
                  { icon: <PieChart size={20} />, text: "Spending pattern analysis" },
                  { icon: <LineChart size={20} />, text: "Savings recommendations" },
                  { icon: <BarChart3 size={20} />, text: "Investment opportunity identification" },
                  { icon: <Shield size={20} />, text: "Credit profile improvement" }
                ]}
              />
            )}
            
            {activeTab === 'lenders' && (
              <TabContent
                title="Credit Scoring & Risk Assessment"
                description="Enhance your credit decisioning process with our AI-driven analysis that goes beyond traditional credit scores to evaluate applicants' financial behavior."
                features={[
                  { icon: <Layers size={20} />, text: "Multi-dimensional credit scoring" },
                  { icon: <Shield size={20} />, text: "Fraud detection algorithms" },
                  { icon: <Database size={20} />, text: "Historical behavior analysis" },
                  { icon: <Lock size={20} />, text: "Secure data processing" }
                ]}
              />
            )}
            
            {activeTab === 'employers' && (
              <TabContent
                title="Financial Background Verification"
                description="Streamline your hiring process with thorough financial background checks that provide insights into candidates' financial responsibility."
                features={[
                  { icon: <User size={20} />, text: "Candidate financial profile" },
                  { icon: <Shield size={20} />, text: "Risk assessment" },
                  { icon: <Database size={20} />, text: "Historical analysis" },
                  { icon: <Lock size={20} />, text: "Compliant verification process" }
                ]}
              />
            )}
            
            {activeTab === 'insurance' && (
              <TabContent
                title="Risk Profiling & Premium Optimization"
                description="Develop accurate risk profiles for insurance applicants based on their financial behavior and spending patterns to optimize premium calculations."
                features={[
                  { icon: <Shield size={20} />, text: "Behavioral risk assessment" },
                  { icon: <LineChart size={20} />, text: "Premium calculation assistance" },
                  { icon: <Database size={20} />, text: "Claims probability estimation" },
                  { icon: <Lock size={20} />, text: "Fraud detection capabilities" }
                ]}
              />
            )}
          </div>
          
          {/* Image/Illustration */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {activeTab === 'individuals' && (
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Personal Financial Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
            
            {activeTab === 'lenders' && (
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Credit Scoring Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
            
            {activeTab === 'employers' && (
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Employer Verification Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
            
            {activeTab === 'insurance' && (
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Insurance Risk Profiling"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

type TabButtonProps = {
  id: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
};

const TabButton = ({ id, active, onClick, icon, text }: TabButtonProps) => (
  <button
    id={id}
    onClick={onClick}
    className={`flex items-center space-x-2 px-5 py-3 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-brand-gold text-white shadow-gold' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

type TabContentProps = {
  title: string;
  description: string;
  features: { icon: React.ReactNode; text: string }[];
};

const TabContent = ({ title, description, features }: TabContentProps) => (
  <div className="animate-fade-in">
    <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-4">{title}</h3>
    <p className="text-gray-600 mb-8">{description}</p>
    
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="p-2 bg-brand-cream rounded-lg text-brand-gold flex-shrink-0">
            {feature.icon}
          </div>
          <div>
            <p className="font-medium text-gray-800">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
