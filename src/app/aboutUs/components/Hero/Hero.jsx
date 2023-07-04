import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.img_wrapper_1}></div>
        <div className={styles.img_wrapper_2}></div>
        <div className={styles.img_wrapper_3}></div>
      </div>
      <div className={"container"}>
        <h1 className={styles.heading}>
          NEVER WONDER WHERE YOU&rsquo;LL HIKE NEXT
        </h1>
        <p className={styles.text}>
          We are a team of nature and adventure enthusiasts specializing in
          hiking and mountain tourism. With our experienced guides and
          instructors, you can explore the thrilling world of mountain peaks,
          scenic trails, and outdoor adventures. Our goal is to provide you with
          unforgettable experiences and help you fulfill your mountain dreams.
          Our team guarantees a professional approach, reliable equipment, and
          unforgettable moments that will stay with you for a lifetime. Join us
          and discover more about the exciting hikes and routes we offer.
          Together, we can create an unforgettable journey that will leave you
          with a sense of achievement and awe for nature.
        </p>
        <p className={styles.text}>
          Whenever someone is burnt out, my advice is always: plan a trip so you
          have something to look forward to! This website contains hundreds of
          hyper-detailed hiking trail guides and how-to articles written by an
          experienced local hiker, so you can enjoy accurate, reliable trail
          info, and hike safer and better.
        </p>
        <p className={styles.text}>
          Come and join us to explore the world of hiking! Best regards, The
          MNTN Team
        </p>
      </div>
    </section>
  );
};

export default Hero;
