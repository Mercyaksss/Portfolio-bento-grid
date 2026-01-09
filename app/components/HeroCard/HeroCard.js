import Card from '../Card/Card';
import './HeroCard.scss';

export default function HeroCard({className}) {
  return (
    <Card className={`hero-card ${className || ''}`}>
      <h1>Mercy Yakubu</h1>
      <h2>Frontend Developer</h2>
      <p>Building clean, responsive, and user-focused web experiences with modern JavaScript and React.</p>
      <p className="tagline">Passionate about pixel-perfect UI and smooth interactions.</p>
    </Card>
  );
}