
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TargetMarkets from '../components/TargetMarkets';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TargetMarkets />
      <Pricing />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
