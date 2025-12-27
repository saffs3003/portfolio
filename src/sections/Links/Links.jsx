import styles from "./LinksStyle.module.css";

function Links(props) {
  return (
    <>
      <a href={props.sectionLink} className={styles.linkContainer}>
        <div className={styles.line}></div>

        {props.sectionName}
      </a>
    </>
  );
}

export default Links;
