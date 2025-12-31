import styles from "./AboutMeStyles.module.css";
import Profile from "../../assets/profile.jpg";
import { useState, useRef, useEffect } from "react";
import { use } from "react";
import skills from "../../common/SkillLists/skills";

function AboutMe() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  const About = {
    intro: (
      <>
        Hello! My name is Saffi Maharjan. I'm a full-time{" "}
        <span className="highlight">Software Engineer</span> and most time{" "}
        <span className="highlight">AI Enthusiast.</span>
        <br />
        Here are some technologies I have been working with:
      </>
    ),

    profile: Profile,
    skill: Object.values(skills).flat(),
  };

  return (
    <>
      <section className={`${styles.container} container`} id="aboutMe">
        <h1 className="sectionTitle">About Me</h1>
        <div
          ref={domRef}
          className={`${styles.AboutMeContainer} ${
            isVisible ? styles.isVisible : null
          }`}
        >
          <div className={styles.AboutMe}>
            <p className={styles.intro}>{About.intro}</p>
            <div className={styles.skillList}>
              <ul>
                <li>ReactJS</li>
                <li>Angular</li>
                <li>Django</li>
              </ul>
              <ul>
                <li>python</li>
                <li>Javascript ES6+</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>

          <img src={About.profile} alt="profile" />
        </div>
      </section>
    </>
  );
}
export default AboutMe;
