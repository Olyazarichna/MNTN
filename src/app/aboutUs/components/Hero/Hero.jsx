import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.img_wrapper_1}></div>
        <div className={styles.img_wrapper_2}></div>
        <div className={styles.img_wrapper_3}></div>
      </div>

      <p className={`${"container"} ${styles.text}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        repellat vitae quasi doloribus, a exercitationem! Nesciunt officia,
        veritatis corrupti unde magnam consequuntur quo quasi! Iure, quibusdam
        eius beatae vel hic reiciendis eligendi libero omnis est mollitia,
        distinctio obcaecati, debitis consectetur! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Magni, minus!
      </p>
    </section>
  );
};

export default Hero;
