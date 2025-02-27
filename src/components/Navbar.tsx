
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 shadow-lg backdrop-blur-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/86baf05e-381c-42d5-9abb-b0a5de533364.png" 
              alt="Crawfield & Dutton" 
              className="h-10 w-auto"
            />
            <span className="font-display font-semibold text-brand-navy text-xl hidden md:inline-block">
              Crawfield & Dutton
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/#solutions">Solutions</NavLink>
            <NavLink href="/#target-markets">Markets</NavLink>
            <NavLink href="/#pricing">Pricing</NavLink>
            <Link 
              to="/methodology" 
              className="text-brand-navy hover:text-brand-gold font-medium transition-colors duration-300"
            >
              Methodology
            </Link>
            <NavLink href="/#about">About</NavLink>
            <Link 
              to="/contact" 
              className="text-brand-navy hover:text-brand-gold font-medium transition-colors duration-300"
            >
              Contact
            </Link>
            
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-md text-brand-navy border border-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            
            <Link 
              to="/signup" 
              className="px-4 py-2 rounded-md bg-brand-gold text-white hover:bg-brand-darkGold shadow-gold transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-brand-navy focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/#solutions" onClick={() => setIsOpen(false)}>Solutions</MobileNavLink>
            <MobileNavLink href="/#target-markets" onClick={() => setIsOpen(false)}>Markets</MobileNavLink>
            <MobileNavLink href="/#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            <Link
              to="/methodology"
              className="text-brand-navy hover:text-brand-gold font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Methodology
            </Link>
            <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <Link
              to="/contact"
              className="text-brand-navy hover:text-brand-gold font-medium py-2 border-b border-gray-100 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex space-x-3 pt-3">
              <Link 
                to="/login" 
                className="flex-1 px-4 py-2 rounded-md text-center text-brand-navy border border-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              
              <Link 
                to="/signup" 
                className="flex-1 px-4 py-2 rounded-md text-center bg-brand-gold text-white hover:bg-brand-darkGold shadow-gold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-brand-navy hover:text-brand-gold font-medium transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-brand-navy hover:text-brand-gold font-medium py-2 border-b border-gray-100 transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
