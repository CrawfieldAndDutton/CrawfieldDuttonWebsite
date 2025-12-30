
import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Building, Star, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
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
    
    // Check if form was submitted successfully
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setFormSubmitted(true);
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Removed handleSubmit - form submits naturally to formsubmit.co

  const contactCards = [
    {
      icon: <Phone size={24} className="text-brand-gold" />,
      title: 'Call Us',
      details: [
        '+91 8617703187',
        'Monday to Friday, 9am to 6pm IST'
      ],
      action: {
        link: 'tel:+918617703187',
        text: 'Call now'
      }
    },
    {
      icon: <Mail size={24} className="text-brand-gold" />,
      title: 'Email Us',
      details: [
        'support@crawfieldanddutton.com',
        "We'll respond within 24 hours"  // Changed to double quotes to handle apostrophe
      ],
      action: {
        link: 'mailto:support@crawfieldanddutton.com',
        text: 'Send email'
      }
    },
    {
      icon: <MapPin size={24} className="text-brand-gold" />,
      title: 'Visit Our Office',
      details: [
        'Suren Sarkar Road, Phoolbagan',
        'Kolkata - 700010, India'
      ],
      action: {
        link: 'https://maps.google.com',
        text: 'Get directions'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Contact <span className="text-brand-gold">Us</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              We're here to help and answer any questions you might have about our services.
              We look forward to hearing from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg border border-gray-100 p-6 transition-all hover:border-brand-lightGold hover:shadow-gold 
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <div className="p-3 bg-brand-cream rounded-full w-14 h-14 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{card.title}</h3>
                <div className="space-y-1 mb-5">
                  {card.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a 
                  href={card.action.link} 
                  className="inline-flex items-center text-brand-gold hover:text-brand-darkGold font-medium transition-colors"
                  target={card.action.link.startsWith('http') ? '_blank' : ''}
                  rel={card.action.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {card.action.text} <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">Send us a message</h3>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form 
                    action="https://formsubmit.co/business@crawfieldanddutton.com" 
                    method="POST"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/#/contact?success=true` : '/#/contact?success=true'} />
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Sales">Sales</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Careers">Careers</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold outline-none transition-all"
                          required
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 bg-brand-gold text-white rounded-lg font-medium hover:bg-brand-darkGold transition-all duration-300 shadow-gold flex items-center justify-center"
                      >
                        Send Message <Send size={16} className="ml-2" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Map and Additional Info */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'} animation-delay-400`}>
              <div className="mb-6 bg-gray-100 rounded-xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps?q=Suren+Sarkar+Road,+Phoolbagan,+Kolkata,+West+Bengal+700010,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Crawfield & Dutton Office Location - Suren Sarkar Road, Phoolbagan, Kolkata"
                ></iframe>
              </div>
              
              <div className="bg-brand-navy rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-6">Additional Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-gold/20 rounded-lg">
                      <Building size={24} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Company Address</h4>
                      <p className="text-gray-300">
                        Crawfield & Dutton Enterprise Solutions Pvt. Ltd.<br />
                        Suren Sarkar Road, Phoolbagan<br />
                        Kolkata - 700010<br />
                        West Bengal, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-gold/20 rounded-lg">
                      <Clock size={24} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Business Hours</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-gold/20 rounded-lg">
                      <Star size={24} className="text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Customer Support</h4>
                      <p className="text-gray-300">
                        Our team is available during business hours<br />
                        to assist you with any questions or concerns.
                      </p>
                    </div>
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

export default ContactUs;
