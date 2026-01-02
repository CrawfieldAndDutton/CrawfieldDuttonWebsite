import { useState, useEffect, useRef } from 'react';
import { Award, Map, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
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
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const values = [{
    icon: <Shield size={24} className="text-brand-gold" />,
    title: "Trust & Security",
    description: "We prioritize the security of your financial data and maintain stringent privacy measures."
  }, {
    icon: <Award size={24} className="text-brand-gold" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from technology to customer support."
  }, {
    icon: <Users size={24} className="text-brand-gold" />,
    title: "Customer-Centric",
    description: "Our solutions are designed with our customers' needs at the forefront, ensuring maximum value."
  }, {
    icon: <Map size={24} className="text-brand-gold" />,
    title: "Indian Identity",
    description: "Built in India, by Indians, for Indians – we understand the unique financial landscape of our country."
  }];
  return <section id="about" className="relative py-24 bg-gradient-to-b from-brand-cream/30 via-white to-brand-cream/30 overflow-hidden" ref={aboutRef}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-gold/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="relative">
            {/* Decorative accent line */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold via-brand-gold/50 to-transparent rounded-full hidden lg:block"></div>
            
            <div className={`inline-block mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Our Story</span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-8 text-brand-navy leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-100`}>
              About <span className="text-brand-gold relative">
                Crawfield & Dutton
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></span>
              </span>
            </h2>
            
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              <div className="relative pl-6 border-l-4 border-brand-gold/30">
                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                  Crawfield & Dutton Enterprise Solutions Private Limited is a pioneering fintech company 
                  on a mission to become <span className="font-bold text-brand-navy">India's first AI-powered loan monitoring engine for every rupee disbursed</span>.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base">
                We leverage cutting-edge artificial intelligence and behavioral analytics to transform financial data 
                into actionable intelligence, enabling lenders to predict defaults, reduce NPAs, and drive early recoveries 
                — all before the EMI is missed.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-base">
                Built in India, by Indians, for Indians. We understand the unique financial landscape of our country 
                and are committed to revolutionizing how financial institutions monitor, manage, and recover loans.
              </p>

              <div className="bg-gradient-to-br from-white to-brand-cream/30 rounded-xl p-6 border border-brand-gold/20 shadow-sm">
                <p className="text-gray-700 leading-relaxed text-base">
                  Our flagship product, <Link to="/banklens" className="text-brand-gold hover:text-brand-darkGold font-semibold underline decoration-brand-gold/30 hover:decoration-brand-gold transition-colors">BankLens</Link>, is India's first AI-powered loan monitoring solution that predicts borrower defaults 30-60 days early with real-time risk intelligence. 
                  We also offer <Link to="/kycfabric" className="text-brand-gold hover:text-brand-darkGold font-semibold underline decoration-brand-gold/30 hover:decoration-brand-gold transition-colors">KYCFabric</Link>, an AI-powered enrichment layer that goes beyond traditional KYC to provide contextual risk assessment and financial stability insights. 
                  Additionally, we provide custom BFSI solutions including Business Rule Engines, AA integrations, and enterprise-grade fintech infrastructure tailored to your needs. 
                  Explore our <Link to="/services" className="text-brand-gold hover:text-brand-darkGold font-semibold underline decoration-brand-gold/30 hover:decoration-brand-gold transition-colors">services</Link> to learn more about our comprehensive offerings.
                </p>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent flex-1"></div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy">Our Core Values</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent flex-1"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {values.map((value, index) => <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:border-brand-gold/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-brand-cream to-white rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 flex-shrink-0 border border-brand-gold/20">
                          {value.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-brand-navy mb-2 text-lg group-hover:text-brand-gold transition-colors">{value.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'} animation-delay-300`}>
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Crawfield & Dutton Team" className="w-full h-full object-cover" />
                
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Enhanced Stats cards with better positioning */}
            <div className="absolute top-4 right-4 bg-white rounded-2xl shadow-2xl p-6 w-[220px] border-2 border-brand-gold/30 transform hover:scale-105 hover:shadow-3xl transition-all duration-300 z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-1.5 bg-brand-gold rounded-full"></div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Founded</p>
              </div>
              <p className="text-4xl font-display font-bold text-brand-navy mb-2 bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">2024</p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Pioneers in AI-driven financial intelligence
              </p>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-2xl p-6 w-[220px] border-2 border-brand-gold/30 transform hover:scale-105 hover:shadow-3xl transition-all duration-300 z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-1.5 bg-brand-gold rounded-full"></div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Team</p>
              </div>
              <p className="text-4xl font-display font-bold text-brand-navy mb-2 bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">10+</p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Data scientists, engineers, and financial analysts
              </p>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 -left-12 w-32 h-32 bg-brand-navy/10 rounded-full blur-2xl"></div>
            
            {/* Corner accent elements */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-brand-gold/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-brand-gold/30 rounded-bl-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;