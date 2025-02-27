
import { useState, useEffect, useRef } from 'react';
import { Send, Handshake, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Partnership = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    contactNumber: '',
    purpose: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      companyName: '',
      email: '',
      contactNumber: '',
      purpose: ''
    });
    
    // In a real implementation, you would send the form data to a server
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const partnershipBenefits = [
    {
      title: "Access to Advanced API",
      description: "Integrate our AI-powered financial analysis directly into your products."
    },
    {
      title: "Revenue Sharing Model",
      description: "Earn commissions on referred clients and joint business ventures."
    },
    {
      title: "Co-Branding Opportunities",
      description: "Joint marketing initiatives and white-label solutions."
    },
    {
      title: "Technical Support",
      description: "Dedicated support team for integration and ongoing assistance."
    }
  ];

  const partnershipTypes = [
    {
      title: "Fintech Integration Partners",
      description: "Integrate our APIs into your fintech applications for enhanced financial insights."
    },
    {
      title: "Banking & NBFC Partners",
      description: "Leverage our credit scoring and risk assessment technologies."
    },
    {
      title: "Distribution Partners",
      description: "Resell our solutions to your client base with competitive margins."
    },
    {
      title: "Technology Partners",
      description: "Collaborate on joint solutions combining our complementary technologies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Partnership <span className="text-brand-gold">Opportunities</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Join forces with Crawfield & Dutton to create mutually beneficial business relationships 
              and deliver innovative financial intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Partnership Information */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <div className="p-8 bg-brand-cream/30 rounded-xl border border-brand-lightGold">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-cream rounded-lg">
                    <Handshake size={28} className="text-brand-gold" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-brand-navy ml-4">
                    Why Partner With Us
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  At Crawfield & Dutton, we believe in the power of strategic partnerships to drive innovation 
                  and create value for our clients. Our AI-driven financial intelligence platform offers 
                  unique opportunities for collaboration across industries.
                </p>
                
                <div className="space-y-4 mb-8">
                  {partnershipBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-brand-gold flex-shrink-0 mt-1">
                        <CheckCircle size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-brand-navy">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                    Partnership Types
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partnershipTypes.map((type, index) => (
                      <div key={index} className="p-4 border border-gray-100 rounded-lg hover:border-brand-lightGold transition-all">
                        <h4 className="font-medium text-brand-navy mb-1">{type.title}</h4>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-brand-navy text-white p-4 rounded-lg">
                  <div>
                    <h3 className="font-medium">Ready to explore?</h3>
                    <p className="text-sm text-gray-300">Download our partnership brochure</p>
                  </div>
                  <a 
                    href="#" 
                    className="px-4 py-2 bg-brand-gold rounded-md text-white flex items-center hover:bg-brand-darkGold transition-all"
                  >
                    <FileText size={16} className="mr-2" /> Download
                  </a>
                </div>
              </div>
            </div>
            
            {/* Partnership Form */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-display font-bold text-brand-navy mb-6">
                  Partner With Us
                </h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-green-800 mb-2">Thank you for your interest!</h3>
                    <p className="text-green-700">
                      We've received your partnership request and our team will contact you within 2 business days to discuss potential collaboration opportunities.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">Purpose*</label>
                        <select
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        >
                          <option value="">Select a partnership type</option>
                          <option value="Fintech Integration">Fintech Integration</option>
                          <option value="Banking & NBFC">Banking & NBFC</option>
                          <option value="Distribution Partnership">Distribution Partnership</option>
                          <option value="Technology Partnership">Technology Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full py-3 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold flex items-center justify-center"
                        >
                          Submit Request <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              
              <div className="mt-6 p-5 border border-brand-lightGold rounded-lg bg-white">
                <h3 className="font-medium text-brand-navy mb-2">Current Partners</h3>
                <div className="flex flex-wrap items-center gap-6 mt-4">
                  <div className="h-8 opacity-70">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" alt="Partner 1" className="h-full" />
                  </div>
                  <div className="h-8 opacity-70">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" alt="Partner 2" className="h-full" />
                  </div>
                  <div className="h-8 opacity-70">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80" alt="Partner 3" className="h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partnership;
