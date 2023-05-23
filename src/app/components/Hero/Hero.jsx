import Link from "next/link";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.navLink}>
        <p className={styles.navLink_text} id="contact">
          Follow us
        </p>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link
              href="/"
              className={styles.list_link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M5.8 0h8.4A5.8 5.8 0 0 1 20 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8H5.8A5.8 5.8 0 0 1 0 14.2V5.8A5.8 5.8 0 0 1 5.8 0Zm-.2 2A3.6 3.6 0 0 0 2 5.6v8.8A3.6 3.6 0 0 0 5.6 18h8.8a3.6 3.6 0 0 0 3.6-3.6V5.6A3.6 3.6 0 0 0 14.4 2H5.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM10 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link
              href="/"
              className={styles.list_link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17">
                <path d="M21.46 2.012a8.58 8.58 0 0 1-2.466.676A4.305 4.305 0 0 0 20.881.314a8.591 8.591 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914A12.184 12.184 0 0 1 1.997.787a4.271 4.271 0 0 0-.581 2.157 4.29 4.29 0 0 0 1.91 3.572 4.276 4.276 0 0 1-1.945-.537v.054c0 2.08 1.48 3.814 3.443 4.209a4.296 4.296 0 0 1-1.939.073 4.296 4.296 0 0 0 4.01 2.98 8.61 8.61 0 0 1-5.33 1.838c-.347 0-.688-.02-1.024-.06A12.147 12.147 0 0 0 7.12 17c7.893 0 12.21-6.54 12.21-12.21 0-.187-.004-.372-.012-.556a8.719 8.719 0 0 0 2.141-2.222Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.accentTitle}>A Hiking guide</h3>
        <h1 className={styles.heading}>
          Be prepared for the Mountains and beyond!
        </h1>
        <div className={styles.scrollDown}>
          <p className={styles.textScroll}>Scroll down </p>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            fill="none"
          >
            <path
              fill="#fff"
              d="m16 16-1.41-1.41L9 20.17V0H7v20.17l-5.58-5.59L0 16l8 8 8-8Z"
            />
          </svg>
        </div>
      </div>
      <ul className={styles.listScroll}>
        <li className={styles.listScroll_item}>
          <Link href="/" scroll={false}>
            Start
          </Link>
        </li>
        <li className={styles.listScroll_item}>
          <Link href="/#01" scroll={false}>
            01
          </Link>
        </li>
        <li className={styles.listScroll_item}>
          <Link href="/#02" scroll={false}>
            02
          </Link>
        </li>
        <li className={styles.listScroll_item}>
          <Link href="/#03" scroll={false}>
            03
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Hero;