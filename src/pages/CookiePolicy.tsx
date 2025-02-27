
import { useEffect } from 'react';
import { Cookie, Info, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy = () => {
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
              <Cookie size={32} className="text-brand-gold" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600">
              Last Updated: May 15, 2023
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-cream/20 p-6 rounded-lg border border-brand-lightGold mb-8">
              <p className="text-gray-700">
                This Cookie Policy explains how Crawfield & Dutton Enterprise Solutions Pvt. Ltd. ("we", "us", or "our") 
                uses cookies and similar technologies to recognize you when you visit our website and use our services. 
                It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center">
              <Info size={24} className="text-brand-gold mr-2" /> What Are Cookies?
            </h2>
            
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </p>
            
            <p>
              Cookies set by the website owner (in this case, Crawfield & Dutton) are called "first-party cookies". 
              Cookies set by parties other than the website owner are called "third-party cookies". 
              Third-party cookies enable third-party features or functionality to be provided on or through the website 
              (such as advertising, interactive content, and analytics). The parties that set these third-party cookies 
              can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy flex items-center mt-8">
              <Settings size={24} className="text-brand-gold mr-2" /> Types of Cookies We Use
            </h2>
            
            <p>We use the following types of cookies:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, 
                  network management, and account access. You may disable these by changing your browser settings, but this may affect 
                  how the website functions.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
                  They help us know which pages are the most and least popular and see how visitors move around the site.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Functionality Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies enable the website to provide enhanced functionality and personalization. 
                  They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium text-brand-navy mb-2">Targeting/Advertising Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies may be set through our site by our advertising partners. They may be used by those companies 
                  to build a profile of your interests and show you relevant advertisements on other sites.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Specific Cookies We Use
            </h2>
            
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">_ga</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Used to distinguish users.</td>
                    <td className="py-3 px-4 text-sm text-gray-700">2 years</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">_gid</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Used to distinguish users.</td>
                    <td className="py-3 px-4 text-sm text-gray-700">24 hours</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">_gat</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Used to throttle request rate.</td>
                    <td className="py-3 px-4 text-sm text-gray-700">1 minute</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">sessionCookie</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Used to maintain session state.</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Session</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Essential</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">preferenceCookie</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Used to remember user preferences.</td>
                    <td className="py-3 px-4 text-sm text-gray-700">1 year</td>
                    <td className="py-3 px-4 text-sm text-gray-700">Functionality</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              How Can You Control Cookies?
            </h2>
            
            <p>
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            
            <p><strong>Browser Controls:</strong></p>
            <p>
              Most browsers allow you to control cookies through their settings, which may be found in the "Tools" or "Preferences" menu. Here are links to instructions for managing cookies in common browsers:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Microsoft Edge</a></li>
            </ul>
            
            <p><strong>Do Not Track:</strong></p>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. Currently, there is no standard for how companies should respond to "Do Not Track" signals, but we honor them when technically feasible.
            </p>
            
            <p><strong>Opt-Out of Third-Party Networks:</strong></p>
            <p>
              You can opt out of some third-party advertising networks. For more information, please visit:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li><a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Digital Advertising Alliance (DAA)</a></li>
              <li><a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">Network Advertising Initiative (NAI)</a></li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Changes to This Cookie Policy
            </h2>
            
            <p>
              We may update this Cookie Policy from time to time in order to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2 className="text-2xl font-display font-bold text-brand-navy mt-8">
              Contact Us
            </h2>
            
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;
