import { useState, useEffect, useRef } from 'react';
import { Award, Map, Shield, Users } from 'lucide-react';
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
  return <section id="about" className="py-20 bg-brand-cream/50" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className={`section-title mb-6 text-left ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              About <span className="text-brand-gold">Crawfield & Dutton</span>
            </h2>
            
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              <p className="text-gray-700">
                Crawfield & Dutton Enterprise Solutions Private Limited is a pioneering fintech company 
                that leverages artificial intelligence to transform financial data into actionable insights.
              </p>
              
              <p className="text-gray-700">
                Founded with a vision to bridge the gap in identity intelligence through financial behavior analysis,
                we are proud to be an Indian company building solutions specifically for the Indian market.
              </p>
              
              <p className="text-gray-700">
                Our AI-driven bank statement analysis platform helps businesses, lenders, and individuals 
                make informed decisions by providing comprehensive insights into financial behavior, 
                spending patterns, and creditworthiness.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">Our Core Values</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-brand-navy">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'} animation-delay-300`}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Crawfield & Dutton Team" className="w-full h-auto rounded-2xl object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2">Built for India</h3>
                <p className="text-sm md:text-base opacity-90">
                  We understand the unique financial ecosystem of India and build solutions tailored to our market.
                </p>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
              <p className="text-xs text-gray-500 uppercase">Founded</p>
              <p className="text-xl font-display font-bold text-brand-navy">2024</p>
              <p className="text-xs text-gray-500 mt-1">
                Pioneers in AI-driven financial intelligence
              </p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
              <p className="text-xs text-gray-500 uppercase">Team</p>
              <p className="text-xl font-display font-bold text-brand-navy">10+ Experts</p>
              <p className="text-xs text-gray-500 mt-1">
                Data scientists, engineers, and financial analysts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;