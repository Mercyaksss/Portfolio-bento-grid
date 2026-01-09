import Card from '../Card/Card';
import ProjectItem from './ProjectItem';
import './ProjectsCard.scss';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsCard({className}) {
  return (
    <Card className={`projects-card ${className || ''}`}>
      <h2>_Featured Projects</h2>
      <div className='view'>
        <p>View Projects</p>
        <p>
          <ArrowUpRight/>
        </p>
      </div>
      
    </Card>
  );
}