
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    // Show simulated login process
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // For demo purposes, we're not actually logging in
      // In a real app, you would verify credentials with a backend
      console.log('Login attempt with:', { email });
      
      // Simulate an error for demo purposes
      setError('Invalid email or password. Please try again.');
    }, 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!resetEmail) {
      setError('Please enter your email address');
      return;
    }
    
    // Show simulated process
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setResetSent(true);
      console.log('Password reset requested for:', resetEmail);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {showResetPassword ? (
              <div className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-display font-bold text-brand-navy">
                    Reset Password
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Enter your email address and we'll send you a link to reset your password
                  </p>
                </div>
                
                {resetSent ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 text-sm">
                      If an account exists with this email, you'll receive a password reset link shortly. Please check your inbox.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleResetPassword}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                        <AlertCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            id="reset-email"
                            type="email"
                            value={resetEmail}
                            onChange={(e) => setResetEmail(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                            placeholder="name@example.com"
                            disabled={isSubmitting || resetSent}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold"
                          disabled={isSubmitting || resetSent}
                        >
                          {isSubmitting ? 'Processing...' : 'Send Reset Link'}
                        </button>
                      </div>
                      
                      <div className="text-center mt-4">
                        <button
                          type="button"
                          className="text-sm text-brand-gold hover:text-brand-darkGold"
                          onClick={() => {
                            setShowResetPassword(false);
                            setError('');
                            setResetSent(false);
                          }}
                        >
                          Back to Login
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="p-8">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-display font-bold text-brand-navy">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Login to your account to access our services
                  </p>
                </div>
                
                <form onSubmit={handleLogin}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start">
                      <AlertCircle size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                          placeholder="name@example.com"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
                          disabled={isSubmitting}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-brand-gold focus:ring-brand-gold border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      
                      <div>
                        <button
                          type="button"
                          className="text-sm text-brand-gold hover:text-brand-darkGold"
                          onClick={() => {
                            setShowResetPassword(true);
                            setError('');
                          }}
                        >
                          Forgot password?
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-gold hover:bg-brand-darkGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Logging in...' : 'Login'} 
                        {!isSubmitting && <ArrowRight size={16} className="ml-2" />}
                      </button>
                    </div>
                    
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                          to="/signup"
                          className="text-brand-gold hover:text-brand-darkGold font-medium"
                        >
                          Sign up
                        </Link>
                      </p>
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

export default Login;
