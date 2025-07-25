
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

export type ProjectCategory = 'mini' | 'pfe' | 'personal';

interface ProjectCategories {
  mini: Project[];
  pfe: Project[];
  personal: Project[];
}

const categoryLabels: Record<ProjectCategory, string> = {
  personal: 'Personal Projects',
  pfe: 'PFE (Final Year Project)',
  mini: 'Mini Projects'
};

const categoryDescriptions: Record<ProjectCategory, string> = {
  personal: 'Ongoing and future projects I build on my own to improve my skills. These are deployed so visitors can try them directly.',
  pfe: 'My significant end-of-studies project that represents my academic culmination.',
  mini: 'Small projects I built while studying, often in parallel with my coursework.'
};

interface ProjectsProps {
  selectedCategory?: ProjectCategory;
}

const Projects = ({ selectedCategory = 'personal' }: ProjectsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState<ProjectCategory>(selectedCategory);

  // Listen for URL hash changes to update category
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#projects-')) {
        const category = hash.replace('#projects-', '') as ProjectCategory;
        if (category in categoryLabels) {
          setCurrentCategory(category);
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const projectCategories: ProjectCategories = {
    mini: [
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
      }
    ],
    pfe: [
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
    ],
    personal: [
      {
        id: 5,
        title: "ZineShop - E-commerce Platform",
        description: "A modern e-commerce web application built with React and modern web technologies. Features a clean, responsive design with product catalog, shopping cart, and user-friendly interface. Deployed and fully functional for visitors to explore.",
        tech: ["React", "typescript", "tailwind CSS", "Express.js", "Supabase", "Netlify","Railway"],
        link: "https://68750a6f87b3dc0008fa9c78--zineshop.netlify.app/",
        period: "2025/7/5 - Present",
        detailedInfo: {
          fullDescription: "ZineShop is a modern e-commerce platform that demonstrates my skills in building full-featured web applications. The project showcases a complete online shopping experience with a focus on user experience, responsive design, and modern web development practices. This is a live, deployed application that visitors can interact with directly.",
          features: [
            "Responsive e-commerce interface",
            "Product catalog and browsing",
            "Shopping cart functionality",
            "Modern and clean UI design",
            "Mobile-optimized experience",
            "Fast loading and performance optimized",
            "Deployed on Netlify for live demonstration"
          ],
          duration: "Ongoing",
          teamSize: "Individual Project",
          objectives: [
            "Demonstrate modern React development skills",
            "Create a fully functional e-commerce experience",
            "Showcase responsive design capabilities",
            "Provide a live demo for portfolio visitors",
            "Practice deployment and hosting workflows",
            "Build a scalable and maintainable codebase"
          ],
          reportLink: "",
          githubLink: ""
        }
      }
    ]
  };

  // Get current projects based on selected category
  const currentProjects = projectCategories[currentCategory];

  const handleViewProject = (projectId: number) => {
    const project = currentProjects.find(p => p.id === projectId);
    if (project && project.detailedInfo) {
      setSelectedProject(projectId);
    } else {
      // For projects without detailed info, use the original link behavior
      window.open(project?.link, '_blank');
    }
  };

  const handleLiveDemo = (link: string) => {
    window.open(link, '_blank');
  };

  const getSelectedProjectDetails = () => {
    return currentProjects.find(p => p.id === selectedProject);
  };

  const handleCategoryChange = (category: ProjectCategory) => {
    setCurrentCategory(category);
    setSelectedProject(null); // Reset selected project when changing category
    // Update URL hash to reflect the selected category
    window.location.hash = `projects-${category}`;
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
          {categoryLabels[currentCategory]}
        </h2>

        {/* Category Description */}
        <div className="text-center mb-8 opacity-0" ref={projectsRef}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {categoryDescriptions[currentCategory]}
          </p>
        </div>

        {/* Category Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-muted p-1 shadow-sm">
            {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative',
                  currentCategory === category
                    ? 'bg-background text-foreground shadow-sm scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                )}
              >
                {categoryLabels[category]}
                {currentCategory === category && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <div key={currentCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-item project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-secondary flex items-center justify-center overflow-hidden relative">
                {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5) ? (
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
                
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewProject(project.id)}
                    className="text-accent hover:text-accent/80 font-medium transition-colors cursor-pointer"
                  >
                    View Details →
                  </button>

                  {/* Live Demo button for personal projects */}
                  {currentCategory === 'personal' && project.link && project.link !== '#' && (
                    <button
                      onClick={() => handleLiveDemo(project.link)}
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        ) : (
          /* Empty State - This should not show now since we have ZineShop */
          <div className="text-center py-16 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground mb-6">
                I'm continuously working on new personal projects that will be deployed and available for you to try directly from this portfolio.
              </p>
              <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
                Stay tuned for more innovative web applications and tools!
              </div>
            </div>
          </div>
        )}
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
                    {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4 || project.id === 5) ? (
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

                    {/* Live Demo for personal projects */}
                    {currentCategory === 'personal' && project.link && project.link !== '#' && (
                      <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center mb-2">
                          <ExternalLink className="h-5 w-5 text-green-600 mr-2" />
                          <h4 className="font-semibold">Live Demo</h4>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 hover:text-green-500 transition-colors"
                        >
                          Try it Live <ExternalLink className="h-4 w-4 ml-1" />
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
