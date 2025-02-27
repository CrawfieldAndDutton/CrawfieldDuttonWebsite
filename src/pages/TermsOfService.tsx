
import { useEffect } from 'react';
import { FileText, Check, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
              <FileText size={32} className="text-brand-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last Updated: May 15, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-cream/20 p-6 rounded-lg border border-brand-lightGold mb-8">
              <p className="text-gray-700">
                Welcome to Crawfield & Dutton. These Terms of Service ("Terms") govern your access to and use of our website,
                mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree
                to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy">
              1. Acceptance of Terms
            </h2>
            
            <p>
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. In such case, "you" and "your" will refer to that organization.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              2. Description of Services
            </h2>
            
            <p>
              Crawfield & Dutton provides AI-driven financial intelligence services, including but not limited to bank statement analysis,
              credit scoring, fraud detection, and financial behavior assessments. The specific features and functionality of our Services
              may change from time to time without prior notice.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              3. Account Registration and Security
            </h2>
            
            <p>
              To access certain features of our Services, you may be required to register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <p>
              We reserve the right to disable any user account if we believe you have violated these Terms or if we determine, in our sole discretion, that your account poses a security risk.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              4. User Conduct and Restrictions
            </h2>
            
            <p>When using our Services, you agree not to:</p>
            
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Use the Services to transmit any viruses, malware, or other harmful code</li>
              <li>Engage in any activity that could damage, disable, overburden, or impair the Services</li>
              <li>Use automated means or scripts to access or scrape content from the Services</li>
              <li>Use the Services for any illegal or unauthorized purpose</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              5. Payment Terms
            </h2>
            
            <p>
              Certain aspects of our Services may require payment of fees. All fees are stated in Indian Rupees (INR) unless otherwise specified. You agree to pay all applicable fees for the Services you select and use.
            </p>
            
            <p>
              We may change our fees at any time by posting the changes on our website or through the Services. Your continued use of the Services after the fee change becomes effective constitutes your agreement to pay the changed amount.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              6. Intellectual Property Rights
            </h2>
            
            <p>
              The Services, including all content, features, and functionality, are owned by Crawfield & Dutton and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <p>
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal or internal business purposes.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              7. Data Privacy and Security
            </h2>
            
            <p>
              Your privacy is important to us. Our <a href="/privacy-policy" className="text-brand-gold hover:underline">Privacy Policy</a> explains how we collect, use, and protect your personal information. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
            
            <p>
              You acknowledge that the transmission of information over the internet is not completely secure. While we strive to protect your personal information, we cannot guarantee the security of data transmitted to our Services, and any transmission is at your own risk.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              8. Disclaimer of Warranties
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <AlertCircle size={24} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-800">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </div>
              
              <p className="text-gray-800">
                FINANCIAL INFORMATION AND ANALYSIS PROVIDED THROUGH OUR SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE CONSIDERED AS FINANCIAL ADVICE. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY FINANCIAL ANALYSIS OR INFORMATION PROVIDED THROUGH OUR SERVICES.
              </p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              9. Limitation of Liability
            </h2>
            
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CRAWFIELD & DUTTON, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              10. Indemnification
            </h2>
            
            <p>
              You agree to indemnify, defend, and hold harmless Crawfield & Dutton and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              11. Termination
            </h2>
            
            <p>
              We reserve the right to terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              12. Governing Law and Jurisdiction
            </h2>
            
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Kolkata, West Bengal, India for the resolution of any disputes arising out of or relating to these Terms or the Services.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              13. Changes to Terms
            </h2>
            
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              14. Contact Information
            </h2>
            
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-2">
              <p><strong>Crawfield & Dutton Enterprise Solutions Pvt. Ltd.</strong><br />
              Suren Sarkar Road, Phoolbagan<br />
              Kolkata - 700010, West Bengal, India<br />
              Email: legal@crawfieldanddutton.com<br />
              Phone: +91 8617703187</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
