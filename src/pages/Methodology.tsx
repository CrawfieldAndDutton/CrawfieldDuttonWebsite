
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, FileText, BarChart3, Shield, LineChart, PieChart, Briefcase, DollarSign, Wallet, CreditCard, Activity, Clock, Receipt } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type MetricSectionProps = {
  title: string;
  icon: React.ReactNode;
  metrics: {
    title: string;
    description: string;
  }[];
  isExpanded: boolean;
  toggleExpand: () => void;
};

const MetricSection = ({ title, icon, metrics, isExpanded, toggleExpand }: MetricSectionProps) => (
  <div className="mb-6">
    <div 
      className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-100 cursor-pointer hover:border-brand-lightGold transition-all"
      onClick={toggleExpand}
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-brand-cream rounded-lg text-brand-gold">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-brand-navy">{title}</h3>
      </div>
      <div className="text-brand-navy">
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
    
    {isExpanded && (
      <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in">
        <div className="space-y-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                <div className="h-2 w-2 bg-brand-gold rounded-full"></div>
              </div>
              <div>
                <p className="font-medium text-brand-navy">{metric.title}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

type UseCase = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Methodology = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'bank' | 'demat' | 'gst'>('bank');
  
  // Expand/collapse state for each section
  const [expandedSections, setExpandedSections] = useState({
    income: true,
    spending: false,
    creditworthiness: false,
    savings: false,
    lifestyle: false,
    fraud: false,
    employment: false,
    social: false,
    // Demat sections
    investment: false,
    risk: false,
    discipline: false,
    tax: false,
    preference: false,
    sectoral: false,
    liquidity: false,
    behavioral: false,
    demat_fraud: false,
    // GST sections
    revenue: false,
    compliance: false,
    business_health: false,
    cashflow: false,
    industry: false,
    vendor_customer: false,
    growth: false,
    gst_risk: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bank Statement Analysis Data
  const bankStatementMetrics = [
    {
      id: 'income',
      title: 'Income & Salary Insights',
      icon: <DollarSign size={24} />,
      metrics: [
        {
          title: 'Salary Credit Patterns',
          description: 'Detects job stability, employer identity, and frequency of salary deposits.',
        },
        {
          title: 'Multiple Income Sources',
          description: 'Identifies secondary income streams (freelancing, business income, dividends).',
        },
        {
          title: 'Inconsistent Salary Credits',
          description: 'Flags irregularities that indicate job change, layoffs, or income instability.',
        }
      ]
    },
    {
      id: 'spending',
      title: 'Spending Behavior Analysis',
      icon: <BarChart3 size={24} />,
      metrics: [
        {
          title: 'Recurring Expenses',
          description: 'Rent, EMIs, insurance, utilities, OTT subscriptions.',
        },
        {
          title: 'Luxury vs. Necessity Spending',
          description: 'Differentiates between essential (groceries, bills) and discretionary (luxury shopping, travel).',
        },
        {
          title: 'Cash Withdrawals Frequency',
          description: 'High cash withdrawals may indicate tax evasion or informal earnings.',
        },
        {
          title: 'High-Risk Transactions',
          description: 'Excessive gambling, crypto transactions, or online betting sites.',
        }
      ]
    },
    {
      id: 'creditworthiness',
      title: 'Creditworthiness & Debt Profile',
      icon: <CreditCard size={24} />,
      metrics: [
        {
          title: 'Loan EMI Payments',
          description: 'Identifies active loans (home, car, personal loans).',
        },
        {
          title: 'Missed or Late EMI Payments',
          description: 'Indicates financial stress or potential default risk.',
        },
        {
          title: 'Credit Card Usage & Bill Payments',
          description: 'Tracks credit utilization and repayment discipline.',
        },
        {
          title: 'Multiple Loan Enquiries',
          description: 'Frequent applications may indicate credit distress.',
        }
      ]
    },
    {
      id: 'savings',
      title: 'Savings & Investment Behavior',
      icon: <Wallet size={24} />,
      metrics: [
        {
          title: 'Savings Pattern',
          description: 'Frequency & size of savings deposits in bank accounts.',
        },
        {
          title: 'Fixed Deposits (FDs) & Recurring Deposits (RDs)',
          description: 'Indicates financial planning habits.',
        },
        {
          title: 'Mutual Funds & Stock Market Transactions',
          description: 'Reflects risk appetite and investment strategy.',
        },
        {
          title: 'Retirement & Insurance Premiums',
          description: 'Sign of long-term financial stability.',
        }
      ]
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Financial Stability Indicators',
      icon: <Activity size={24} />,
      metrics: [
        {
          title: 'High-End Brand & Luxury Spends',
          description: 'Frequent high-end purchases indicate affluent lifestyle.',
        },
        {
          title: 'Frequent Travel Expenses',
          description: 'Identifies international vs. domestic travel, business vs. leisure trips.',
        },
        {
          title: 'Utility & Subscription Payments',
          description: 'Netflix, Amazon, Zomato Gold subscriptions reflect lifestyle choices.',
        },
        {
          title: 'Large One-Time Transactions',
          description: 'Real estate, luxury car down payments, or business investments.',
        }
      ]
    },
    {
      id: 'fraud',
      title: 'Fraud Detection & Risk Assessment',
      icon: <Shield size={24} />,
      metrics: [
        {
          title: 'Sudden Large Deposits Without Justification',
          description: 'Potential money laundering red flag.',
        },
        {
          title: 'Frequent Small Transactions in a Short Period',
          description: 'Possible loan app abuse or fraud.',
        },
        {
          title: 'High Volume of Third-Party Transfers',
          description: 'May indicate illegal financial activity or Hawala transactions.',
        },
        {
          title: 'Multiple Account Transfers Between Own Accounts',
          description: 'Potential tax evasion tactics.',
        }
      ]
    },
    {
      id: 'employment',
      title: 'Employment & Business Intelligence',
      icon: <Briefcase size={24} />,
      metrics: [
        {
          title: 'Employer Identity',
          description: 'Detects salary credits from known companies (TCS, Infosys, SBI, etc.).',
        },
        {
          title: 'Freelancer or Consultant Activity',
          description: 'Repeated payments from multiple businesses.',
        },
        {
          title: 'GST-Linked Business Transactions',
          description: 'Identifies business income through tax payments.',
        },
        {
          title: 'Vendor & Client Payments',
          description: 'Useful for business profiling & B2B credit analysis.',
        }
      ]
    },
    {
      id: 'social',
      title: 'Social & Relationship Insights',
      icon: <PieChart size={24} />,
      metrics: [
        {
          title: 'Spending on Gifting & Donations',
          description: 'Family expenses, charity donations, or personal gifts.',
        },
        {
          title: 'Frequent UPI Transactions to the Same Account',
          description: 'Could indicate a financial dependency or undisclosed partnership.',
        },
        {
          title: 'Spouse or Family Linked Transactions',
          description: 'Bank transfers to a spouse or dependent indicate financial responsibility.',
        }
      ]
    }
  ];

  // Demat Account Analysis Data
  const dematStatementMetrics = [
    {
      id: 'investment',
      title: 'Investment Profile & Asset Allocation',
      icon: <PieChart size={24} />,
      metrics: [
        {
          title: 'Total Mutual Fund Holdings',
          description: 'Tracks overall portfolio value & diversification.',
        },
        {
          title: 'Asset Class Distribution',
          description: 'Equity, Debt, Hybrid, Gold, International Funds.',
        },
        {
          title: 'Fund Categories Invested In',
          description: 'Large-cap, Mid-cap, Small-cap, Thematic, Sectoral, ELSS (Tax Saving).',
        },
        {
          title: 'Direct vs. Regular Investment',
          description: 'Identifies cost-conscious investors (Direct) vs. advisory-dependent investors (Regular).',
        }
      ]
    },
    {
      id: 'risk',
      title: 'Risk Appetite & Investment Strategy',
      icon: <Activity size={24} />,
      metrics: [
        {
          title: 'Equity vs. Debt Ratio',
          description: 'Higher equity allocation → Aggressive investor; Higher debt allocation → Conservative investor.',
        },
        {
          title: 'Volatility Tolerance',
          description: 'Investing in high-risk small-cap funds vs. stable large-cap funds.',
        },
        {
          title: 'SIP vs. Lump Sum Investments',
          description: 'Regular SIPs indicate disciplined investing; Lump sum may indicate surplus cash flow.',
        },
        {
          title: 'Holding Period Analysis',
          description: 'Short-term trading vs. long-term wealth building.',
        }
      ]
    },
    {
      id: 'discipline',
      title: 'Financial Discipline & Wealth Growth',
      icon: <LineChart size={24} />,
      metrics: [
        {
          title: 'Consistency of Investments',
          description: 'Regular SIPs show financial discipline.',
        },
        {
          title: 'Redemption Patterns',
          description: 'Frequent redemptions may indicate financial instability.',
        },
        {
          title: 'Portfolio Growth Rate',
          description: 'Tracks CAGR (Compound Annual Growth Rate) of investments.',
        },
        {
          title: 'Dividend Reinvestment vs. Payout',
          description: 'Reinvestment indicates compounding mindset; Payout suggests cash flow needs.',
        }
      ]
    },
    {
      id: 'tax',
      title: 'Tax Planning & Compliance',
      icon: <FileText size={24} />,
      metrics: [
        {
          title: 'ELSS Investments',
          description: 'Identifies tax-saving strategies under Section 80C.',
        },
        {
          title: 'Capital Gains Realization',
          description: 'Short-term vs. Long-term gains & tax liability.',
        },
        {
          title: 'Exit Load & Tax Efficiency Awareness',
          description: 'Tracks investor\'s understanding of tax implications.',
        }
      ]
    },
    {
      id: 'preference',
      title: 'Fund House & AMC Preference',
      icon: <Briefcase size={24} />,
      metrics: [
        {
          title: 'Preferred AMCs',
          description: 'Top mutual fund houses investor trusts (e.g., SBI, HDFC, ICICI, Nippon, Axis).',
        },
        {
          title: 'Multiple AMC Diversification',
          description: 'Investing across fund houses reduces risk concentration.',
        },
        {
          title: 'Expense Ratio Awareness',
          description: 'Preference for low-cost index funds or passive investing.',
        }
      ]
    },
    {
      id: 'sectoral',
      title: 'Sectoral & Thematic Exposure',
      icon: <BarChart3 size={24} />,
      metrics: [
        {
          title: 'Technology, Pharma, Banking, Infrastructure, ESG Funds',
          description: 'Identifies sectoral preferences & investment foresight.',
        },
        {
          title: 'International Fund Investments',
          description: 'Exposure to global markets via Nasdaq, S&P 500, or China-based funds.',
        },
        {
          title: 'Gold & Commodity Funds',
          description: 'Investment in alternative assets like gold ETFs or commodity-linked funds.',
        }
      ]
    },
    {
      id: 'liquidity',
      title: 'Liquidity & Emergency Preparedness',
      icon: <Wallet size={24} />,
      metrics: [
        {
          title: 'Liquid & Overnight Fund Investments',
          description: 'Indicates short-term cash parking behavior.',
        },
        {
          title: 'Emergency Fund Setup',
          description: 'Investments in stable, low-risk funds for financial security.',
        },
        {
          title: 'Debt Fund Holdings',
          description: 'Higher allocation signals preference for fixed-income security.',
        }
      ]
    },
    {
      id: 'behavioral',
      title: 'Behavioral & Psychological Insights',
      icon: <Activity size={24} />,
      metrics: [
        {
          title: 'High Redemption in Market Crashes',
          description: 'Panic selling behavior vs. long-term conviction.',
        },
        {
          title: 'Averaging Down Strategy',
          description: 'Buying more in downturns suggests a seasoned investor.',
        },
        {
          title: 'Chasing High Returns',
          description: 'Investing in past high performers vs. stable diversified strategy.',
        },
        {
          title: 'Portfolio Overlap',
          description: 'Investing in similar funds across AMCs without true diversification.',
        }
      ]
    },
    {
      id: 'demat_fraud',
      title: 'Fraud & Risk Indicators',
      icon: <Shield size={24} />,
      metrics: [
        {
          title: 'Unusual Large Transactions',
          description: 'Sudden high-value investments could indicate money laundering or tax evasion.',
        },
        {
          title: 'Frequent Portfolio Churn',
          description: 'Rapid switching may signal insider trading or speculative trading behavior.',
        },
        {
          title: 'Dormant vs. Active Investments',
          description: 'Long inactivity followed by large investments may indicate hidden income sources.',
        }
      ]
    }
  ];

  const bankUseCases: UseCase[] = [
    {
      icon: <Briefcase size={24} className="text-brand-gold" />,
      title: "Banks & NBFCs",
      description: "Loan approvals, fraud checks, alternative credit scoring."
    },
    {
      icon: <Briefcase size={24} className="text-brand-gold" />,
      title: "Employers & HR",
      description: "Financial background checks & stability analysis."
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: "Insurance Companies",
      description: "Risk assessment & premium pricing."
    },
    {
      icon: <Wallet size={24} className="text-brand-gold" />,
      title: "Fintech Apps",
      description: "Personalized financial planning, wealth management."
    }
  ];

  const dematUseCases: UseCase[] = [
    {
      icon: <Briefcase size={24} className="text-brand-gold" />,
      title: "Banks & NBFCs",
      description: "Alternative credit scoring based on investments."
    },
    {
      icon: <LineChart size={24} className="text-brand-gold" />,
      title: "Wealth Management Firms",
      description: "Personalized financial advisory & asset allocation."
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: "Insurance Companies",
      description: "Risk profiling for premium calculation."
    },
    {
      icon: <Activity size={24} className="text-brand-gold" />,
      title: "Fintech & Robo-Advisors",
      description: "AI-driven portfolio optimization & tax planning."
    }
  ];

  // GST Data Analysis Data
  const gstDataMetrics = [
    {
      id: 'revenue',
      title: 'Revenue & Turnover Analysis',
      icon: <DollarSign size={24} />,
      metrics: [
        {
          title: 'Monthly/Quarterly Revenue Trends',
          description: 'Tracks business growth patterns, seasonal variations, and revenue consistency over time.',
        },
        {
          title: 'Annual Turnover Assessment',
          description: 'Calculates total business turnover to assess scale and eligibility for loan amounts.',
        },
        {
          title: 'Revenue Growth Rate (YoY/QoQ)',
          description: 'Identifies expanding businesses vs. declining or stagnant operations.',
        },
        {
          title: 'Revenue Concentration Risk',
          description: 'Detects over-dependence on single customers or products indicating business vulnerability.',
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Tax Compliance & Payment Patterns',
      icon: <Shield size={24} />,
      metrics: [
        {
          title: 'GST Filing Regularity',
          description: 'On-time filings indicate disciplined business operations and compliance culture.',
        },
        {
          title: 'GST Payment History',
          description: 'Timely tax payments reflect cash flow management and financial discipline.',
        },
        {
          title: 'Late Filing or Payment Penalties',
          description: 'Frequent delays may indicate cash flow stress or operational inefficiencies.',
        },
        {
          title: 'Input Tax Credit (ITC) Utilization',
          description: 'Efficient ITC claims show proper vendor management and cost optimization.',
        },
        {
          title: 'GST Return Reconciliation',
          description: 'Mismatches between GSTR-1, GSTR-2A, and GSTR-3B indicate potential discrepancies.',
        }
      ]
    },
    {
      id: 'business_health',
      title: 'Business Health Indicators',
      icon: <Activity size={24} />,
      metrics: [
        {
          title: 'Profit Margin Analysis',
          description: 'Gross and net profit margins derived from GST data indicate business profitability.',
        },
        {
          title: 'Operating Efficiency',
          description: 'Ratio of output to input taxes reflects operational efficiency and cost management.',
        },
        {
          title: 'Business Continuity',
          description: 'Consistent GST filings across months indicate stable, ongoing operations.',
        },
        {
          title: 'Scale of Operations',
          description: 'Turnover thresholds (small, medium, large) help categorize business size for risk assessment.',
        }
      ]
    },
    {
      id: 'cashflow',
      title: 'Cash Flow Analysis',
      icon: <Wallet size={24} />,
      metrics: [
        {
          title: 'Sales-to-Payment Cycle',
          description: 'Time gap between invoice generation (GSTR-1) and payment receipt indicates cash flow health.',
        },
        {
          title: 'Working Capital Requirements',
          description: 'GST data helps estimate working capital needs based on revenue patterns.',
        },
        {
          title: 'Seasonal Cash Flow Patterns',
          description: 'Identifies peak and lean periods for better loan repayment scheduling.',
        },
        {
          title: 'Outstanding Receivables Estimation',
          description: 'Gap between sales invoices and actual collections indicates receivables management.',
        }
      ]
    },
    {
      id: 'industry',
      title: 'Industry & Sector Analysis',
      icon: <BarChart3 size={24} />,
      metrics: [
        {
          title: 'Business Sector Classification',
          description: 'GST HSN/SAC codes identify industry type (manufacturing, services, trading, etc.).',
        },
        {
          title: 'Industry Growth Trends',
          description: 'Comparison with sector benchmarks helps assess business performance relative to peers.',
        },
        {
          title: 'Product/Service Mix',
          description: 'Diversification across multiple HSN codes indicates business resilience.',
        },
        {
          title: 'Geographic Market Presence',
          description: 'Inter-state vs. intra-state transactions reveal market reach and expansion.',
        }
      ]
    },
    {
      id: 'vendor_customer',
      title: 'Vendor & Customer Analysis',
      icon: <Briefcase size={24} />,
      metrics: [
        {
          title: 'Vendor Base Stability',
          description: 'Consistent vendor relationships indicate reliable supply chain and business stability.',
        },
        {
          title: 'Customer Concentration Risk',
          description: 'Over-reliance on few customers increases default risk if key clients leave.',
        },
        {
          title: 'B2B vs. B2C Transaction Mix',
          description: 'B2B businesses typically have more predictable revenue streams than B2C.',
        },
        {
          title: 'Payment Terms & Credit Period',
          description: 'Analysis of invoice dates vs. payment dates reveals credit terms and collection efficiency.',
        },
        {
          title: 'Vendor Payment Patterns',
          description: 'Regular vendor payments indicate healthy supplier relationships and cash flow.',
        }
      ]
    },
    {
      id: 'growth',
      title: 'Growth Trends & Expansion Indicators',
      icon: <LineChart size={24} />,
      metrics: [
        {
          title: 'Revenue Growth Trajectory',
          description: 'Sustained growth over multiple quarters indicates business expansion and scalability.',
        },
        {
          title: 'New Product/Service Lines',
          description: 'Introduction of new HSN codes shows business diversification and innovation.',
        },
        {
          title: 'Market Expansion',
          description: 'Increase in inter-state transactions indicates geographic expansion.',
        },
        {
          title: 'Investment in Capital Goods',
          description: 'High-value purchases with ITC claims indicate business investment and growth plans.',
        },
        {
          title: 'Capacity Utilization Trends',
          description: 'Increasing output taxes relative to input taxes suggests better capacity utilization.',
        }
      ]
    },
    {
      id: 'gst_risk',
      title: 'Risk Assessment & Red Flags',
      icon: <Shield size={24} />,
      metrics: [
        {
          title: 'Sudden Revenue Decline',
          description: 'Sharp drop in turnover may indicate business distress, market challenges, or operational issues.',
        },
        {
          title: 'Irregular Filing Patterns',
          description: 'Frequent late filings or missing returns suggest financial or operational stress.',
        },
        {
          title: 'High ITC Mismatches',
          description: 'Discrepancies between claimed and available ITC may indicate vendor payment issues or fraud.',
        },
        {
          title: 'Frequent Amendment Returns',
          description: 'Multiple corrections to GST returns may indicate accounting errors or manipulation attempts.',
        },
        {
          title: 'Zero or Minimal Tax Liability',
          description: 'Consistently zero tax payments despite high turnover may indicate tax evasion or underreporting.',
        },
        {
          title: 'Suspicious Transaction Patterns',
          description: 'Unusual spikes, circular transactions, or fake invoices detected through data analytics.',
        }
      ]
    }
  ];

  const gstUseCases: UseCase[] = [
    {
      icon: <Briefcase size={24} className="text-brand-gold" />,
      title: "Banks & NBFCs",
      description: "Business loan underwriting, credit risk assessment, and loan monitoring."
    },
    {
      icon: <FileText size={24} className="text-brand-gold" />,
      title: "Credit Rating Agencies",
      description: "Enhanced business credit scoring and risk profiling."
    },
    {
      icon: <BarChart3 size={24} className="text-brand-gold" />,
      title: "Invoice Financing Platforms",
      description: "Verify business authenticity and assess invoice quality for financing."
    },
    {
      icon: <Shield size={24} className="text-brand-gold" />,
      title: "Trade Finance Providers",
      description: "Evaluate business health for supply chain financing and trade credit."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our <span className="text-brand-gold">Methodology</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Understand how our AI-driven analysis extracts valuable insights from financial data to provide comprehensive intelligence.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 max-w-2xl mx-auto">
            <button
              onClick={() => setActiveTab('bank')}
              className={`flex items-center space-x-2 px-5 py-3 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'bank' 
                  ? 'bg-brand-gold text-white shadow-gold' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText size={18} />
              <span>Bank Statement Analysis</span>
            </button>
            <button
              onClick={() => setActiveTab('gst')}
              className={`flex items-center space-x-2 px-5 py-3 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'gst' 
                  ? 'bg-brand-gold text-white shadow-gold' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Receipt size={18} />
              <span>GST Data Analysis</span>
            </button>
            <button
              onClick={() => setActiveTab('demat')}
              className={`relative flex items-center space-x-2 px-5 py-3 m-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'demat' 
                  ? 'bg-brand-gold text-white shadow-gold' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-md z-10">
                <Clock size={10} />
                <span>Coming Soon</span>
              </div>
              <LineChart size={18} />
              <span>Demat Account Analysis</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'bank' ? (
              <>
                <div className="mb-8 bg-brand-cream/30 p-6 rounded-xl border border-brand-lightGold">
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">
                    Bank Account Statement Analysis
                  </h2>
                  <p className="text-gray-700">
                    Analyzing an Indian bank statement can reveal key Personal Identity Intelligence (PII) metrics that 
                    help assess financial behavior, risk profile, and identity insights. Our AI-powered system examines 
                    transactions, patterns, and behaviors to extract valuable insights.
                  </p>
                </div>

                <div className="space-y-4">
                  {bankStatementMetrics.map(section => (
                    <MetricSection 
                      key={section.id}
                      title={section.title}
                      icon={section.icon}
                      metrics={section.metrics}
                      isExpanded={expandedSections[section.id as keyof typeof expandedSections]}
                      toggleExpand={() => toggleSection(section.id as keyof typeof expandedSections)}
                    />
                  ))}
                </div>

                {/* Use Cases */}
                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-6 text-center">
                    How This Data is Used
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bankUseCases.map((useCase, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-brand-cream rounded-lg text-brand-gold flex-shrink-0">
                            {useCase.icon}
                          </div>
                          <h4 className="font-medium text-brand-navy">{useCase.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : activeTab === 'gst' ? (
              <>
                <div className="mb-8 bg-brand-cream/30 p-6 rounded-xl border border-brand-lightGold">
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">
                    GST Data Analysis
                  </h2>
                  <p className="text-gray-700">
                    GST (Goods and Services Tax) data provides comprehensive insights into a business's financial health, 
                    revenue patterns, compliance behavior, and operational efficiency. Our AI-powered analysis extracts 
                    critical metrics from GST returns to enable effective loan monitoring and risk assessment for businesses.
                  </p>
                </div>

                <div className="space-y-4">
                  {gstDataMetrics.map(section => (
                    <MetricSection 
                      key={section.id}
                      title={section.title}
                      icon={section.icon}
                      metrics={section.metrics}
                      isExpanded={expandedSections[section.id as keyof typeof expandedSections]}
                      toggleExpand={() => toggleSection(section.id as keyof typeof expandedSections)}
                    />
                  ))}
                </div>

                {/* Use Cases */}
                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-6 text-center">
                    How This Data is Used
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {gstUseCases.map((useCase, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-brand-cream rounded-lg text-brand-gold flex-shrink-0">
                            {useCase.icon}
                          </div>
                          <h4 className="font-medium text-brand-navy">{useCase.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 bg-brand-cream/30 p-6 rounded-xl border border-brand-lightGold">
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">
                    Demat Account Analysis (Mutual Funds)
                  </h2>
                  <p className="text-gray-700">
                    Analyzing an Indian Mutual Fund Statement can provide Personal Identity Intelligence (PII) metrics 
                    related to an individual's investment behavior, financial stability, and risk appetite. Our AI 
                    algorithms extract valuable insights from these statements.
                  </p>
                </div>

                <div className="space-y-4">
                  {dematStatementMetrics.map(section => (
                    <MetricSection 
                      key={section.id}
                      title={section.title}
                      icon={section.icon}
                      metrics={section.metrics}
                      isExpanded={expandedSections[section.id as keyof typeof expandedSections]}
                      toggleExpand={() => toggleSection(section.id as keyof typeof expandedSections)}
                    />
                  ))}
                </div>

                {/* Use Cases */}
                <div className="mt-12">
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-6 text-center">
                    Use Cases for Businesses & Individuals
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {dematUseCases.map((useCase, index) => (
                      <div 
                        key={index} 
                        className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-brand-cream rounded-lg text-brand-gold flex-shrink-0">
                            {useCase.icon}
                          </div>
                          <h4 className="font-medium text-brand-navy">{useCase.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Methodology;
