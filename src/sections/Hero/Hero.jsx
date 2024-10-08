import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'dark' ? moon:sun;
  const twitterIcon = theme === 'dark' ? twitterDark : twitterLight;
  const githubIcon = theme === 'dark' ? githubDark : githubLight;
  const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Saffi Maharjan"
          style={{ borderRadius: '50%', width: '400px', height: '400px', objectFit: 'cover' }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Saffi
          <br />
          Maharjan
        </h1>
        <h2>UI/UX Designer</h2>
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
        <p className={styles.description}>
        Passionate about creating user-centered designs and intuitive interfaces
        ensuring seamless user experiences across digital products
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
