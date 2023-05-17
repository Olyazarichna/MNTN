import Image from "next/image";
import img1 from "../../images/01-1x.png";
import img2 from "../../images/02-1x.png";
import img3 from "../../images/03-1x.png";
import styles from "./GallerySection.module.scss";
const GallerySection = () => {
  return (
    // <section className={`${"container"} ${styles.gallerySection}`}>
    <section className={styles.gallerySection}>
      <ul>
        <li className={styles.wrapper}>
          <div className={styles.textContainer}>
            <p className={styles.scrollText}>01</p>
            <p className={styles.contentText}>Get Started</p>
            <h3 className={styles.heading}>What level of hiker are you?</h3>
            <p className={styles.text}>
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </p>
            <button className={styles.btn}>read more</button>
          </div>

          <Image
            className={styles.img}
            src={img1}
            alt={"person walk, mountains"}
            width={250}
            height={300}
          />
        </li>
        <li className={styles.wrapper}>
          <div className={styles.textContainer}>
            <p className={styles.scrollText}>02</p>
            <p className={styles.contentText}>Hiking Essentials</p>
            <h3 className={styles.heading}>Picking the right Hiking Gear!</h3>
            <p className={styles.text}>
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </p>
            <button className={styles.btn}>read more</button>
          </div>

          <Image
            className={styles.img}
            src={img2}
            alt={"looking to the mountains"}
            width={250}
            height={300}
          />
        </li>
        <li className={styles.wrapper}>
          <div className={styles.textContainer}>
            <p className={styles.scrollText}>03</p>
            <p className={styles.contentText}>where you go is the key</p>
            <h3 className={styles.heading}>Understand Your Map & Timing</h3>
            <p className={styles.text}>
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
            </p>
            <button className={styles.btn}>read more</button>
          </div>
          <Image
            className={styles.img}
            src={img3}
            alt={"compass, mountains"}
            width={250}
            height={300}
          />
        </li>
      </ul>
    </section>
  );
};

export default GallerySection;
