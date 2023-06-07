import Link from 'next/link';
import styles from './NavBar.module.scss';

const NavBar=()=>{
    return(
        <nav> 
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <Link
              href="/"
              className={styles.nav_link}
            >
              Equipment
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/"
              className={styles.nav_link}
            >
              About us
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              href="/blog"
              className={styles.nav_link}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    )
}

export default NavBar;