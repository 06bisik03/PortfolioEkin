import React from "react";

import styles from "../Styles/Navbar.module.css";
import Logo from '../assets/Logo.png';
interface NavbarProps {
  scrollToRef: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToRef }) => {
  

  const handleNavClick = (section: string) => {
    scrollToRef(section);
  };
  
  return (
    <div className={styles.navbar_container}>
      <a className={styles.navbar_logo} href="/">
        <img src={Logo} />
      </a>
      <div className={styles.navbar_redirect}>
        <div onClick={() => handleNavClick("Home")}>Home</div>
        <div onClick={() => handleNavClick("Qualification")}>Skills</div>
        <div onClick={() => handleNavClick("Projects")}>Projects</div>
        <div onClick={() => handleNavClick("About")}>About</div>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
