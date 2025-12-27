import styles from "./Experience.module.css";
import TechStack from "../../common/TechStack";
import { useState } from "react";
import { border } from "@mui/system";

function Experience() {
  const [contentId, setContentId] = useState(0);
  let Experience = [
    {
      id: 1,
      company: "Aster Innovations",
      startDate: "2024 May",
      endDate: "2024 Sept",
      position: "UI/UX Designer",
      projectDescription: "Designed the UI for Resort Booking App",
      techStack: ["javascript", "Adobe XD", "Figma"],
    },
    {
      id: 2,
      company: "Bajra technologies ",
      startDate: "2024 May",
      endDate: "2024 Sept",
      position: "Software Engineer Trainee",
      projectDescription: "Designed the UI for Resort Booking App",
      techStack: ["Angular", "JavaScript", "Typescript"],
    },
  ];
  const currentExp = Experience[contentId];

  return (
    <>
      <section className={styles.container} id="experince">
        <h1 className="sectionTitle">Experience</h1>
        <div className={styles.experience}>
          <div className={styles.navigation}>
            {Experience.map((element, index) => {
              return (
                <div
                  className={`${styles.navigationLink} ${
                    contentId === index ? styles.active : ""
                  }`}
                  key={element.id}
                  onClick={() => {
                    setContentId(index);
                  }}
                >
                  <p>{element.company}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.content}>
            <h3>
              {currentExp.position} @ {currentExp.company}
            </h3>
            <p>
              {currentExp.startDate} - {currentExp.endDate}{" "}
            </p>

            <div className={styles.description}>
              <p> {currentExp.projectDescription}</p>
            </div>
            <div className={styles.techStack}>
              {currentExp.techStack.map((element, index) => {
                return <TechStack tech={element} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
