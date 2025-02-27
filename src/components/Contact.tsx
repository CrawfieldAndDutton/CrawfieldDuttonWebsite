
import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      email: '',
      company: '',
      message: ''
    });
    
    // In a real implementation, you would send the form data to a server
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Get in <span className="text-brand-gold">Touch</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
            Have questions about our services or need a custom solution? 
            Contact our team and we'll be happy to assist you.
          </p>
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
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
          
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'} animation-delay-400`}>
            <div className="bg-brand-navy rounded-xl shadow-lg p-8 text-white h-full">
              <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-gold/20 rounded-lg">
                    <Mail size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-300">info@crawfieldanddutton.com</p>
                    <p className="text-gray-300">support@crawfieldanddutton.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-gold/20 rounded-lg">
                    <Phone size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-300">+91 11 4567 8900</p>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-brand-gold/20 rounded-lg">
                    <MapPin size={24} className="text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Address</h4>
                    <p className="text-gray-300">
                      Crawfield & Dutton Enterprise Solutions Pvt. Ltd.<br />
                      42nd Floor, Financial District<br />
                      Hitech City, Hyderabad 500032<br />
                      Telangana, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-lg mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
