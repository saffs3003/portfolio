import styles from "./NavStyles.module.css";
import heroImg from "../../assets/profile.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/SaffiMaharjan_CV.pdf";
import { useTheme } from "../../common/ThemeContext";
import Links from "../Links/Links";
import TextAnimation from "../../common/TextAnimation/TextAnimation";

function Nav(props) {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "dark" ? moon : sun;
  const twitterIcon = twitterDark;
  const githubIcon = githubDark;
  const linkedinIcon = linkedinDark;

  return (
    <section id="hero" className={`${styles.container} container`}>
      <div className={styles.info}>
        <h1>
          Saffi
          <br />
          Maharjan
        </h1>
        <TextAnimation
          texts={["Software Developer", "UI/UX Designer", "AI Engineer"]}
        />

        <p className={styles.description}>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <div className={styles.links}>
          <Links sectionLink="#projects" sectionName="Projects" />
          <Links sectionLink="#experince" sectionName="Experience" />
          <Links sectionLink="#contact" sectionName="Contact" />
        </div>

        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/saffi-saffs" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://np.linkedin.com/in/saffimaharjan" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Nav;
