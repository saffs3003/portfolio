import styles from "./Carousel.module.css";
import Design from "../../assets/ui.jpeg";
import TextEditor from "../../assets//appdemo/textEditor.png";
import DigiLoc from "../../assets/appdemo/digiloc.png";
import Spotify from "../../assets/appdemo/artistInterface.png";
import Ecommerce from "../../assets/appdemo/ecommerce.png";
import Portfolio from "../../assets/appdemo/portfolio.png";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { yellow } from "@mui/material/colors";

function Carousel() {
  const ImageCollection = [
    {
      id: 1,
      name: "Amplify",
      pic: Spotify,
      git: "https://github.com/saffs3003/spotify.git",
      hostLink: "",
    },
    {
      id: 2,
      name: "E commerce Website",
      pic: Ecommerce,
      git: "",
      hostLink: "",
    },
    {
      id: 4,
      name: "portfolio",
      pic: Portfolio,
      git: "https://github.com/saffs3003/portfolio.git",
      hostLink: "https://saffimaharjan.com.np/",
    },
    { id: 3, name: "Text Editor", pic: TextEditor, git: "", hostLink: "" },
  ];
  const totalSlides = ImageCollection.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("next", currentIndex);

    setCurrentIndex((prev) => (prev + 1 === totalSlides ? 0 : prev + 1));
    console.log("after next", currentIndex);
  };

  const handlePrev = () => {
    console.log("prev", currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    console.log("After prev", currentIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext, currentIndex]);

  return (
    <>
      <section className={styles.carouselContainer}>
        <ol className={styles.carouselViewport}>
          {ImageCollection.map((element, index) => {
            return (
              <li
                key={index}
                id={index}
                tabIndex="0"
                className={styles.carouselSlide}
              >
                <div
                  className={styles.carouselSnapper}
                  key={index}
                  style={{
                    transform: `translateX(-${currentIndex * 100 + 1}%)`,
                  }}
                >
                  <IconButton
                    className={styles.carouselPrev}
                    onClick={handlePrev}
                    fontSize="large"
                  >
                    <NavigateBeforeIcon
                      fontSize="large"
                      sx={{
                        color: "var(--highlight-text)",
                      }}
                    />
                  </IconButton>
                  <img
                    src={element.pic}
                    className={styles.carouselImg}
                    key={index}
                  />
                  <h2 className={styles.projectName}>{element.name}</h2>
                  <IconButton
                    className={styles.carouselNext}
                    onClick={handleNext}
                    fontSize="large"
                  >
                    <NavigateNextIcon
                      fontSize="large"
                      sx={{
                        color: "var(--highlight-text)",
                      }}
                    />
                  </IconButton>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Carousel;
