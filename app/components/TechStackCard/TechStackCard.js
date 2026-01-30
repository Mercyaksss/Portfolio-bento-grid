import Card from '../Card/Card';
// import { FileJson, Atom, ArrowUpRight, Palette, GitBranch } from 'lucide-react';
import './TechStackCard.scss';
import js from '../../assets/js.svg'
import html from '../../assets/html.svg'
import react from '../../assets/react.svg'
import next from '../../assets/next.svg'
import css from '../../assets/css.svg'
import github from '../../assets/github.svg'
import nodejs from '../../assets/nodejs.svg'
import tailwind from '../../assets/tailwind.svg'
import Image from 'next/image';






export default function TechStackCard({className}) {
  const techStack = [
    { name: 'HTML', icon: html, color: '#F05032', colorClass: 'html' },
    { name: 'CSS', icon: css, color: '#CC6699', colorClass: 'scss' },
    { name: 'JavaScript', icon: js, color: '#F7DF1E', colorClass: 'javascript' },
    { name: 'React', icon: react, color: '#61DAFB', colorClass: 'react' },
    { name: 'Next.js', icon: next, color: '#FFFFFF', colorClass: 'nextjs' },
    { name: 'Git', icon: github, color: '#F05032', colorClass: 'git' },
    { name: 'Tailwind', icon: tailwind, color: '#CC6699', colorClass: 'tailwind' },
    { name: 'Node.js', icon: nodejs, color: '#CC6699', colorClass: 'tailwind' },
  ];

  return (
    <Card className={`tech-card ${className || ''}`}>  
      <h2>Tech Stack</h2>
      <div className="tech-icons">
        {techStack.map((tech) => {
          return (
            <div key={tech.name} className={`tech-item`} >
              <Image src={tech.icon} width={40} height={40} alt={`${tech.name} icon`} style={{ color: tech.color }} />
              <span className="tech-name">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}