import { Github, Linkedin, Instagram } from 'lucide-react';
import './SocialsMedia.scss'

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

export default function SocialsMedia({ platform, to, colorClass }) {
  const IconComponent = iconMap[platform];
  
  return (
    <a 
      href={to} 
      className={`social-card ${colorClass}`}
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={platform}
    >
      <IconComponent size={28} strokeWidth={1.5} />
    </a>
  );
}