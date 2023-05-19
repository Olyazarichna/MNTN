import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import styles from './Wrapper.module.scss';
const Wrapper = () => {
  return (
    // <div className={styles.wrapper}>
   <div className={`${'container'} ${styles.wrapper}`}> 
      <Header />  
       <Hero /> 
    </div>
  );
};
export default Wrapper;
