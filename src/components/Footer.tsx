
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Briefcase } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/86baf05e-381c-42d5-9abb-b0a5de533364.png" 
                alt="Crawfield & Dutton" 
                className="h-10 w-auto"
              />
              <span className="font-display font-semibold text-white text-xl">
                Crawfield & Dutton
              </span>
            </div>
            
            <p className="text-gray-300 text-sm">
              A fintech solution leveraging AI-driven bank statement analysis to provide identity 
              intelligence for businesses, lenders, and individuals.
            </p>
            
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/#solutions">Solutions</FooterLink>
              <FooterLink href="/#target-markets">Target Markets</FooterLink>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/methodology" 
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Methodology
                </Link>
              </li>
              <FooterLink href="/#about">About Us</FooterLink>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Briefcase size={16} className="text-brand-gold" />
                <Link 
                  to="/careers" 
                  className="text-gray-300 hover:text-brand-gold transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <FooterLink href="#help">Help Center</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-brand-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <FooterLink href="#api-docs">API Documentation</FooterLink>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on our products and services.
            </p>
            
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-brand-lightNavy text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bg-brand-gold text-white p-1 rounded-md"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="text-gray-400 text-xs">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Crawfield & Dutton Enterprise Solutions Private Limited. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
              Terms
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
              Cookies
            </Link>
            <Link to="/gdpr" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
              GDPR
            </Link>
            <Link to="/careers" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">
              Careers
            </Link>
          </div>
        </div>
        
        {/* Made in India Badge */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center space-x-2 bg-brand-lightNavy px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-white">Built in India, For Indians</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

type SocialIconProps = {
  icon: React.ReactNode;
  href: string;
};

const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-brand-lightNavy flex items-center justify-center hover:bg-brand-gold transition-colors"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-brand-gold transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
