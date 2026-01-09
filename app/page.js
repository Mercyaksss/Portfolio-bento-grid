import HeroCard from './components/HeroCard/HeroCard';
import PhotoCard from './components/PhotoCard/PhotoCard';
import ProjectsCard from './components/ProjectsCard/ProjectsCard';
import TechStackCard from './components/TechStackCard/TechStackCard';
import AboutCard from './components/AboutCard/AboutCard';
import ContactCard from './components/ContactCard/ContactCard';
import SocialsGroup from './components/SocialsGroup/SocialsGroup';  // Import the group
import Currently from './components/CurrentlyCard/CurrentlyCard';
import './page.scss';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="container">
        <div className="bento-grid">
          <HeroCard className="hero" />
          <PhotoCard className="photo" />
          <ProjectsCard className="projects" />
          <TechStackCard className="tech" />
          <AboutCard className="about" />
          <ContactCard className="contact" />
          <SocialsGroup className="socials-group" />
          <Currently className="currently-card"/>
        </div>
      </main>
    </>
  );
}