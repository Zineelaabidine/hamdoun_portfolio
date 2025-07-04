
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ExternalLink, FileText, Calendar, Users, Target, Github } from 'lucide-react';

interface ProjectDetailedInfo {
  fullDescription: string;
  features: string[];
  duration: string;
  teamSize: string;
  objectives: string[];
  reportLink: string;
  githubLink: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  period: string;
  detailedInfo?: ProjectDetailedInfo;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Plateforme Web Universitaire – Clone Inspiré de FSTBM",
      description: "Projet académique réalisé en début de formation, visant à recréer une version simplifiée et dynamique du site web de la Faculté des Sciences et Techniques de Beni Mellal (FSTBM), en utilisant PHP, MySQL, HTML et CSS.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "#",
      period: "2024/10/26 - 2024/12/8",
      detailedInfo: {
        fullDescription: "Projet académique réalisé en début de formation, visant à recréer une version simplifiée et dynamique du site web de la Faculté des Sciences et Techniques de Beni Mellal (FSTBM). Ce mini-projet m'a permis d'appliquer mes premières compétences en développement web full-stack et de comprendre les fondamentaux du développement client-serveur.",
        features: [
          "Page d'accueil dynamique affichant les actualités",
          "Système de gestion de contenu simple (ajout/modification/suppression d'articles via la base de données)",
          "Affichage des filières et départements",
          "Intégration d'une interface responsive en HTML/CSS",
          "Connexion à une base de données MySQL pour stocker les informations"
        ],
        duration: "6 weeks",
        teamSize: "Projet Individuel",
        objectives: [
          "Comprendre le fonctionnement client-serveur à travers PHP et MySQL",
          "Pratiquer la structuration de site web avec HTML/CSS",
          "Manipuler les bases de données relationnelles (CRUD)",
          "Reproduire un site réel en respectant une architecture simple et modulaire",
          "Renforcer les compétences en conception de sites dynamiques"
        ],
        reportLink: "https://drive.google.com/file/d/1qcrZAn5VAic4WVqc_MiwMIE6XO8dalH-/view?usp=sharing",
        githubLink: "https://github.com/Zineelaabidine/PlateformeWebUniversitaire"
      }
    },
    {
      id: 2,
      title: "Student Project Management App",
      description: "Desktop application for managing student projects, assignments, and academic progress tracking.",
      tech: ["C# .NET", "SQL Server"],
      link: "#",
      period: "2025/1/4 - 2025/2/23",
      detailedInfo: {
        fullDescription: "A comprehensive desktop application designed to streamline student project management and academic progress tracking. This application provides an intuitive interface for students and educators to manage assignments, track project milestones, and monitor academic performance.",
        features: [
          "Project creation and management system",
          "Assignment tracking and deadline management",
          "Academic progress monitoring and reporting",
          "User authentication and role-based access",
          "Database integration for data persistence",
          "Intuitive desktop interface with modern UI"
        ],
        duration: "7 weeks",
        teamSize: "Individual Project",
        objectives: [
          "Improve project organization for students",
          "Enhance academic performance tracking",
          "Provide real-time progress monitoring",
          "Create user-friendly desktop experience"
        ],
        reportLink: "https://drive.google.com/file/d/1qjVEDd54qGoOUzRQyBFMLGUw72l02H2N/view?usp=sharing",
        githubLink: "https://github.com/Zineelaabidine/studentProjectManagment"
      }
    },
    {
      id: 3,
      title: "Pharmacy Management Web App",
      description: "A web-based solution for pharmacy inventory management, prescription tracking, and sales reporting.",
      tech: ["JEE", "MySQL", "Tomcat", "HTML", "CSS", "JS"],
      link: "#",
      period: "2025/2/9 - 2025/3/14",
      detailedInfo: {
        fullDescription: "A comprehensive web-based pharmacy management system designed to streamline pharmacy operations, inventory management, and prescription tracking. This application provides an intuitive interface for pharmacists to manage medications, track prescriptions, and generate detailed sales reports.",
        features: [
          "Comprehensive inventory management system",
          "Prescription tracking and management",
          "Sales reporting and analytics",
          "User authentication and role-based access control",
          "Real-time stock level monitoring",
          "Automated low-stock alerts",
          "Customer management system",
          "Supplier management and ordering"
        ],
        duration: "5 weeks",
        teamSize: "Individual Project",
        objectives: [
          "Digitize pharmacy operations",
          "Improve inventory accuracy and efficiency",
          "Enhance prescription management workflow",
          "Provide comprehensive reporting capabilities"
        ],
        reportLink: "https://drive.google.com/file/d/1w6tc0CK2vN3rwxNEoXYdNeZSsqG5FzHr/view?usp=sharing",
        githubLink: "https://github.com/Zineelaabidine/pharmacyManagementApp"
      }
    },
    {
      id: 4,
      title: "InstantAd - AI-Powered Advertising Generation Platform",
      description: "Final Year Project (PFE) - An innovative web application that uses artificial intelligence to automatically generate visual and textual advertising content for social media platforms.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Supabase", "OpenAI", "DeepSeek", "Tailwind CSS"],
      link: "#",
      period: "2025/4/1 - 2025/6/1",
      detailedInfo: {
        fullDescription: "Developed during my Final Year Project at BM DIGITAL PRIME, InstantAd is a comprehensive web application that leverages artificial intelligence to revolutionize advertising content creation. The platform enables users to transform product images into professional advertising content adapted for major social media platforms like Facebook, Instagram, and Twitter, supporting multiple languages and providing an intuitive interface for users without design or marketing expertise.",
        features: [
          "AI-powered automatic generation of visual and textual advertising content",
          "Multi-platform support (Facebook, Instagram, Twitter, web banners)",
          "Multilingual content generation capabilities",
          "Brand setup and management system",
          "Real-time advertising preview and customization",
          "User dashboard for managing generated advertisements",
          "AI assistant for marketing guidance and support",
          "Responsive design with modern UI/UX",
          "Secure user authentication and data protection",
          "Advertisement history and management system"
        ],
        duration: "2 months",
        teamSize: "2-person team (with El Hamzaoui Abdessamad)",
        objectives: [
          "Democratize access to professional advertising creation tools",
          "Reduce time and costs associated with traditional advertising design",
          "Integrate cutting-edge AI technologies for content generation",
          "Provide an intuitive platform for non-technical users",
          "Enable rapid adaptation to market trends and social media formats",
          "Implement modern full-stack development practices",
          "Deliver a scalable and maintainable web application"
        ],
        reportLink: "https://drive.google.com/file/d/1aUthaGuOoOPS68fZH_7JJHEb3Rs0Rauq/view?usp=sharing",
        githubLink: "https://github.com/Zineelaabidine/instantAd"
      }
    }
  ];

  const handleViewProject = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project && project.detailedInfo) {
      setSelectedProject(projectId);
    } else {
      // For projects without detailed info, use the original link behavior
      window.open(project?.link, '_blank');
    }
  };

  const getSelectedProjectDetails = () => {
    return projects.find(p => p.id === selectedProject);
  };

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
              <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden relative">
                {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) ? (
                  <>
                    <img
                      src={`/project${project.id}.png`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to project number if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center text-4xl text-accent/40 group-hover:text-accent transition-colors duration-300"
                      style={{ display: 'none' }}
                    >
                      #{project.id}
                    </div>
                  </>
                ) : (
                  <div className="text-4xl text-accent/40 group-hover:text-accent transition-colors duration-300">
                    #{project.id}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{project.period}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => handleViewProject(project.id)}
                  className="inline-block text-accent hover:text-accent/80 font-medium transition-colors cursor-pointer"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (() => {
            const project = getSelectedProjectDetails();
            if (!project?.detailedInfo) return null;

            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-accent mb-2">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">
                    {project.detailedInfo.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {/* Project Image */}
                  <div className="w-full h-64 bg-secondary/50 rounded-lg overflow-hidden border border-border flex items-center justify-center">
                    {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) ? (
                      <img
                        src={`/project${project.id}.png`}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-accent/40">
                        #{project.id}
                      </div>
                    )}
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-accent mr-2" />
                        <h4 className="font-semibold">Duration</h4>
                      </div>
                      <p className="text-muted-foreground">{project.detailedInfo.duration}</p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-accent mr-2" />
                        <h4 className="font-semibold">Team Size</h4>
                      </div>
                      <p className="text-muted-foreground">{project.detailedInfo.teamSize}</p>
                    </div>

                    {project.detailedInfo.reportLink && (
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <FileText className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Report</h4>
                        </div>
                        <a
                          href={project.detailedInfo.reportLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                        >
                          View Report <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    )}

                    {project.detailedInfo.githubLink && (
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <Github className="h-5 w-5 text-accent mr-2" />
                          <h4 className="font-semibold">Source Code</h4>
                        </div>
                        <a
                          href={project.detailedInfo.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                        >
                          View Code <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-accent mr-2">🛠️</span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <span className="text-accent mr-2">✨</span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.detailedInfo.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Objectives */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="h-5 w-5 text-accent mr-2" />
                      Project Objectives
                    </h4>
                    <ul className="space-y-2">
                      {project.detailedInfo.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">→</span>
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
