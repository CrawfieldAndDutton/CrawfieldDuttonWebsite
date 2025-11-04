import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center py-20 bg-gray-50">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h1 className="text-2xl font-display font-bold text-brand-navy mb-3">
              Thank you for signing up!
            </h1>
            <p className="text-gray-600 mb-6">
              We have received your details. We'll reach out to you shortly.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-brand-gold hover:bg-brand-darkGold"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;


