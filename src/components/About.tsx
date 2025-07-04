
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
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
      sectionObserver.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="bg-secondary/30">
      <div className="section-container">
        <h2 ref={headingRef} className="section-heading opacity-0">
          About Me
        </h2>
        
        <div 
          ref={contentRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-0"
        >
          <div>
            <p className="text-lg mb-4">
              Hello! I'm <span className="text-accent font-medium">Zine El Aabidine Hamdoun</span>, a Software Engineer graduated from FST Béni Mellal, Morocco. I recently completed my Bachelor's degree in Sciences and Techniques, specializing in Computer Engineering (Génie Informatique).
            </p>
            <p className="text-lg mb-4">
              I specialize in building innovative applications that integrate artificial intelligence with modern web technologies. My recent Final Year Project, InstantAd, demonstrates my expertise in AI-powered solutions, full-stack development, and creating user-centric applications that solve real-world business challenges.
            </p>
            <p className="text-lg">
              I'm passionate about leveraging cutting-edge technologies like AI, React, and Node.js to create scalable solutions. My experience spans from traditional web development to advanced AI integration, always focusing on delivering high-quality, maintainable code and exceptional user experiences.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
              <div className="absolute inset-2 bg-card rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
                  <p className="text-muted-foreground mb-4">
                    FST Béni Mellal
                  </p>
                  <p className="text-primary font-medium">
                    Graduated June 2025
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bachelor's in Sciences & Techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
