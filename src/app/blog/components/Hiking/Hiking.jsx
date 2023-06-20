import styles from "./Hiking.module.scss";
import hikingData from "./articles";
import Articles from "../../../components/Articles/Articles";

const Hiking = () => {
  return (
    <section id="hiking" className={`container ${styles.blogSection}`}>
      {/* <Articles data={hikingData} /> */}
    </section>
  );

    // <ul>
    //   {data?.map((article, id) => {
    //     return (
    //       <li key={id}>
    //         <div className={styles.article_container}>
    //           <h3>{article.title}</h3>
    //           <p className={styles.article_listText}> {article.article}</p>
    //         </div>
    //         <Image
    //           src={article.image}
    //           width={500}
    //           height="auto"
    //           alt={article.title}
    //           loading="lazy"
    //         />
    //       </li>
    //     );
    //   })}
    // </ul>
//   );
};

export default Hiking;
