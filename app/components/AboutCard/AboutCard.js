import Card from '../Card/Card';
import './AboutCard.scss';

export default function About({className}) {
  return (
    <>
      <main className={`about-container ${className || ''}`}> 
        <section className="about-content">
          <Card className="about-card large">
            <h2>_About Me</h2>
            
            <div className="about-body">
              <p>
               I&apos;m  a frontend developer who enjoys turning ideas and designs into clean, usable interfaces. I care a lot about layout, spacing, and the little details that make a product feel good to use, not just “finished.”
              </p>

              <p>
                I mostly work with JavaScript, Next.js, and SCSS, and I&apos;m comfortable building things from scratch, debugging when things break, and figuring things out as I go. I don&apos;t know everything, but I learn fast, I Google well, and I actually enjoy the problem-solving part of development.
              </p>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
}