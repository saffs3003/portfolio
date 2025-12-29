import styles from "./HeroStyles.module.css";

import { Button } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { TypeWriter } from "../../common/TextAnimation/TextAnimation";

function Hero(props) {
  return (
    <>
      <div className={styles.hero} id="hero">
        <TypeWriter name="Saffi " />

        <p>
          I'm a software engineer and artist based in Kathmandu. I'm fascinated
          by large-scale, high-impact products.
        </p>
        <a href="mailto:maharjansaffi@gmail.com">
          <Button
            variant="outlined"
            size="large"
            fontSize="large"
            sx={{
              borderColor: "#FCFAA6",
              color: " #FCFAA6",
              textTransform: "none",
              border: "2px solid #FCFAA6 ",
            }}
            endIcon={<MailOutlineIcon fontSize="inherit" />}
          >
            say hi
          </Button>
        </a>
      </div>
    </>
  );
}

export default Hero;
