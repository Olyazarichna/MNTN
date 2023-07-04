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
          Whenever someone is burnt out, my advice is always: plan a trip so you
          have something to look forward to!
        This website contains hundreds of
          hyper-detailed hiking trail guides and how-to articles written by an
          experienced local hiker, so you can enjoy accurate, reliable trail
          info, and hike safer and better.
        </p>
      </div>
    </section>
  );
};

export default Hero;
