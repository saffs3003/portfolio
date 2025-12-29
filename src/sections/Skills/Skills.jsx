import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillLists/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  const skillArea = ["Frameworks", ""];

  return (
    <section id="skills" className={`${styles.container} container `}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillSlider}>
        <SkillList />
      </div>
    </section>
  );
}

export default Skills;
