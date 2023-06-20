import styles from "./Articles.module.scss";
import Image from "next/image";

const Articles = ({ data }) => {
  console.log('data',data);
  return (
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
  );
};

export default Articles;
