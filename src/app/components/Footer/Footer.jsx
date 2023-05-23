'use client';
import Link from 'next/link';
import styles from "./Footer.module.scss";
import { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
const Footer = () => {
  const [isModalOpen, setIsModalOpen]= useState(false);

  const openModal=()=>{
    setIsModalOpen(true);
  }
  const closeModal=()=>{
    setIsModalOpen(false);
  }
  return (
    <>
     <footer className={`${'container'} ${styles.footer}`}>
      <div>
        <h3 className={styles.footer_heading}>mntn</h3>
        <p className={styles.footer_text}>
          Get out there & discover your next slope, mountain & destination!
        </p>
      </div>
      <div className={styles.listWrapper}>
        <div>
          <h4 className={styles.title}>More on The Blog</h4>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
                href="/"
              >
                About MNTN
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
                href="/"
              >
                Contributors & Writers
              </Link>
            </li>
            <li className={styles.list_item}>
              <a
                className={styles.list_link}
                href="/"
              >
                Write For Us
              </a>
            </li>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
                onClick={openModal}
                href="/#contact"
              >
                Contact Us
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
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
            <li className={styles.list_tem}>
              <Link
                className={styles.list_link}
                href="/"
              >
                The Team
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
                href="/"
              >
                Jobs
              </Link>
            </li>
            <li className={styles.list_item}>
              <Link
                className={styles.list_link}
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
    {isModalOpen &&(<Backdrop><Modal onClick={closeModal}/></Backdrop>)
      

    }
    </>
   
  );
};

export default Footer;
