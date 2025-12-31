import styles from "./FooterStyles.module.css";
import Glow from "../../common/Glow";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <Glow />
      <p>
        &copy; {currentYear} Saffi Maharjan. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
