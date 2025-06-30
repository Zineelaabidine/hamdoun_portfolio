
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      id: 1,
      title: "Institution Website",
      description: "A comprehensive website for an educational institution with user authentication, course management, and student portal.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#"
    },
    {
      id: 2,
      title: "Student Project Management App",
      description: "Desktop application for managing student projects, assignments, and academic progress tracking.",
      tech: ["C# .NET", "SQL Server"],
      link: "#"
    },
    {
      id: 3,
      title: "Pharmacy Management Web App",
      description: "A web-based solution for pharmacy inventory management, prescription tracking, and sales reporting.",
      tech: ["JEE", "MySQL", "Tomcat", "HTML", "CSS", "JS"],
      link: "#"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (headingRef.current) {
            headingRef.current.classList.add('animate-fade-in');
          }
          if (projectsRef.current) {
            projectsRef.current.classList.add('animate-fade-in');
            projectsRef.current.style.animationDelay = '0.2s';
          }
          
          // Animate each project card
          document.querySelectorAll('.project-item').forEach((el, index) => {
            (el as HTMLElement).style.opacity = '0';
            (el as HTMLElement).style.transform = 'translateY(20px)';
            (el as HTMLElement).style.transition = 'all 0.5s ease-out';
            (el as HTMLElement).style.transitionDelay = `${0.2 + index * 0.1}s`;
            
            setTimeout(() => {
              (el as HTMLElement).style.opacity = '1';
              (el as HTMLElement).style.transform = 'translateY(0)';
            }, 100);
          });
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
    <section id="projects" ref={sectionRef} className="bg-secondary/30">
      <div className="section-container">
        <h2 ref={headingRef} className="section-heading opacity-0">
          My Projects
        </h2>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-item project-card group"
            >
              <div className="h-48 bg-secondary flex items-center justify-center p-4">
                <div className="text-4xl text-accent/40 group-hover:text-accent transition-colors duration-300">
                  #{project.id}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block text-accent hover:text-accent/80 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
