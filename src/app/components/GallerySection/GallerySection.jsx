import Image from "next/image";
import { img1x1, img1x2, img2x1, img2x2, img3x1, img3x2 } from "./gallery";

import styles from "./GallerySection.module.scss";

const GallerySection = () => {
  return (
    <section className={`${"container"} ${styles.gallerySection}`}>
      <ul className={styles.list}>
        <li className={styles.list_item} id="01">
          <article className={styles.article}>
            <p className={styles.article_background}>01</p>
            <p className={styles.article_text}>Get Started</p>
            <h3 className={styles.article_heading}>
              What level of hiker are you?
            </h3>
            <p className={styles.article_mainContent}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <button className={styles.article_btn}>read more</button>
          </article>
          <Image
            className={styles.article_img}
            src={img1x1}
            alt="person walk, mountains"
            // layout="responsive"
            priority={false}
            sizes="(max-width: 320px) 300px,
  (max-width: 768px) 350px,
  (max-width: 1280px) 566px"
            srcSet={`${img1x1} 1x, ${img1x2} 2x`}
          />
        </li>
        <li className={styles.list_item} id="02">
          <article className={styles.article}>
            <p className={styles.article_background}>02</p>
            <p className={styles.article_text}>Hiking Essentials</p>
            <h3 className={styles.article_heading}>
              Picking the right Hiking Gear!
            </h3>
            <p className={styles.article_mainContent}>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <button className={styles.article_btn}>read more</button>
          </article>
          <Image
            className={styles.article_img}
            src={img2x1}
            alt="looking to the mountains"
            priority={false}
            sizes="(max-width: 320px) 300px,
  (max-width: 768px) 350px,
  (max-width: 1280px) 566px"
            srcSet={`${img2x1} 1x, ${img2x2} 2x`}
          />
        </li>
        <li className={styles.list_item} id="03">
          <article className={styles.article}>
            <p className={styles.article_background}>03</p>
            <p className={styles.article_text}>where you go is the key</p>
            <h3 className={styles.article_heading}>
              Understand Your Map & Timing
            </h3>
            <p className={styles.article_mainContent}>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <button className={styles.article_btn}>read more</button>
          </article>
          <Image
            className={styles.article_img}
            src={img3x1}
            alt="compass, mountains"
            priority={false}
            sizes="(max-width: 320px) 300px,
  (max-width: 768px) 350px,
  (max-width: 1280px) 566px"
            srcSet={`${img3x1} 1x, ${img3x2} 2x`}
          />
        </li>
      </ul>
    </section>
  );
};

export default GallerySection;
