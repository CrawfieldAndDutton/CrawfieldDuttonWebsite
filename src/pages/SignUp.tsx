
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!name || !email || !phone) {
      setError('Please fill in all fields');
      return;
    }
    
    if (phone.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    
    // Submit to FormSubmit
    setIsSubmitting(true);
    formRef.current?.submit();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {registered ? (
              <div className="p-8 text-center">
                {/* <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div> */}
                {/* <h1 className="text-2xl font-display font-bold text-brand-navy mb-4">
                  Registration Successful!
                </h1> */}
                {/* <p className="text-gray-600 mb-6">
                  Your account has been created successfully. Please check your email to verify your account.
                </p> */}
                {/* <Link
                  to="/login"
                  className="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
                >
                  Proceed to Login <ArrowRight size={16} className="ml-2" />
                </Link> */}
              </div>
            ) : (
              <div className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-display font-bold text-brand-navy">
                    Create an Account
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Join us to get personalized financial insights
                  </p>
                </div>
                
                <form
                  ref={formRef}
                  onSubmit={handleSignUp}
                  action="https://formsubmit.co/business@crawfieldanddutton.com"
                  method="POST"
                >
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                      <AlertCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <input type="hidden" name="_next" value={`${window.location.origin}/#/thank-you`} />

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                          placeholder="Your Name"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                          placeholder="name@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                          placeholder="9876543210"
                          maxLength={10}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    {/* Password removed as per request */}
                    
                    {/* <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="/terms-of-service" className="text-brand-gold hover:text-brand-darkGold">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy-policy" className="text-brand-gold hover:text-brand-darkGold">
                          Privacy Policy
                        </Link>
                      </label>
                    </div> */}
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'} 
                        {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
                      </button>
                    </div>
                    
                    <div className="text-center mt-4">
                      {/* <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                          to="/login"
                          className="text-brand-gold hover:text-brand-darkGold font-medium"
                        >
                          Login
                        </Link>
                      </p> */}
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
