
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      // Determine if we've scrolled past threshold
      setScrolled(scrollY > 10);
      
      // Find which section is currently in view
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-3' : 'py-5'
    )}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-foreground">
          ZH<span className="text-accent">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'nav-link',
                activeSection === link.href.substring(1) && 'text-accent'
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu would go here */}
          <button className="p-2 text-accent">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
