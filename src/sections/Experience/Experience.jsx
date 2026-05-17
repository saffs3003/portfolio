import styles from "./Experience.module.css";
import TechStack from "../../common/TechStack";
import { useState } from "react";
import { border } from "@mui/system";

function Experience() {
  const [contentId, setContentId] = useState(0);
  let Experience = [
    {
      id: 1,
      company: "Azrachit pvt ltd.",
      startDate: "2026 Feb",
      endDate: "present",
      position: "FrontEnd Developer",
      projectDescription: "Worked on Angular web apps ",
      techStack: ["Angular", "JavaScript", "Typescript"],
    },

    {
      id: 2,
      company: "Bajra technologies ",
      startDate: "2025 March",
      endDate: "2025 Sept",
      position: "Software Engineer Trainee",
      projectDescription:
        "Worked on Angular web apps and mobile development using ionic",
      techStack: ["Angular", "JavaScript", "Typescript", "ionic"],
    },
    {
      id: 3,
      company: "Aster Innovations",
      startDate: "2024 April",
      endDate: "2024 Sept",
      position: "UI/UX Designer",
      projectDescription: "Designed the UI for Resort Booking App",
      techStack: ["css", "Adobe XD", "Figma"],
    },
  ];
  const currentExp = Experience[contentId];

  return (
    <>
      <section className={`${styles.container} container`} id="experince">
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
              {currentExp.position}
              <span className="highlight"> @ {currentExp.company}</span>
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
