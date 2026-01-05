
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Methodology from "./pages/Methodology";
import ContactUs from "./pages/ContactUs";
import Partnership from "./pages/Partnership";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import GDPR from "./pages/GDPR";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import BankLens from "./pages/BankLens";
import IndividualLoanMonitoring from "./pages/IndividualLoanMonitoring";
import BusinessLoanMonitoring from "./pages/BusinessLoanMonitoring";
import KYCFabric from "./pages/KYCFabric";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/banklens" element={<BankLens />} />
          <Route path="/banklens/individual-loan-monitoring" element={<IndividualLoanMonitoring />} />
          <Route path="/banklens/business-loan-monitoring" element={<BusinessLoanMonitoring />} />
          <Route path="/kycfabric" element={<KYCFabric />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/verticals" element={<Industries />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
