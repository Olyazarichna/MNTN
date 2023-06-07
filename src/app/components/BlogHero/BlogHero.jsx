import styles from "./BlogHero.module.scss";
import BlogNavigation from "../BlogNavigation/BlogNavigation";

const BlogHero = () => {
  return (
    <section className={styles.blogContainer}>
      <div className={`${"container"}`}>
        <BlogNavigation />
      </div>
    </section>
  );
};

export default BlogHero;
