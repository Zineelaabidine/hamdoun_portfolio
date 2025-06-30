
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import PageLoader from '@/components/PageLoader';

const Index: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = "Zine El Aabidine Hamdoun | Software Engineer";
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <PageLoader />
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
