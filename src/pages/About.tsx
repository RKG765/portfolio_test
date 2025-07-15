
import { useState, useEffect } from 'react';
import { Moon, Sun, User, Code, Palette, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/portfolio/Navigation';

const About = () => {
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

  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices and industry standards."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to deliver the best possible user experience."
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
                <User className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-8">My Journey</h2>
                  <div className="prose prose-lg dark:prose-invert">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I started my journey in web development 5 years ago and have been passionate about
                      creating exceptional digital experiences ever since. My path began with curiosity about
                      how websites work, which quickly evolved into a deep love for coding and problem-solving.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Throughout my career, I've had the opportunity to work on diverse projects ranging from
                      small business websites to large-scale enterprise applications. Each project has taught
                      me something new and helped me grow as both a developer and a creative problem solver.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I believe in the power of technology to transform businesses and improve lives. That's
                      why I'm committed to writing clean, efficient code and creating user experiences that
                      are not just functional, but delightful.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      When I'm not coding, you can find me exploring new technologies, contributing to
                      open-source projects, reading tech blogs, or enjoying a good cup of coffee while
                      planning my next project. I'm always eager to learn and stay up-to-date with the
                      latest trends in web development.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Problem Solver
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Team Player
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Continuous Learner
                    </span>
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Creative Thinker
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  <h2 className="text-3xl font-bold mb-8">What I Bring</h2>
                  {highlights.map((highlight, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
                          {highlight.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">My Philosophy</h2>
                <blockquote className="text-xl text-center text-muted-foreground italic max-w-4xl mx-auto">
                  "Great software isn't just about code—it's about understanding people, solving real problems, 
                  and creating experiences that users love. Every line of code should serve a purpose, 
                  and every interface should feel intuitive."
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
