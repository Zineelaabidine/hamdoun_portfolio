
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ProjectCategory = 'mini' | 'pfe' | 'personal';

const categoryLabels: Record<ProjectCategory, string> = {
  personal: 'Personal Projects',
  pfe: 'PFE (Final Year Project)',
  mini: 'Mini Projects'
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    { name: 'Contact', href: '#contact' }
  ];

  const handleProjectCategoryClick = (category: ProjectCategory) => {
    // Scroll to projects section and update the category
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      // We'll need to communicate the category selection to the Projects component
      // For now, we'll use URL hash parameters
      window.location.hash = `projects-${category}`;
    }
  };
  
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

          {/* Projects Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'nav-link flex items-center gap-1',
                  activeSection === 'projects' && 'text-accent'
                )}
              >
                Projects
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => handleProjectCategoryClick(category)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{categoryLabels[category]}</span>
                    <span className="text-xs text-muted-foreground">
                      {category === 'personal' && 'Live deployed projects & demos'}
                      {category === 'pfe' && 'Final year capstone project'}
                      {category === 'mini' && 'Academic projects during studies'}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="ml-4"
          >
            <a
              href="/cv_zine_el_aabidine_hamdoun.pdf"
              download="Zine_El_Aabidine_Hamdoun_CV.pdf"
              className="flex items-center gap-2"
            >
              <Download className="w-3 h-3" />
              CV
            </a>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold">Navigation</span>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-accent py-2',
                          activeSection === link.href.substring(1) && 'text-accent'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}

                  {/* Projects Section in Mobile */}
                  <div className="py-2">
                    <div className="text-lg font-medium mb-2 text-foreground">Projects</div>
                    <div className="pl-4 space-y-2">
                      {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
                        <SheetClose asChild key={category}>
                          <button
                            onClick={() => {
                              handleProjectCategoryClick(category);
                              setMobileMenuOpen(false);
                            }}
                            className="block w-full text-left text-base font-medium transition-colors hover:text-accent py-1"
                          >
                            {categoryLabels[category]}
                          </button>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <SheetClose asChild>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                      >
                        <a
                          href="/cv_zine_el_aabidine_hamdoun.pdf"
                          download="Zine_El_Aabidine_Hamdoun_CV.pdf"
                          className="flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download CV
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
