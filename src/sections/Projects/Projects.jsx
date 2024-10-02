import styles from './ProjectsStyles.module.css';
import textcolab from '../../assets/9.png';
import ui from '../../assets/ui.jpeg';

import Ecommerce from '../../assets/3.png';
import DigiLocker from '../../assets/digiloc.png';
import FakeNews from '../../assets/news.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={ui}
          link="https://pear-holiday-f31.notion.site/Designer-Portfolio-1124be3d757d80099a6deeffc5a4719f?pvs=4"
          h3="UI/UX projects"
          p="UI/UX designs"
        />
      <ProjectCard
          src={textcolab}
          link="https://github.com/saffi-saffs/CollabTextEditor"
          h3="Collab Text"
          p="Collaborative Text Editor"
        />
       
        <ProjectCard
          src={Ecommerce}
          link="https://github.com/saffi-saffs/E-commerceApp"
          h3="E-Commerce App"
          p="Clothing app"
        />
        <ProjectCard
          src={DigiLocker}
          link="https://github.com/saffi-saffs/DigiLocker"
          h3="DigiLoc"
          p="Digital Document locker"
        />
        <ProjectCard
          src={FakeNews}
          link="https://github.com/saffi-saffs/FakeNews"
          h3="News Portal"
          p="News App & fake News Detector"
        />
      </div>
    </section>
  );
}

export default Projects;
