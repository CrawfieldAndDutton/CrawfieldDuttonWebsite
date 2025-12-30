
import { useState, useEffect, useRef } from 'react';
import { Check, ChevronDown, ChevronUp, Calculator, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Checkbox } from '../components/ui/checkbox';
import { Slider } from '../components/ui/slider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isCustomFormSubmitted, setIsCustomFormSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  // Data Pipes State
  const [individualMonitoring, setIndividualMonitoring] = useState(false);
  const [individualBankStatement, setIndividualBankStatement] = useState(false);
  const [individualCreditReport, setIndividualCreditReport] = useState(false);
  const [businessMonitoring, setBusinessMonitoring] = useState(false);
  const [businessGST, setBusinessGST] = useState(false);
  const [businessBankStatement, setBusinessBankStatement] = useState(false);
  const [businessCreditReport, setBusinessCreditReport] = useState(false);

  // Customer & Sync State
  const [customersPerMonth, setCustomersPerMonth] = useState(1000);
  const [avgSyncPerCustomer, setAvgSyncPerCustomer] = useState(1);

  // Dashboard Features State
  const [positiveEarlyWarning, setPositiveEarlyWarning] = useState(false);
  const [customerRiskInsights, setCustomerRiskInsights] = useState(false);
  const [dashboardXAI, setDashboardXAI] = useState(false);

  // Omnichannel Recovery State
  const [callEnabled, setCallEnabled] = useState(false);
  const [callMinutes, setCallMinutes] = useState(1000);
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);
  const [whatsappMessages, setWhatsappMessages] = useState(1000);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [emailCount, setEmailCount] = useState(1000);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [smsCount, setSmsCount] = useState(1000);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if form was submitted successfully
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsFormSubmitted(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    } else if (urlParams.get('success') === 'custom') {
      setIsCustomFormSubmitted(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Format number with Indian numbering system
  const formatNumber = (num: number): string => {
    if (num >= 100000) {
      return `${(num / 100000).toFixed(1)}L`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  // Calculate pricing estimate
  const calculateEstimate = (): number => {
    let total = 0;

    // Base monitoring cost per customer per sync
    const baseCostPerSync = 5; // ₹5 per sync
    const totalSyncs = customersPerMonth * avgSyncPerCustomer;
    total += totalSyncs * baseCostPerSync;

    // Individual Loan Monitoring
    if (individualMonitoring) {
      if (individualBankStatement) {
        total += totalSyncs * 2; // ₹2 per bank statement analysis
      }
      if (individualCreditReport) {
        total += customersPerMonth * 10; // ₹10 per credit report
      }
    }

    // Business Loan Monitoring
    if (businessMonitoring) {
      if (businessGST) {
        total += totalSyncs * 3; // ₹3 per GST analysis
      }
      if (businessBankStatement) {
        total += totalSyncs * 2; // ₹2 per bank statement analysis
      }
      if (businessCreditReport) {
        total += customersPerMonth * 10; // ₹10 per credit report
      }
    }

    // Data accuracy bonus (if both pipes enabled)
    if (individualMonitoring && businessMonitoring) {
      total *= 0.95; // 5% discount for higher accuracy
    }

    // Dashboard Features
    if (positiveEarlyWarning) {
      total += customersPerMonth * 1; // ₹1 per customer
    }
    if (customerRiskInsights) {
      total += customersPerMonth * 2; // ₹2 per customer
    }
    if (dashboardXAI) {
      total += customersPerMonth * 5; // ₹5 per customer
    }

    // Omnichannel Recovery
    if (callEnabled) {
      total += callMinutes * 0.5; // ₹0.5 per minute
    }
    if (whatsappEnabled) {
      total += whatsappMessages * 0.1; // ₹0.1 per message
    }
    if (emailEnabled) {
      total += emailCount * 0.2; // ₹0.2 per email
    }
    if (smsEnabled) {
      total += smsCount * 0.3; // ₹0.3 per SMS
    }

    // Volume discounts
    if (customersPerMonth >= 100000) {
      total *= 0.85; // 15% discount for 1L+ customers
    } else if (customersPerMonth >= 50000) {
      total *= 0.90; // 10% discount for 50K+ customers
    } else if (customersPerMonth >= 10000) {
      total *= 0.95; // 5% discount for 10K+ customers
    }

    return Math.round(total);
  };

  const estimate = calculateEstimate();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Collect all pricing calculator data
  const getPricingData = () => {
    return {
      // Data Pipes
      individualMonitoring,
      individualBankStatement,
      individualCreditReport,
      businessMonitoring,
      businessGST,
      businessBankStatement,
      businessCreditReport,
      // Customer & Sync
      customersPerMonth,
      avgSyncPerCustomer,
      totalSyncs: customersPerMonth * avgSyncPerCustomer,
      // Dashboard Features
      positiveEarlyWarning,
      customerRiskInsights,
      dashboardXAI,
      // Omnichannel Recovery
      callEnabled,
      callMinutes,
      whatsappEnabled,
      whatsappMessages,
      emailEnabled,
      emailCount,
      smsEnabled,
      smsCount,
      // Estimate
      estimate
    };
  };

  const handleRevealPrice = () => {
    setIsDialogOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    // Form will submit naturally to formsubmit.co with all data
    setIsFormSubmitted(true);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-28 pb-20" ref={pricingRef}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Flexible <span className="text-brand-gold">Pricing Calculator</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Configure your loan monitoring solution and get an instant price estimate based on your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              <form className="space-y-8">
                {/* Data Pipes Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-display font-bold text-brand-navy mb-4">Data Pipes</h2>
                  
                  {/* Individual Loan Monitoring */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Checkbox
                        id="individual-monitoring"
                        checked={individualMonitoring}
                        onCheckedChange={(checked) => {
                          setIndividualMonitoring(checked as boolean);
                          if (!checked) {
                            setIndividualBankStatement(false);
                            setIndividualCreditReport(false);
                          }
                        }}
                        className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      />
                      <label htmlFor="individual-monitoring" className="text-sm font-medium text-gray-900 cursor-pointer">
                        Individual Loan Monitoring
                      </label>
                    </div>
                    {individualMonitoring && (
                      <div className="ml-8 space-y-2">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="individual-bank"
                            checked={individualBankStatement}
                            onCheckedChange={(checked) => setIndividualBankStatement(checked as boolean)}
                            className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <label htmlFor="individual-bank" className="text-sm text-gray-700 cursor-pointer">
                            Bank Statement Analysis (via Account Aggregator)
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="individual-credit"
                            checked={individualCreditReport}
                            onCheckedChange={(checked) => setIndividualCreditReport(checked as boolean)}
                            className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <label htmlFor="individual-credit" className="text-sm text-gray-700 cursor-pointer">
                            Credit Report Analysis (via Credit Bureau)
                          </label>
                        </div>
                      </div>
                    )}
          </div>

                  {/* Business Loan Monitoring */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Checkbox
                        id="business-monitoring"
                        checked={businessMonitoring}
                        onCheckedChange={(checked) => {
                          setBusinessMonitoring(checked as boolean);
                          if (!checked) {
                            setBusinessGST(false);
                            setBusinessBankStatement(false);
                            setBusinessCreditReport(false);
                          }
                        }}
                        className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      />
                      <label htmlFor="business-monitoring" className="text-sm font-medium text-gray-900 cursor-pointer">
                        Business Loan Monitoring
                      </label>
                    </div>
                    {businessMonitoring && (
                      <div className="ml-8 space-y-2">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="business-gst"
                            checked={businessGST}
                            onCheckedChange={(checked) => setBusinessGST(checked as boolean)}
                            className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <label htmlFor="business-gst" className="text-sm text-gray-700 cursor-pointer">
                            GST Report Analysis (via Account Aggregator)
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="business-bank"
                            checked={businessBankStatement}
                            onCheckedChange={(checked) => setBusinessBankStatement(checked as boolean)}
                            className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <label htmlFor="business-bank" className="text-sm text-gray-700 cursor-pointer">
                            Bank Statement Analysis (via Account Aggregator)
                          </label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="business-credit"
                            checked={businessCreditReport}
                            onCheckedChange={(checked) => setBusinessCreditReport(checked as boolean)}
                            className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                          />
                          <label htmlFor="business-credit" className="text-sm text-gray-700 cursor-pointer">
                            Credit Report Analysis (via Credit Bureau)
                          </label>
              </div>
            </div>
                    )}
                  </div>

                  {individualMonitoring && businessMonitoring && (
                    <div className="mt-4 p-3 bg-brand-cream/30 rounded-lg border border-brand-lightGold">
                      <p className="text-xs text-gray-600">
                        <strong>Note:</strong> With both pipes enabled, data accuracy will be very high from the Business Rule Engine.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Number of Customers Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-display font-bold text-brand-navy mb-4">
                    Number of Customers Monitored per Month
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Customers</span>
                        <span className="text-lg font-semibold text-brand-navy">{formatNumber(customersPerMonth)}</span>
                      </div>
                      <Slider
                        value={[customersPerMonth]}
                        onValueChange={(value) => setCustomersPerMonth(value[0])}
                        min={100}
                        max={2000000}
                        step={100}
                        className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>100</span>
                        <span>20L</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Average Sync Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-display font-bold text-brand-navy mb-4">
                    Average Sync per Customer Each Month
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Syncs per Customer</span>
                        <span className="text-lg font-semibold text-brand-navy">{avgSyncPerCustomer}</span>
                      </div>
                      <Slider
                        value={[avgSyncPerCustomer]}
                        onValueChange={(value) => setAvgSyncPerCustomer(value[0])}
                        min={1}
                        max={12}
                        step={1}
                        className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>1</span>
                        <span>12</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      <strong>Note:</strong> Number of syncs is done on basis of risk levels of customers. Consider the average count for best price.
                    </p>
                  </div>
                </div>

                {/* Dashboard Features Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-display font-bold text-brand-navy mb-4">Dashboard Features</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="borrower-watchlist" checked={true} disabled />
                      <label htmlFor="borrower-watchlist" className="text-sm text-gray-600 cursor-not-allowed">
                        Borrower Watchlist
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="risk-profiling" checked={true} disabled />
                      <label htmlFor="risk-profiling" className="text-sm text-gray-600 cursor-not-allowed">
                        Customer Risk Profiling Statistics
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="negative-ews" checked={true} disabled />
                      <label htmlFor="negative-ews" className="text-sm text-gray-600 cursor-not-allowed">
                        Negative Early Warning Signals
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="positive-ews"
                        checked={positiveEarlyWarning}
                        onCheckedChange={(checked) => setPositiveEarlyWarning(checked as boolean)}
                        className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      />
                      <label htmlFor="positive-ews" className="text-sm text-gray-700 cursor-pointer">
                        Positive Early Warning Signals
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="risk-insights"
                        checked={customerRiskInsights}
                        onCheckedChange={(checked) => setCustomerRiskInsights(checked as boolean)}
                        className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      />
                      <label htmlFor="risk-insights" className="text-sm text-gray-700 cursor-pointer">
                        Customer Risk Insights
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="dashboard-ai"
                        checked={dashboardXAI}
                        onCheckedChange={(checked) => setDashboardXAI(checked as boolean)}
                        className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                      />
                      <label htmlFor="dashboard-ai" className="text-sm text-gray-700 cursor-pointer">
                        DashboardX AI Risk Manager
                      </label>
                    </div>
                  </div>
                </div>

                {/* Omnichannel Recovery Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h2 className="text-xl font-display font-bold text-brand-navy mb-4">Omnichannel Recovery</h2>
                  
                  <div className="space-y-6">
                    {/* Call */}
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Checkbox
                          id="call"
                          checked={callEnabled}
                          onCheckedChange={(checked) => setCallEnabled(checked as boolean)}
                          className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                        />
                        <label htmlFor="call" className="text-sm font-medium text-gray-900 cursor-pointer">
                          Call
                        </label>
                      </div>
                      {callEnabled && (
                        <div className="ml-8 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Minutes per Month</span>
                            <span className="text-lg font-semibold text-brand-navy">{formatNumber(callMinutes)}</span>
                          </div>
                          <Slider
                            value={[callMinutes]}
                            onValueChange={(value) => setCallMinutes(value[0])}
                            min={100}
                            max={10000}
                            step={100}
                            className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>100</span>
                            <span>10K</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Checkbox
                          id="whatsapp"
                          checked={whatsappEnabled}
                          onCheckedChange={(checked) => setWhatsappEnabled(checked as boolean)}
                          className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                        />
                        <label htmlFor="whatsapp" className="text-sm font-medium text-gray-900 cursor-pointer">
                          WhatsApp
                        </label>
                      </div>
                      {whatsappEnabled && (
                        <div className="ml-8 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Messages per Month</span>
                            <span className="text-lg font-semibold text-brand-navy">{formatNumber(whatsappMessages)}</span>
                          </div>
                          <Slider
                            value={[whatsappMessages]}
                            onValueChange={(value) => setWhatsappMessages(value[0])}
                            min={100}
                            max={1000000}
                            step={100}
                            className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>100</span>
                            <span>10L</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Checkbox
                          id="email"
                          checked={emailEnabled}
                          onCheckedChange={(checked) => setEmailEnabled(checked as boolean)}
                          className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                        />
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 cursor-pointer">
                          Email
                        </label>
                      </div>
                      {emailEnabled && (
                        <div className="ml-8 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">Emails per Month</span>
                            <span className="text-lg font-semibold text-brand-navy">{formatNumber(emailCount)}</span>
                          </div>
                          <Slider
                            value={[emailCount]}
                            onValueChange={(value) => setEmailCount(value[0])}
                            min={100}
                            max={100000}
                            step={100}
                            className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>100</span>
                            <span>1L</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* SMS */}
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <Checkbox
                          id="sms"
                          checked={smsEnabled}
                          onCheckedChange={(checked) => setSmsEnabled(checked as boolean)}
                          className="data-[state=checked]:bg-brand-gold data-[state=checked]:border-brand-gold"
                        />
                        <label htmlFor="sms" className="text-sm font-medium text-gray-900 cursor-pointer">
                          SMS
                        </label>
                      </div>
                      {smsEnabled && (
                        <div className="ml-8 space-y-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">SMS per Month</span>
                            <span className="text-lg font-semibold text-brand-navy">{formatNumber(smsCount)}</span>
                          </div>
                          <Slider
                            value={[smsCount]}
                            onValueChange={(value) => setSmsCount(value[0])}
                            min={100}
                            max={100000}
                            step={100}
                            className="w-full [&_[role=slider]]:bg-brand-gold [&_[role=slider]]:border-brand-gold [&>span>span]:bg-brand-gold"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>100</span>
                            <span>1L</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Estimate Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border-2 border-brand-gold p-6 sticky top-24">
                <div className="flex items-center space-x-2 mb-4">
                  <Calculator className="text-brand-gold" size={24} />
                  <h2 className="text-xl font-display font-bold text-brand-navy">Price Estimate</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="relative">
                    {!isFormSubmitted ? (
                      <>
                        <div className="text-4xl font-display font-bold text-brand-gold mb-2 blur-md select-none">
                          {formatCurrency(estimate)}
                        </div>
                        <div className="text-sm text-gray-500 blur-md select-none">per month</div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                            onClick={handleRevealPrice}
                            className="px-6 py-3 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold flex items-center space-x-2"
                          >
                            <Sparkles size={18} />
                            <span>Reveal Pricing</span>
                </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center py-4">
                          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="text-brand-gold" size={32} />
                          </div>
                          <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                            Thank You!
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Our business team is reviewing your requirements and will contact you shortly with the best pricing tailored to your needs.
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Total Syncs:</span>
                        <span className="font-medium">{formatNumber(customersPerMonth * avgSyncPerCustomer)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Customers:</span>
                        <span className="font-medium">{formatNumber(customersPerMonth)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {!isFormSubmitted && (
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Fill in your details to receive personalized pricing based on your requirements.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reveal Price Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-brand-navy">
              Get Your Custom Pricing
            </DialogTitle>
            <DialogDescription className="text-base">
              Fill in your details to reveal your personalized pricing estimate.
            </DialogDescription>
          </DialogHeader>

          {/* Early Client Offer */}
          <div className="bg-brand-cream/50 border border-brand-lightGold rounded-lg p-4 mb-4">
            <div className="flex items-start space-x-2">
              <Sparkles className="text-brand-gold flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-semibold text-brand-navy mb-1">Early Client Special Offer</h4>
                <p className="text-sm text-gray-700">
                  Join us as an early client and get <strong>15% off</strong> on your first 3 months! 
                  Plus, enjoy priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/business@crawfieldanddutton.com"
            method="POST"
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/pricing?success=true` : '/#/pricing?success=true'} />
            <input type="hidden" name="_subject" value="Pricing Calculator Request" />
            
            {/* Hidden fields with pricing data */}
            <input type="hidden" name="pricing_data" value={JSON.stringify(getPricingData())} />
            <input type="hidden" name="estimate" value={estimate.toString()} />
            <input type="hidden" name="customers_per_month" value={customersPerMonth.toString()} />
            <input type="hidden" name="avg_sync_per_customer" value={avgSyncPerCustomer.toString()} />
            <input type="hidden" name="total_syncs" value={(customersPerMonth * avgSyncPerCustomer).toString()} />

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold"
                >
                  Reveal Price & Submit
                </button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Custom Projects Section */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">
                Need a <span className="text-brand-gold">Custom Solution</span>?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Have unique requirements that don't fit our standard plans? We specialize in building 
                tailored solutions for enterprise clients with specific needs across BFSI, regulatory compliance, and analytics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Business Rule Engine & Analytics</h4>
                    <p className="text-sm text-gray-600">Custom BRE solutions and advanced analytics platforms for risk assessment, fraud detection, and business intelligence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">TSP Integrations</h4>
                    <p className="text-sm text-gray-600">Regulatory integrations with RBI, SEBI, IRDAI, and other financial regulatory bodies for compliance and reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">BFSI Projects</h4>
                    <p className="text-sm text-gray-600">End-to-end solutions for banks, NBFCs, fintech companies, and insurance providers with utmost quality and compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">API & System Integrations</h4>
                    <p className="text-sm text-gray-600">Seamless integration with Account Aggregators, Credit Bureaus, payment gateways, and third-party financial services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-brand-cream rounded-full text-brand-gold flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy mb-1">Custom Dashboards & Reporting</h4>
                    <p className="text-sm text-gray-600">Tailored dashboards, real-time monitoring systems, and automated reporting solutions for your specific workflows</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              {isCustomFormSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We've received your custom project inquiry. Our team will review your requirements 
                    and contact you shortly with a tailored solution.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">
                    Request a Custom Quote
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Tell us about your project and we'll get back to you with a tailored solution.
                  </p>
                  
                  <form
                    action="https://formsubmit.co/business@crawfieldanddutton.com"
                    method="POST"
                  >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Custom Project Inquiry" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/pricing?success=custom` : '/#/pricing?success=custom'} />
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="custom-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="custom-name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="custom-email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="custom-company"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="custom-phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-project-details" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Details *
                    </label>
                    <textarea
                      id="custom-project-details"
                      name="project_details"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all resize-none"
                      placeholder="Describe your custom project requirements, expected scale, timeline, and any specific features you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold"
                  >
                    Request Custom Quote
                    </button>
                </div>
              </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
