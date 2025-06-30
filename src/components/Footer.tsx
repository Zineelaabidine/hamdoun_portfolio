
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">
              Zine El Aabidine Hamdoun
            </h3>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Zineelaabidine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link" 
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/hamdoun-zine-el-aabidine-835618285" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hamdounzineelaabidine@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Zine El Aabidine Hamdoun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
