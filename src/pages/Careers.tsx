
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Database, PieChart, BarChart2, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type JobPosition = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isExpanded?: boolean;
};

const Careers = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [jobs, setJobs] = useState<JobPosition[]>([
    {
      id: 'ds1',
      title: 'Data Scientist',
      department: 'AI & Analytics',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <PieChart size={24} className="text-brand-gold" />,
      description: "Join our AI team to develop cutting-edge algorithms for financial statement analysis and credit scoring models.",
      responsibilities: [
        "Develop and implement advanced machine learning models for financial data analysis",
        "Create predictive algorithms for credit risk assessment and spending pattern detection",
        "Engineer features from banking transactions and financial statements",
        "Collaborate with engineering teams to deploy models to production",
        "Continuously improve model accuracy and effectiveness"
      ],
      requirements: [
        "Master's or PhD in Data Science, Machine Learning, Statistics, or related field",
        "3+ years of experience in implementing machine learning models",
        "Strong programming skills in Python and data science libraries (NumPy, Pandas, scikit-learn)",
        "Experience with neural networks and deep learning frameworks",
        "Knowledge of financial domain is a plus"
      ],
      isExpanded: false
    },
    {
      id: 'be1',
      title: 'Backend Developer (Python)',
      department: 'Engineering',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <Database size={24} className="text-brand-gold" />,
      description: "Build robust backend systems and APIs to power our financial intelligence platform using Python.",
      responsibilities: [
        "Design and develop scalable backend services and APIs",
        "Implement efficient data processing pipelines for financial data",
        "Work with data scientists to operationalize ML models",
        "Create robust security protocols for handling sensitive financial data",
        "Contribute to architecture decisions and technical specifications"
      ],
      requirements: [
        "Bachelor's or Master's degree in Computer Science or related field",
        "4+ years of experience with Python backend development",
        "Strong knowledge of FastAPI, Django, or Flask frameworks",
        "Experience with SQL and NoSQL databases",
        "Understanding of RESTful API design principles",
        "Knowledge of AWS/Azure/GCP cloud services"
      ],
      isExpanded: false
    },
    {
      id: 'fe1',
      title: 'Frontend Developer (ReactJS)',
      department: 'Engineering',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <Code size={24} className="text-brand-gold" />,
      description: "Create intuitive, responsive user interfaces for our financial intelligence platform using React.",
      responsibilities: [
        "Develop responsive and intuitive user interfaces using ReactJS",
        "Implement complex data visualizations for financial insights",
        "Create reusable UI components and maintain component libraries",
        "Optimize applications for maximum performance and cross-browser compatibility",
        "Collaborate with UX/UI designers to implement design specifications"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience with ReactJS",
        "Strong proficiency with JavaScript, TypeScript, and modern ES6+ features",
        "Experience with state management (Redux, Context API)",
        "Knowledge of responsive design principles",
        "Experience with data visualization libraries (D3.js, Recharts) a plus"
      ],
      isExpanded: false
    },
    {
      id: 'oe1',
      title: 'Operations Executive',
      department: 'Operations',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <BarChart2 size={24} className="text-brand-gold" />,
      description: "Oversee the operational aspects of our financial intelligence platform, ensuring smooth service delivery.",
      responsibilities: [
        "Manage day-to-day operations of the financial intelligence platform",
        "Monitor system performance and coordinate with technical teams to resolve issues",
        "Create and maintain operational documentation and procedures",
        "Liaise with clients to ensure service quality and address operational concerns",
        "Generate regular operational reports and analytics"
      ],
      requirements: [
        "Bachelor's degree in Business Administration, Finance, or related field",
        "2+ years of experience in operations management, preferably in fintech",
        "Strong organizational and project management skills",
        "Excellent communication and client relationship skills",
        "Attention to detail and problem-solving abilities",
        "Familiarity with financial processes and regulations"
      ],
      isExpanded: false
    },
    {
      id: 'lus1',
      title: 'Loan Underwriting Specialist',
      department: 'Risk & Compliance',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <Users size={24} className="text-brand-gold" />,
      description: "Apply your lending expertise to enhance our loan underwriting algorithms and processes.",
      responsibilities: [
        "Provide domain expertise to develop and enhance loan underwriting models",
        "Review and validate AI-generated credit assessments",
        "Develop underwriting policies and guidelines for the platform",
        "Train and supervise junior underwriters and analysts",
        "Collaborate with data scientists to improve credit risk models"
      ],
      requirements: [
        "Bachelor's degree in Finance, Banking, or related field",
        "5+ years of experience in loan underwriting or credit risk assessment",
        "Strong knowledge of banking regulations and lending practices in India",
        "Experience with credit scoring models and risk assessment frameworks",
        "Analytical mindset and attention to detail",
        "Familiarity with fintech and alternative credit scoring is a plus"
      ],
      isExpanded: false
    }
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleJobExpand = (id: string) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === id ? { ...job, isExpanded: !job.isExpanded } : job
      )
    );
  };

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase().includes(filter.toLowerCase()));

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'ai', name: 'AI & Analytics' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'operations', name: 'Operations' },
    { id: 'risk', name: 'Risk & Compliance' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Join Our <span className="text-brand-gold">Team</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Explore exciting career opportunities at Crawfield & Dutton and be part of our mission 
              to revolutionize financial intelligence through AI-driven solutions.
            </p>
          </div>

          {/* Culture Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-300`}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-400`}>
              <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">
                Our Culture & Values
              </h2>
              
              <p className="text-gray-700 mb-4">
                At Crawfield & Dutton, we're building a team of dedicated professionals who share our 
                passion for innovation, excellence, and making a positive impact in the financial sector.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <h3 className="font-medium text-brand-navy mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">
                    We encourage creative thinking and embrace cutting-edge technologies.
                  </p>
                </div>
                
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <h3 className="font-medium text-brand-navy mb-2">Collaboration</h3>
                  <p className="text-sm text-gray-600">
                    We work together across disciplines to solve complex problems.
                  </p>
                </div>
                
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <h3 className="font-medium text-brand-navy mb-2">Integrity</h3>
                  <p className="text-sm text-gray-600">
                    We uphold the highest standards of ethics in all our actions.
                  </p>
                </div>
                
                <div className="bg-brand-cream/30 p-4 rounded-lg">
                  <h3 className="font-medium text-brand-navy mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">
                    We invest in our team's professional development and personal growth.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700">
                Join us and be part of a dynamic team that's reshaping the future of financial intelligence 
                in India through innovative AI-driven solutions.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-6 text-center">
              Open Positions
            </h2>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center mb-8">
              {departments.map(dept => (
                <button
                  key={dept.id}
                  onClick={() => setFilter(dept.id)}
                  className={`px-4 py-2 m-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === dept.id 
                      ? 'bg-brand-gold text-white shadow-gold' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
            
            {/* Job Listings */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div 
                    key={job.id} 
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-brand-lightGold hover:shadow-lg"
                  >
                    {/* Job Header */}
                    <div 
                      className="p-5 flex items-start justify-between cursor-pointer"
                      onClick={() => toggleJobExpand(job.id)}
                    >
                      <div className="flex items-start">
                        <div className="p-2 bg-brand-cream rounded-lg mr-4">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-bold text-brand-navy">{job.title}</h3>
                          <div className="flex flex-wrap text-sm text-gray-600 mt-1">
                            <span className="mr-3">{job.department}</span>
                            <span className="mr-3">•</span>
                            <span className="mr-3">{job.location}</span>
                            <span className="mr-3">•</span>
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-brand-navy">
                        {job.isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                    
                    {/* Job Details (Expandable) */}
                    {job.isExpanded && (
                      <div className="px-5 pb-5 border-t border-gray-100 pt-4 animate-fade-in">
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-medium text-brand-navy mb-2">Responsibilities:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-sm">{resp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-medium text-brand-navy mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="text-sm">{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-darkGold transition-all inline-flex items-center">
                          Apply Now <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center p-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No positions found for the selected filter.</p>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-6 text-center">
              Benefits & Perks
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-brand-lightGold transition-all">
                <h3 className="font-medium text-brand-navy mb-3">Health & Wellness</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Comprehensive health insurance</li>
                  <li>Mental wellness programs</li>
                  <li>Gym membership reimbursement</li>
                  <li>Regular health check-ups</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-brand-lightGold transition-all">
                <h3 className="font-medium text-brand-navy mb-3">Learning & Development</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Professional development budget</li>
                  <li>Conference attendance opportunities</li>
                  <li>Internal knowledge sharing sessions</li>
                  <li>Online learning platform access</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-brand-lightGold transition-all">
                <h3 className="font-medium text-brand-navy mb-3">Work-Life Balance</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Flexible working hours</li>
                  <li>Remote work options</li>
                  <li>Paid time off & holidays</li>
                  <li>Parental leave benefits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Don't see a position that matches your skills?
            </p>
            <a 
              href="mailto:careers@crawfieldanddutton.com" 
              className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-lightNavy transition-all duration-300"
            >
              Send us your resume <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
