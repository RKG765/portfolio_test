
import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/portfolio/Navigation';

const Projects = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, admin dashboard, inventory management, and real-time order tracking.',
      fullDescription: 'This project showcases modern web development practices with a focus on scalability and user experience. The platform supports multiple payment methods, has a responsive design that works seamlessly across all devices, and includes advanced features like product recommendations, wishlist functionality, and detailed analytics for store owners.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: 'March 2024',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced project tracking capabilities.',
      fullDescription: 'Built to streamline team productivity, this application features real-time collaboration using WebSockets, advanced drag-and-drop interfaces, time tracking, project templates, and comprehensive reporting. The app supports multiple project views including Kanban boards, Gantt charts, and calendar views.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: 'January 2024',
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive charts, customizable widgets, and severe weather alerts for multiple locations.',
      fullDescription: 'This dashboard aggregates weather data from multiple APIs to provide comprehensive weather information. Features include 7-day forecasts, hourly predictions, weather maps, historical data analysis, and customizable widgets that users can arrange according to their preferences.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: 'November 2023',
      category: 'Dashboard'
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'A comprehensive analytics platform for social media managers to track performance across multiple platforms with detailed insights and automated reporting.',
      fullDescription: 'This tool helps businesses and content creators understand their social media performance through detailed analytics, competitor analysis, and trend identification. It includes features for scheduling posts, tracking engagement metrics, and generating comprehensive reports.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'D3.js', 'Celery'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      date: 'September 2023',
      category: 'Analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-20 right-4 z-50 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>

      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <section className="py-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A showcase of my recent work, demonstrating various technologies and problem-solving approaches
                </p>
              </div>

              <div className="space-y-16">
                {projects.map((project, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="lg:order-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:order-2">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Tag className="h-3 w-3" />
                            {project.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.date}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.fullDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            <span>View Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Projects;
