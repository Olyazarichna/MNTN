import styles from './BlogNavigation.module.scss';
import Link from 'next/link';
const BlogNavigation=()=>{
    return(
        <nav className={styles.navBar}>
            <ul className={styles.navBar_list}>
                <li className={styles.navBar_listItem}><Link href="/#camping" legacyBehavior><a>Camping</a></Link></li>
                <li className={styles.navBar_listItem}><Link href="/">Hiking</Link></li>
                <li className={styles.navBar_listItem}><Link href="/">Cycling</Link></li>
                <li className={styles.navBar_listItem}><Link href="/">Running</Link></li>
                <li className={styles.navBar_listItem}><Link href="/">Climbing</Link></li>
            </ul>
        </nav>
    )
}

export default BlogNavigation;