import Link from 'next/link';
import Card from '../Card/Card';
import './ProjectsCard.scss';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsCard({className}) {
  return (
    <Card className={`projects-card ${className || ''}`}>
      <h2>_Featured Projects</h2>
      <div className='view'>
        <p>View Projects</p>
        <Link href='/Projects'>
          <p>
            <ArrowUpRight/>
          </p>
        </Link>

      </div>
      
    </Card>
  );
}