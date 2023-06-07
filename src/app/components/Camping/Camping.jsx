"use client";
import styles from "./Camping.module.scss";
import Image from "next/image";
import LightboxComponent from "../LightboxComponent/LightboxComponent";
import data from "./articles";
import { images } from "./gallery";
import { useState } from "react";

const Camping = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentImage(index);
  };
  const closeLightbox = () => {
    setIsOpen(false);
  };
  const gotoPrevious = () =>
    currentImage > 0 && setCurrentImage(currentImage - 1);

  const gotoNext = () =>
    currentImage + 1 < images.length && setCurrentImage(currentImage + 1);

  return (
    <section id="camping" className={`${"container"} ${styles.blogSection}`}>
      <div>
        <p className={styles.blogSection_text}>
          This summer millions of Americans will take to the road in search of
          this powerful experience of nature. And that parcel of land upon which
          most will elect to drive their car, set up their tent, park their
          trailer or RV is the campsite — which is thus not only an imagined
          ideal but also the fundamental unit of management of the modern
          campground. There are 113,000 federally managed campsites in the
          United States, 166,000 campsites dispersed across state parks, and
          untold numbers in private facilities. Last year Kampgrounds of America
          — KOA, familiarly — alone reported a total usage of over five million
          campsite nights, as well as 1.5 million hits monthly on its website.
        </p>
        <ul className={styles.blogSection_list}>
          {images?.map((img, index) => {
            return (
              <li key={index} className={styles.blogSection_listItem}>
                <button
                  onClick={() => openLightbox(index)}
                  className={styles.blogSection_btn}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className={styles.blogSection_img}
                  />
                </button>
              </li>
            );
          })}
        </ul>
        {isOpen && (
          <LightboxComponent
            isOpen={isOpen}
            images={images}
            currentImage={currentImage}
            closeLightbox={closeLightbox}
            gotoNext={gotoNext}
            gotoPrevious={gotoPrevious}
          />
        )}
      </div>

      <ul className={styles.article_list}>
        {data?.map((article, id) => {
          return (
            <li key={id} className={styles.article_listItem}>
              <div className={styles.article_container}>
                <h3>{article.title}</h3>
                <p className={styles.article_listText}> {article.article}</p>
              </div>

              <Image
                src={article.image}
                width={500}
                height="auto"
                alt={article.title}
                loading="lazy"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Camping;
