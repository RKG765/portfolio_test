
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: 'React/TypeScript', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'AWS/Cloud', level: 78 },
    { name: 'Docker', level: 80 }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Python', 'Next.js', 'Tailwind CSS',
    'Redux', 'GraphQL', 'REST APIs', 'Jest', 'Cypress', 'CI/CD'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground">
              The tools and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
