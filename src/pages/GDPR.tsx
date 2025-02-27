
import { useEffect } from 'react';
import { Shield, UserCheck, Key, FileText, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GDPR = () => {
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
              GDPR Compliance
            </h1>
            <p className="text-gray-600">
              Last Updated: May 15, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-cream/20 p-6 rounded-lg border border-brand-lightGold mb-8">
              <p className="text-gray-700">
                At Crawfield & Dutton, we are committed to protecting the personal data of our EU customers and business partners in compliance with the General Data Protection Regulation (GDPR). This page outlines our approach to GDPR compliance and provides information about your data protection rights.
              </p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center">
              <UserCheck size={24} className="text-brand-gold mr-2" /> Your Rights Under GDPR
            </h2>
            
            <p>
              Under the GDPR, individuals in the European Union have the following rights with respect to their personal data:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Access</h3>
                <p className="text-sm text-gray-700">
                  You have the right to request a copy of the personal data we hold about you and to learn how we use and share it.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Rectification</h3>
                <p className="text-sm text-gray-700">
                  You have the right to request that we correct inaccurate or incomplete personal data we hold about you.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Erasure</h3>
                <p className="text-sm text-gray-700">
                  Also known as the "right to be forgotten," you have the right to request that we delete your personal data in certain circumstances.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Restriction of Processing</h3>
                <p className="text-sm text-gray-700">
                  You have the right to request that we limit how we use your personal data in certain circumstances.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Data Portability</h3>
                <p className="text-sm text-gray-700">
                  You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit it to another controller.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Right to Object</h3>
                <p className="text-sm text-gray-700">
                  You have the right to object to the processing of your personal data in certain circumstances, including for direct marketing purposes.
                </p>
              </div>
            </div>
            
            <p className="mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:gdpr@crawfieldanddutton.com" className="text-brand-gold hover:underline">gdpr@crawfieldanddutton.com</a>. We will respond to your request within 30 days.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <Key size={24} className="text-brand-gold mr-2" /> Legal Basis for Processing
            </h2>
            
            <p>
              Under GDPR, we must have a legal basis for processing your personal data. We rely on the following legal bases for processing:
            </p>
            
            <ul>
              <li><strong>Consent:</strong> When you have given clear consent to process your personal data for a specific purpose.</li>
              <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
              <li><strong>Legal Obligation:</strong> When processing is necessary for compliance with a legal obligation to which we are subject.</li>
              <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those legitimate interests.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <Lock size={24} className="text-brand-gold mr-2" /> Data Security and Transfers
            </h2>
            
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
            
            <p>
              When we transfer personal data outside the European Economic Area (EEA), we ensure a similar degree of protection is afforded to it by implementing at least one of the following safeguards:
            </p>
            
            <ul>
              <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission.</li>
              <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe.</li>
              <li>Where we use providers based in the US, we may transfer data to them if they are part of the Privacy Shield or have implemented similar appropriate safeguards.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <FileText size={24} className="text-brand-gold mr-2" /> Data Processing Activities
            </h2>
            
            <p>
              We process personal data for the following purposes:
            </p>
            
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing payments</li>
              <li>Responding to inquiries and providing customer support</li>
              <li>Sending administrative information</li>
              <li>Sending marketing and promotional communications (with your consent where required by law)</li>
              <li>Personalizing user experience</li>
              <li>Conducting data analytics to improve our services</li>
              <li>Protecting against fraud and unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Data Retention
            </h2>
            
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <p>
              To determine the appropriate retention period for personal data, we consider:
            </p>
            
            <ul>
              <li>The amount, nature, and sensitivity of the personal data</li>
              <li>The potential risk of harm from unauthorized use or disclosure of your personal data</li>
              <li>The purposes for which we process your personal data</li>
              <li>Whether we can achieve those purposes through other means</li>
              <li>The applicable legal requirements</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Data Protection Officer
            </h2>
            
            <p>
              We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this GDPR policy and our privacy practices. If you have any questions about this policy or our privacy practices, please contact our DPO:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
              <p><strong>Data Protection Officer</strong><br />
              Crawfield & Dutton Enterprise Solutions Pvt. Ltd.<br />
              Suren Sarkar Road, Phoolbagan<br />
              Kolkata - 700010, West Bengal, India<br />
              Email: dpo@crawfieldanddutton.com<br />
              Phone: +91 8617703187</p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Complaints
            </h2>
            
            <p>
              You have the right to make a complaint at any time to your local data protection authority. We would, however, appreciate the chance to deal with your concerns before you approach the authority, so please contact us in the first instance.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Changes to This GDPR Policy
            </h2>
            
            <p>
              We may update this GDPR policy from time to time. The date at the top of this policy indicates when it was last updated. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GDPR;
