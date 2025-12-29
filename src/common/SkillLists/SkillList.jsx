import skills from "./skills";
import styles from "./SkillSlider.module.css";

function SkillList() {
  const allSvgs = Object.values(skills).flat();
  return (
    <span>
      <div className={` ${styles.slider} ${styles.svgContainer}`}>
        <div className={styles.slideTrack}>
          {[...allSvgs, ...allSvgs].map((SkillIcon, index) => (
            <div className={styles.slide} key={index}>
              <SkillIcon key={index} />
            </div>
          ))}
        </div>
      </div>
    </span>
  );
}

export default SkillList;
