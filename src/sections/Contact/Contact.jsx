import { Button } from "@mui/material";
import styles from "./ContactStyles.module.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendIcon from "@mui/icons-material/Send";
function Contact() {
  return (
    <section id="contact" className={`${styles.container} container`}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactContainer}>
        <form className={styles.form}>
          <h3 style={{ color: "var(--highlight-text)" }}>
            Let's work together
          </h3>
          <p>Let's create something amazing together!</p>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="phone Number" />
          <select id="service" name="services">
            <option value="web">Web Development</option>
            <option value="apk">Apk Development</option>
            <option value="ui/ux">UI/UX Design</option>
            <option value="others">just Droping By?</option>
          </select>
          <textarea placeholder="message here"></textarea>
          <Button
            type="submit"
            endIcon={<SendIcon fontSize="large" />}
            size="large"
          >
            submit
          </Button>
        </form>
        <div className={styles.email}>
          <Button
            sx={{
              borderRadius: "12px",
              color: "var(--highlight-text)",
              border: "1px solid var(--highlight-text)",
              textTransform: "none",
            }}
            startIcon={<MailOutlineIcon />}
            size="large"
          >
            maharjansaffi@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
