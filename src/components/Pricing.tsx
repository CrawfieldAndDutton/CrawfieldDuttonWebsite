
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Shield } from 'lucide-react';

const Pricing = () => {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [segment, setSegment] = useState<'b2c' | 'b2b-underwriting' | 'b2b-monitoring'>('b2c');
  const pricingRef = useRef<HTMLDivElement>(null);
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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // B2C Plans
  const b2cPlans = {
    monthly: [
      {
        name: 'Free',
        price: '0',
        description: 'Basic analysis for individuals',
        features: [
          '1 bank statement analysis throughout',
          'Basic analysis metrics',
          'Limited reporting',
          'Email support'
        ],
        cta: 'Get Started',
        highlight: false
      },
      {
        name: 'Standard',
        price: '5',
        description: 'Comprehensive monthly analysis',
        features: [
          '1 bank statement analysis per month',
          'Basic + channeled metrics',
          'EMI, loan, salary analysis',
          'Spending analysis',
          'Savings recommendations',
          'Mutual fund recommendations',
          'Priority email support'
        ],
        cta: 'Subscribe Now',
        highlight: true
      },
      {
        name: 'Premium',
        price: '30',
        description: 'Advanced weekly analysis',
        features: [
          '1 bank statement analysis per week',
          'All metrics and analysis',
          'Extra savings plan',
          'Investment strategies',
          'Tax optimization',
          'Priority phone support',
          'Personal finance dashboard'
        ],
        cta: 'Go Premium',
        highlight: false
      }
    ],
    yearly: [
      {
        name: 'Free',
        price: '0',
        description: 'Basic analysis for individuals',
        features: [
          '1 bank statement analysis throughout',
          'Basic analysis metrics',
          'Limited reporting',
          'Email support'
        ],
        cta: 'Get Started',
        highlight: false
      },
      {
        name: 'Standard',
        price: '50',
        priceSubtext: '/year',
        description: 'Comprehensive monthly analysis',
        features: [
          '1 bank statement analysis per month',
          'Basic + channeled metrics',
          'EMI, loan, salary analysis',
          'Spending analysis',
          'Savings recommendations',
          'Mutual fund recommendations',
          'Investment recommendations',
          'Priority email support'
        ],
        cta: 'Subscribe Now',
        highlight: true
      },
      {
        name: 'Premium',
        price: '250',
        priceSubtext: '/year',
        description: 'Advanced weekly analysis',
        features: [
          '1 bank statement analysis per week',
          'All metrics and analysis',
          'SIF plans',
          'Investment strategies',
          'Tax optimization',
          'Priority phone support',
          'Personal finance dashboard'
        ],
        cta: 'Go Premium',
        highlight: false
      }
    ]
  };

  // B2B Loan Underwriting Plans
  const b2bUnderwritingPlans = [
    {
      name: 'Free Trial',
      price: '0',
      description: 'Try our platform with limited features',
      features: [
        '1 bank statement analysis throughout',
        'Basic analysis metrics',
        'Limited API access',
        'Email support'
      ],
      cta: 'Start Free Trial',
      highlight: false
    },
    {
      name: 'Essential',
      price: '1',
      priceSubtext: 'per statement',
      description: 'Comprehensive analysis for lenders',
      features: [
        'Bank statement analysis',
        'Basic + channeled metrics',
        'EMI, loan, salary analysis',
        'Spending pattern detection',
        'Creditworthiness scoring',
        'API access',
        'Priority support'
      ],
      cta: 'Get Started',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '2',
      priceSubtext: 'per statement',
      description: 'Advanced analysis with all features',
      features: [
        'All metrics and analysis',
        'Mutual fund analysis',
        'Asset evaluation',
        'Risk appetite assessment',
        'Investment strategy analysis',
        'Tax planning insights',
        'Compliance reporting',
        'Premium API access',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  // B2B Loan Monitoring Plans
  const b2bMonitoringPlans = [
    {
      name: 'Free Trial',
      price: '0',
      description: 'Try our monitoring features',
      features: [
        '1 bank statement analysis throughout',
        'Basic analysis metrics',
        'Limited API access',
        'Email support'
      ],
      cta: 'Start Free Trial',
      highlight: false
    },
    {
      name: 'Essential',
      price: '0.5',
      priceSubtext: 'per statement pull',
      description: 'Ongoing monitoring essentials',
      features: [
        'Bank statement analysis',
        'Basic + channeled metrics',
        'EMI, loan tracking',
        'Spending pattern monitoring',
        'Early warning signals',
        'API access',
        'Priority support'
      ],
      cta: 'Get Started',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '1',
      priceSubtext: 'per statement pull',
      description: 'Complete monitoring solution',
      features: [
        'All metrics and analysis',
        'Mutual fund monitoring',
        'Asset fluctuation tracking',
        'Risk appetite changes',
        'Investment strategy shifts',
        'Tax planning updates',
        'Compliance monitoring',
        'Premium API access',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  const getCurrentPlans = () => {
    if (segment === 'b2c') {
      return b2cPlans[plan];
    } else if (segment === 'b2b-underwriting') {
      return b2bUnderwritingPlans;
    } else {
      return b2bMonitoringPlans;
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white" ref={pricingRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Flexible <span className="text-brand-gold">Pricing Plans</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
            Choose the perfect plan that suits your needs, whether you're an individual or a business.
          </p>
        </div>

        {/* Segment Selector */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setSegment('b2c')}
            className={`px-5 py-2 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              segment === 'b2c' 
                ? 'bg-brand-gold text-white shadow-gold' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            For Individuals (B2C)
          </button>
          <button
            onClick={() => setSegment('b2b-underwriting')}
            className={`px-5 py-2 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              segment === 'b2b-underwriting' 
                ? 'bg-brand-gold text-white shadow-gold' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Loan Underwriting (B2B)
          </button>
          <button
            onClick={() => setSegment('b2b-monitoring')}
            className={`px-5 py-2 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              segment === 'b2b-monitoring' 
                ? 'bg-brand-gold text-white shadow-gold' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Loan Monitoring (B2B)
          </button>
        </div>

        {/* Toggle for B2C only */}
        {segment === 'b2c' && (
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setPlan('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  plan === 'monthly' 
                    ? 'bg-white shadow-sm text-brand-navy' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan('yearly')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  plan === 'yearly' 
                    ? 'bg-white shadow-sm text-brand-navy' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Yearly <span className="text-brand-gold text-xs">Save 15%</span>
              </button>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getCurrentPlans().map((pricingPlan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-white ${pricingPlan.highlight ? 'pricing-card-highlight' : ''} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              {pricingPlan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                {pricingPlan.name}
              </h3>
              
              <div className="mb-4">
                <span className="text-4xl font-display font-bold">
                  {pricingPlan.price === '0' ? 'Free' : `$${pricingPlan.price}`}
                </span>
                {pricingPlan.priceSubtext && (
                  <span className="text-gray-500 text-sm ml-1">{pricingPlan.priceSubtext}</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">
                {pricingPlan.description}
              </p>
              
              <div className="space-y-3 mb-8">
                {pricingPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  pricingPlan.highlight
                    ? 'bg-brand-gold text-white hover:bg-brand-darkGold shadow-gold'
                    : 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white'
                }`}
              >
                {pricingPlan.cta}
              </button>
              
              {segment.includes('b2b') && index === 2 && (
                <div className="mt-4 text-center text-sm text-gray-500">
                  Contact us for custom bulk pricing
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield size={20} className="text-brand-gold" />
            <h4 className="text-lg font-medium text-brand-navy">Enterprise Solutions</h4>
          </div>
          <p className="text-gray-600 mb-6">
            Need a custom solution for your organization? Our enterprise plans include dedicated support, custom integrations, and volume-based pricing.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-lightNavy transition-all duration-300"
          >
            Contact Sales <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
