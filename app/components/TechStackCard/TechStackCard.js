import Card from '../Card/Card';
import { FileJson, Atom, ArrowUpRight, Palette, GitBranch } from 'lucide-react';
import './TechStackCard.scss';

export default function TechStackCard({className}) {
  const techStack = [
    { name: 'JavaScript', icon: FileJson, color: '#F7DF1E', colorClass: 'javascript' },
    { name: 'React', icon: Atom, color: '#61DAFB', colorClass: 'react' },
    { name: 'Next.js', icon: ArrowUpRight, color: '#FFFFFF', colorClass: 'nextjs' },
    { name: 'SCSS', icon: Palette, color: '#CC6699', colorClass: 'scss' },
    { name: 'Git', icon: GitBranch, color: '#F05032', colorClass: 'git' },
  ];

  return (
    <Card className={`tech-card ${className || ''}`}>  
      <h2>Tech Stack</h2>
      <div className="tech-icons">
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div key={tech.name} className={`tech-item ${tech.colorClass}`}>
              <IconComponent size={40} strokeWidth={1.5} />
              <span className="tech-name">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}