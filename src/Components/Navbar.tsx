import React from "react";
import styles from '../Styles/Navbar.module.css';
const Navbar : React.FC = () => {
    return (
        <div className={styles.navbar_container} >
        <div className={styles.navbar_logo}>
            EKIN ISIK
        </div>
        <div className={styles.navbar_redirect}>
            <a>Home</a>
            <a>Qualifications</a>
            <a>Projects</a>
            <a>Contact</a>
        </div>
      </div>
    )
}
export default Navbar;