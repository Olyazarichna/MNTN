import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.heading}>mntn</h3>
        <p className={styles.text}>
          Get out there & discover your next slope, mountain & destination!
        </p>
      </div>
      <div className={styles.listWrapper}>
        <div>
          <h4 className={styles.title}>More on The Blog</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                About MNTN
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contributors & Writers
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Write For Us
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contact Us
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>More on MNTN</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                The Team
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Jobs
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Press
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.textTerm}>
        Copyright 2023 MNTN, Inc. Terms & Privacy
      </p>
    </footer>
  );
};

export default Footer;
