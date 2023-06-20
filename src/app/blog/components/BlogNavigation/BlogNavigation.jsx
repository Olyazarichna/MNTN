// 'use client';
// import styles from './BlogNavigation.module.scss';
// import { useState, useEffect } from 'react';

// const BlogNavigation = ({ activeTab, handleTabClick }) => {
//     return (
//       <nav className={styles.navBar}>
//         <ul className={styles.navBar_list}>
//           <li className={styles.navBar_listItem}>
//             <button
//               className={`${styles.navBar_listItemBtn} ${
//                 activeTab === 'Camping' && styles.active
//               }`}
//               onClick={() => handleTabClick('Camping')}
//             >
//               Camping
//             </button>
//           </li>
//           <li className={styles.navBar_listItem}>
//             <button
//               className={`${styles.navBar_listItemBtn} ${
//                 activeTab === 'Hiking' && styles.active
//               }`}
//               onClick={() => handleTabClick('Hiking')}
//             >
//               Hiking
//             </button>
//           </li>
//         </ul>
//       </nav>
//     );
//   };


    // return(
    //     <ul className={styles.navBar_list}>
    //     <li className={styles.navBar_listItem}>
    //       <button
    //         className={`${styles.navBar_listItemBtn} ${
    //           activeBtn === 'Camping' && styles.active
    //         }`}
    //         onClick={() => handleTabClick('Camping')}
    //       >
    //         Camping
    //       </button>
    //     </li>
    //     <li className={styles.navBar_listItem}>
    //       <button
    //         className={`${styles.navBar_listItemBtn} ${
    //           activeBtn === 'Hiking' && styles.active
    //         }`}
    //         onClick={() => handleTabClick('Hiking')}
    //       >
    //         Hiking
    //       </button>
    //     </li>
    //   </ul>
        // <nav className={styles.navBar}>
        //     <ul className={styles.navBar_list}>
        //         <li className={styles.navBar_listItem}><button className={styles.navBar_listItemBtn}>Camping</button></li>
        //         <li className={styles.navBar_listItem}><button className={styles.navBar_listItemBtn}>Hiking</button></li>
        //         <li className={styles.navBar_listItem}><button className={styles.navBar_listItemBtn}>Cycling</button></li>
        //         <li className={styles.navBar_listItem}><button className={styles.navBar_listItemBtn}>Running</button></li>
        //         <li className={styles.navBar_listItem}><button className={styles.navBar_listItemBtn}>Climbing</button></li>
        //     </ul>
        // </nav>
//     )
// }

export default BlogNavigation;