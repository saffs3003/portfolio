import React from "react";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import styles from "./Common.module.css";
function ProjectCard({ src, link, h3, p, tools }) {
  return (
    // <a href={link} target="_blank">
    //   <img className="hover" src={src} alt={`${h3} logo`}style={{ borderRadius: '25%', width: '250px', height: '250px', objectFit: 'cover' }} />
    //   <h3>{h3}</h3>
    //   <p>{p}</p>
    // </a>
    <>
      <div className={styles.projectContainer}>
        <div className={styles.projectHeading}>
          <h3>{h3}</h3>
          <div className={styles.projectLinks}>
            <a href={link} target="_blank" className={styles.link}>
              <ArrowOutwardIcon
                className={styles.arrow}
                fontSize="medium"
                sx={{
                  color: "rgb(252, 250, 166)",
                }}
              />
            </a>
            <a href={link} target="_blank" className={styles.link}>
              <FolderOutlinedIcon
                className={styles.folder}
                fontSize="medium"
                sx={{
                  color: "rgb(252, 250, 166)",
                }}
              />
            </a>
          </div>
        </div>
        <p className={styles.projectDescription}>{p}</p>

        <p
          style={{
            fontSize: "small",
          }}
        >
          {tools}
        </p>
      </div>
    </>
  );
}

export default ProjectCard;
