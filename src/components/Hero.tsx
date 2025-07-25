
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import ProfileImage3D from './ProfileImage3D';
import CVDownloadModal from './CVDownloadModal';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div 
        ref={heroRef}
        className="section-container flex flex-col md:flex-row items-center justify-between transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="text-center md:text-left md:flex-1 md:mr-8">
          <h2 className="text-sm md:text-base text-accent mb-2 tracking-wider">
            Software Engineer & Developer
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Zine El Aabidine <br />
            <span className="text-primary">Hamdoun</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-lg mb-8">
            I'm a Software Engineer graduated from FST Béni Mellal, Morocco. Recently completed my Final Year Project on AI-powered advertising generation.
            Passionate about building innovative applications that integrate artificial intelligence with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/80 animate-glow"
            >
              View My Work
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary"
              onClick={() => setCvModalOpen(true)}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-medium border border-primary/30 transition-all hover:border-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="mt-12 md:mt-0 md:flex-1 flex justify-center md:justify-end animate-fade-in">
          <ProfileImage3D />
        </div>
        
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <div className="w-8 h-12 border-2 border-accent rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
            </div>
          </a>
        </div>
      </div>

      {/* CV Download Modal */}
      <CVDownloadModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
