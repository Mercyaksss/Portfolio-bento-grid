import Card from '../Card/Card';

export default function ProjectItem({ title, tech, live, github, image }) {
  return (
    <Card clickable={true} className="project-item">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p className="tech">{tech}</p>
      <div className="links">
        <a href={live} target="_blank" rel="noopener">Live Demo</a>
        <a href={github} target="_blank" rel="noopener">GitHub</a>
      </div>
    </Card>
  );
}