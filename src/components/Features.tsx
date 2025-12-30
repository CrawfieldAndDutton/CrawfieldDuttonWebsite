
import { useState, useEffect, useRef } from 'react';
import { Shield, User, Briefcase, PieChart, LineChart, BarChart3, CreditCard, Layers, Database, Lock, Smartphone, Zap } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('lenders');
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
          {/* <TabButton 
            id="individuals" 
            active={activeTab === 'individuals'} 
            onClick={() => setActiveTab('individuals')}
            icon={<User size={18} />}
            text="For Individuals"
          /> */}
          <TabButton 
            id="lenders" 
            active={activeTab === 'lenders'} 
            onClick={() => setActiveTab('lenders')}
            icon={<CreditCard size={18} />}
            text="For Banks & NBFCs"
          />
          <TabButton 
            id="insurance" 
            active={activeTab === 'insurance'} 
            onClick={() => setActiveTab('insurance')}
            icon={<Shield size={18} />}
            text="For Insurance"
          />
          <TabButton 
            id="fintechs" 
            active={activeTab === 'fintechs'} 
            onClick={() => setActiveTab('fintechs')}
            icon={<Smartphone size={18} />}
            text="For Fintechs"
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
            
            {activeTab === 'fintechs' && (
              <TabContent
                title="Wealth Management & Lending Solutions"
                description="Empower wealth management and lending fintechs with AI-driven financial intelligence to enhance customer onboarding, risk assessment, and portfolio management."
                features={[
                  { icon: <PieChart size={20} />, text: "Wealth management portfolio insights" },
                  { icon: <BarChart3 size={20} />, text: "Alternative credit scoring for lending" },
                  { icon: <Zap size={20} />, text: "Real-time financial health monitoring" },
                  { icon: <Database size={20} />, text: "Customer behavior analytics" }
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/67607955080161.597768d22e415.gif" 
                alt="Credit Scoring Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
            
            {activeTab === 'insurance' && (
              <img 
                src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyMnp5eDhhM3hkaXpsMm41YjJuN3R2cTBncXk0MWRjYzZ3c3UxMHhpMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l378c04F2fjeZ7vH2/giphy.gif" 
                alt="Insurance Risk Profiling"
                className="w-full h-auto rounded-2xl object-cover"
              />
            )}
            
            {activeTab === 'fintechs' && (
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dDdtaXo3ejZxcmJsNTMzOGo1N2hndTBibGJmc2dyNjRyN3BrMWZndyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/rM0wxzvwsv5g4/giphy.gif" 
                alt="Fintech Solutions"
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
