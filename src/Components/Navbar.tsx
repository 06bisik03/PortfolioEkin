import React from "react";

import styles from "../Styles/Navbar.module.css";

interface NavbarProps {
  scrollToRef: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  

  const handleNavClick = (section: string) => {
    scrollToRef(section);
  };
  
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>EKIN ISIK</div>
      <div className={styles.navbar_redirect}>
        <div onClick={() => handleNavClick("Home")}>Home</div>
        <div onClick={() => handleNavClick("Qualification")}>Qualifications</div>
        <div onClick={() => handleNavClick("Projects")}>Projects</div>
        <div onClick={() => handleNavClick("About")}>About Me</div>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
