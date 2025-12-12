
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, BookOpen, Calendar, ArrowRight, Pin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type BlogPost = {
  id: string;
  title: string;
  description: string;
  mediumUrl: string;
  date: string;
  readTime?: string;
  category?: string;
  pinned?: boolean;
};

const Blogs = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Blog posts from Medium
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The R&D Behind BankLens: India\'s First AI Engine That Predicts Loan Defaults',
      description: 'We just released something most companies in fintech never dare to publish. The R&D behind BankLens — the full scientific framework that powers India\'s first AI engine capable of predicting loan defaults 30–60 days before DPD.',
      mediumUrl: 'https://medium.com/@crawfieldanddutton/the-r-d-behind-banklens-indias-first-ai-engine-that-predicts-loan-defaults-5ad08675c407',
      date: '2025-01-08',
      readTime: '8 min read',
      category: 'AI & Technology',
      pinned: true
    },
    {
      id: '2',
      title: 'BankLens: India\'s First AI-Based Loan Monitoring Engine & Early Warning System',
      description: 'Most lenders try to fix a default after it occurs. But by then, the borrower has already slipped… the stress has already built up… and the relationship has already weakened. The future of lending is not about chasing defaults. It\'s about predicting them before they happen.',
      mediumUrl: 'https://medium.com/@crawfieldanddutton/banklens-indias-first-ai-based-loan-monitoring-engine-early-warning-system-cbd26e709e17',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'AI & Technology'
    }
  ];

  // Sort posts: pinned first, then by date
  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-20 bg-white" ref={pageRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Our <span className="text-brand-gold">Blog</span>
            </h1>
            <p className={`section-subtitle ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} animation-delay-200`}>
              Insights, research, and updates from our team on AI-powered financial intelligence, 
              risk management, and the future of lending.
            </p>
          </div>

          {/* Blog Posts Grid */}
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    post.pinned 
                      ? 'border-brand-gold border-2' 
                      : 'border-gray-100 hover:border-brand-lightGold'
                  } ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-brand-cream text-brand-gold text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      )}
                      {post.pinned && (
                        <div className="flex items-center text-brand-gold text-xs font-medium">
                          <Pin size={14} className="mr-1" />
                          <span>Pinned</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center space-x-2">
                          <BookOpen size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                    
                    <a
                      href={post.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-gold hover:text-brand-darkGold font-medium transition-colors group"
                    >
                      Read on Medium
                      <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-display font-bold text-brand-navy mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600">
                We're working on some exciting content. Check back soon!
              </p>
            </div>
          )}

          {/* Call to Action */}
          {sortedPosts.length > 0 && (
            <div className="mt-16 text-center">
              <div className="bg-brand-cream rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-3">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow us on Medium to get the latest insights on AI-powered financial intelligence 
                  and risk management.
                </p>
                <a
                  href="https://medium.com/@crawfieldanddutton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-brand-gold text-white rounded-lg hover:bg-brand-darkGold transition-all duration-300 shadow-gold"
                >
                  Follow on Medium
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;

