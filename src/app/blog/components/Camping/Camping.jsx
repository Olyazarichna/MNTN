
import styles from "./Camping.module.scss";
import campingArticles  from "./articles";
import Image from "next/image";
import Articles from "../../../components/Articles/Articles";
console.log('ad', campingArticles );
const Camping = () => {

  return (
    <section id="camping" className={`${"container"} ${styles.blogSection}`}>
    {/* <Articles data={campingArticles }/> */}
 
      <ul className={styles.article_list}>
        {campingArticles?.map((article, id) => {
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
