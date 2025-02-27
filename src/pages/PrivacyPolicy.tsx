
import { useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10 text-center">
            <div className="inline-flex justify-center items-center p-3 bg-brand-cream rounded-full mb-4">
              <Shield size={32} className="text-brand-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last Updated: May 15, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-cream/20 p-6 rounded-lg border border-brand-lightGold mb-8">
              <p className="text-gray-700">
                At Crawfield & Dutton, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center">
              <Eye size={24} className="text-brand-gold mr-2" /> Information We Collect
            </h2>
            
            <p>We may collect several types of information from and about users of our services, including:</p>
            
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details when you register for our services, subscribe to our newsletter, or fill out forms on our platform.</li>
              <li><strong>Financial Information:</strong> With your explicit consent, we analyze bank statements and financial transaction data to provide our AI-driven services.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our services, including your IP address, browser type, operating system, referral source, length of visit, and pages viewed.</li>
              <li><strong>Device Information:</strong> Information about the devices you use to access our services, including hardware model, operating system, and mobile network information.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <Lock size={24} className="text-brand-gold mr-2" /> How We Use Your Information
            </h2>
            
            <p>We use the information we collect for various purposes, including to:</p>
            
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and analyze financial data to offer personalized insights and recommendations</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Monitor and analyze usage patterns and trends to enhance user experience</li>
              <li>Detect, prevent, and address technical issues and fraudulent activities</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <FileText size={24} className="text-brand-gold mr-2" /> Data Sharing and Disclosure
            </h2>
            
            <p>We may share your information with:</p>
            
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors and service providers who perform services on our behalf, such as hosting, data analytics, payment processing, and customer service.</li>
              <li><strong>Business Partners:</strong> With your consent, we may share non-sensitive information with our business partners to offer you certain products, services, or promotions.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Data Security</h2>
            
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include encryption of sensitive data, regular security assessments, and strict access controls. 
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Your Rights</h2>
            
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            
            <ul>
              <li>Access and receive a copy of your data</li>
              <li>Rectify or update your personal information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Data portability rights</li>
              <li>Withdraw consent at any time (where applicable)</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us at privacy@crawfieldanddutton.com. 
              We will respond to your request within the timeframe required by applicable law.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Cookies and Tracking Technologies</h2>
            
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, some features of our services may not function properly without cookies.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Children's Privacy</h2>
            
            <p>
              Our services are not intended for individuals under the age of 18. 
              We do not knowingly collect personal information from children. 
              If we become aware that we have collected personal information from a child without verification of parental consent, 
              we will take steps to remove that information from our servers.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Changes to This Privacy Policy</h2>
            
            <p>
              We may update our Privacy Policy from time to time. 
              We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">Contact Us</h2>
            
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
              <p><strong>Crawfield & Dutton Enterprise Solutions Pvt. Ltd.</strong><br />
              Suren Sarkar Road, Phoolbagan<br />
              Kolkata - 700010, West Bengal, India<br />
              Email: privacy@crawfieldanddutton.com<br />
              Phone: +91 8617703187</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
