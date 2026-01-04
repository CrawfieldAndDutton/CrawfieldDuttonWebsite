
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Database, PieChart, BarChart2, Users, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    cv: null as File | null
  });
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
    },
    {
      id: 'bdm1',
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <Briefcase size={24} className="text-brand-gold" />,
      description: "Drive business growth by identifying new opportunities, building strategic partnerships, and expanding our client base in the financial services sector.",
      responsibilities: [
        "Identify and pursue new business opportunities in banking, NBFC, and fintech sectors",
        "Build and maintain strong relationships with potential clients and partners",
        "Develop and execute sales strategies to achieve revenue targets",
        "Conduct product demonstrations and presentations to key stakeholders",
        "Collaborate with product and technical teams to understand client needs",
        "Negotiate contracts and close deals with enterprise clients"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "5+ years of experience in B2B sales, preferably in fintech or financial services",
        "Proven track record of meeting or exceeding sales targets",
        "Strong communication, negotiation, and presentation skills",
        "Understanding of financial products and services",
        "Ability to work independently and as part of a team"
      ],
      isExpanded: false
    },
    {
      id: 'pe1',
      title: 'Product Evangelist',
      department: 'Sales',
      location: 'Kolkata',
      type: 'Full-time',
      icon: <Briefcase size={24} className="text-brand-gold" />,
      description: "Be the voice of our products, educating the market about our AI-powered financial intelligence solutions and driving adoption through thought leadership and strategic engagement.",
      responsibilities: [
        "Develop and execute product evangelism strategies to increase market awareness",
        "Create compelling content including blog posts, case studies, and presentations",
        "Represent the company at industry events, conferences, and webinars",
        "Build relationships with key influencers and thought leaders in the fintech space",
        "Work closely with sales and marketing teams to support lead generation",
        "Gather market feedback and insights to inform product development"
      ],
      requirements: [
        "Bachelor's degree in Business, Marketing, Communications, or related field",
        "3+ years of experience in product marketing, evangelism, or sales enablement",
        "Excellent public speaking and presentation skills",
        "Strong writing and content creation abilities",
        "Deep understanding of fintech and financial services industry",
        "Passion for technology and ability to explain complex concepts simply"
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

  const handleApplyNow = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      cv: null
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedJob) return;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('position', selectedJob.title);
    formDataToSubmit.append('department', selectedJob.department);
    formDataToSubmit.append('coverLetter', formData.coverLetter);
    if (formData.cv) {
      formDataToSubmit.append('cv', formData.cv);
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/careers@crawfieldanddutton.com', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert('Application submitted successfully! We will get back to you soon.');
        handleCloseModal();
      } else {
        alert('There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your application. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase().includes(filter.toLowerCase()));

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'ai', name: 'AI & Analytics' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'operations', name: 'Operations' },
    { id: 'risk', name: 'Risk & Compliance' },
    { id: 'sales', name: 'Sales' }
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
                      <div 
                        className="px-5 pb-5 border-t border-gray-100 pt-4 animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                      >
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
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyNow(job);
                          }}
                          className="px-4 py-2 bg-brand-gold text-white rounded-md hover:bg-brand-darkGold transition-all inline-flex items-center"
                        >
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
              href="mailto:support@crawfieldanddutton.com" 
              className="inline-flex items-center px-6 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-lightNavy transition-all duration-300"
            >
              Send us your resume <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        if (!open) handleCloseModal();
      }}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Please fill out the form below to submit your application. We'll review it and get back to you soon.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9876543210"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cv">Upload CV/Resume *</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                {formData.cv && (
                  <span className="text-sm text-gray-600">{formData.cv.name}</span>
                )}
              </div>
              <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCloseModal}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-brand-gold hover:bg-brand-darkGold text-white"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Careers;
