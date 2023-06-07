"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className={`${"container"} ${styles.header}`}>
      <Link href="/" className={styles.logo}>
        MNTN
      </Link>
      <div className={styles.navWrapper}>
        <NavBar />
      </div>

      <button className={styles.btn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path
            fillRule="evenodd"
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0ZM5.07 16.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78A7.893 7.893 0 0 1 10 18c-1.86 0-3.57-.64-4.93-1.72Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 0 1 2 10c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5S8.06 11 10 11s3.5-1.56 3.5-3.5S11.94 4 10 4Zm0 5c-.83 0-1.5-.67-1.5-1.5S9.17 6 10 6s1.5.67 1.5 1.5S10.83 9 10 9Z"
            clipRule="evenodd"
          />
        </svg>
        <span className={styles.btn_text}>Account</span>
      </button>
      <button className={styles.btn_menu} onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </button>
      {isOpen && (
        <div className={styles.navigation}>
          <NavBar className={styles.navVisible} />
        </div>
      )}
    </header>
  );
};

export default Header;
