
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.classList.add('animate-fade-in');
          }
          if (contentRef.current) {
            contentRef.current.classList.add('animate-fade-in');
            contentRef.current.style.animationDelay = '0.2s';
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-container">
        <h2 ref={headingRef} className="section-heading opacity-0">
          Get In Touch
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-0"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Let's work together
            </h3>
            
            <p className="text-muted-foreground mb-6">
              I'm open to job opportunities, freelance projects, and collaborations. Feel free to reach out if you want to connect or have any questions.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:hamdounzineelaabidine@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hamdounzineelaabidine@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/hamdoun-zine-el-aabidine-835618285" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/hamdoun-zine-el-aabidine-835618285</span>
              </a>
              
              <a 
                href="https://github.com/Zineelaabidine" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/Zineelaabidine</span>
              </a>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-2 bg-secondary border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary h-36"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
