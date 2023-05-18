import Link from 'next/link';
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${'container'} ${styles.footer}`}>
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
              <Link
                className={styles.link}
                href="/"
              >
                About MNTN
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/"
              >
                Contributors & Writers
              </Link>
            </li>
            <li className={styles.listItem}>
              <a
                className={styles.link}
                href="/"
              >
                Write For Us
              </a>
            </li>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/#contact"
              >
                Contact Us
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={styles.title}>More on MNTN</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/"
              >
                The Team
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/"
              >
                Jobs
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link
                className={styles.link}
                href="/"
              >
                Press
              </Link>
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
