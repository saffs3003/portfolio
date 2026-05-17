import React, { createContext, useContext, useEffect, useState } from "react";

import styles from "./TextAnimation.module.css";

function TextAnimation(props) {
  const TextToAnimate = props.texts;

  return (
    <>
      <div className={`${styles.container} container`}>
        {TextToAnimate.map((element, index) => {
          return (
            <div className={styles.word} style={{ "--i": index }} key={index}>
              {element}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
}

function TypeWriter(props) {
  return (
    <>
      <h2 className={styles.intro}>
        hi,<span className={styles.name}>{props.name}</span> here.
      </h2>
    </>
  );
}

export default TextAnimation;
export { TypeWriter };
