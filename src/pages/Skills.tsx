
import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowLeft, Code, Database, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/portfolio/Navigation';

const Skills = () => {
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

  const technicalSkills = [
    { name: 'React/TypeScript', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Python', level: 82, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'AWS/Cloud', level: 78, category: 'DevOps' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'GraphQL', level: 75, category: 'API' },
    { name: 'MongoDB', level: 83, category: 'Database' }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="h-6 w-6" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS/SCSS', 'JavaScript ES6+', 'Webpack', 'Vite']
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel', 'RESTful APIs', 'Microservices', 'Serverless']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="h-6 w-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase', 'Prisma', 'SQL', 'NoSQL', 'Database Design']
    },
    {
      title: 'DevOps & Tools',
      icon: <Code className="h-6 w-6" />,
      skills: ['Docker', 'AWS', 'Vercel', 'Netlify', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Jest', 'Cypress']
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-6 w-6" />,
      skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'Responsive Design', 'Mobile-First Design']
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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Code className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive overview of my technical skills, tools, and technologies I work with
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Technical Proficiency</h2>
                  <div className="space-y-6">
                    {technicalSkills.map((skill, index) => (
                      <div key={index} className="bg-card p-4 rounded-lg border">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className="font-semibold text-lg">{skill.name}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {skill.category}
                            </Badge>
                          </div>
                          <span className="text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-3" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-8">Experience Timeline</h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-6 pb-8">
                      <div className="bg-primary w-4 h-4 rounded-full -ml-8 mb-3"></div>
                      <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
                      <p className="text-primary font-medium mb-2">2022 - Present</p>
                      <p className="text-muted-foreground">
                        Leading development of complex web applications using React, Node.js, and cloud technologies.
                        Mentoring junior developers and architecting scalable solutions.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-6 pb-8">
                      <div className="bg-muted w-4 h-4 rounded-full -ml-8 mb-3"></div>
                      <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                      <p className="text-primary font-medium mb-2">2020 - 2022</p>
                      <p className="text-muted-foreground">
                        Developed and maintained multiple client projects, focusing on responsive design
                        and performance optimization.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-muted pl-6">
                      <div className="bg-muted w-4 h-4 rounded-full -ml-8 mb-3"></div>
                      <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                      <p className="text-primary font-medium mb-2">2019 - 2020</p>
                      <p className="text-muted-foreground">
                        Started my professional journey focusing on frontend technologies and user experience design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-card rounded-lg p-8 border">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
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

export default Skills;
