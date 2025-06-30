
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
              Hello! I'm <span className="text-accent font-medium">Zine El Aabidine Hamdoun</span>, a Computer Engineering student based in Morocco. I'm graduating in June 2024 from FST Béni Mellal.
            </p>
            <p className="text-lg mb-4">
              I specialize in building modern web applications and desktop solutions that solve real-world problems. My education has given me a strong foundation in software engineering principles and best practices.
            </p>
            <p className="text-lg">
              I'm passionate about creating intuitive user experiences and writing clean, efficient code. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
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
                    Graduating in June 2024
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
