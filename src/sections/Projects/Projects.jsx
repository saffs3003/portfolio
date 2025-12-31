import styles from "./ProjectsStyles.module.css";
import textcolab from "../../assets/appdemo/textEditor.png";
import ui from "../../assets/ui.jpeg";
import spotify from "../../assets/appdemo/artistInterface.png";
import Ecommerce from "../../assets/appdemo/ecommerce.png";
import DigiLocker from "../../assets/appdemo/digiloc.png";
import FakeNews from "../../assets/news.jpg";
import ProjectCard from "../../common/ProjectCard";
import Carousel from "../../common/Carousel/Carousel";

function Projects() {
  return (
    <section id="projects" className={`${styles.container} container`}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectSection}>
        <div className={styles.carousel}>
          <Carousel></Carousel>
        </div>

        <div className={styles.projectsContainer}>
          <ProjectCard
            src={spotify}
            link="https://github.com/saffs3003/spotify"
            h3="Amplify "
            p="Music player web appliction"
            tools="Angular,nodejs"
          />
          <ProjectCard
            src={ui}
            link="https://design-portfolio-b3824f.webflow.io/"
            h3="UI/UX projects"
            p="UI/UX designs"
            tools="figma,photoshop"
          />
          <ProjectCard
            src={textcolab}
            link="https://github.com/saffi-saffs/CollabTextEditor"
            h3="Collab Text"
            p="Collaborative Text Editor"
            tools="react, socket"
          />

          <ProjectCard
            src={Ecommerce}
            link="https://github.com/saffi-saffs/E-commerceApp"
            h3="E-Commerce App"
            p="Clothing app"
            tools="laravel,psql"
          />
          <ProjectCard
            src={DigiLocker}
            link="https://github.com/saffi-saffs/DigiLocker"
            h3="DigiLoc"
            p="Digital Document locker"
            tools="laravel"
          />
          <ProjectCard
            src={FakeNews}
            link="https://github.com/saffi-saffs/FakeNews"
            h3="News Portal"
            p="News App & fake News Detector"
            tools="django, tensorflow"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
