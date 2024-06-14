import React from "react";
import styles from "../Styles/Home.module.css";
import HEADSHOT from '../assets/ekin.png';
const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeIntro}>
        <h3>Hello, I'm</h3>
        <h2>BARIS EKIN ISIK</h2>
        <h4>Frontend/Backend/Fullstack Developer. I create seamless web experiences for end-users.</h4>
        <div className={styles.buttonContainer}>
          <button>About Me</button>
          <button>Contact</button>
        </div>
      </div>
      <div className={styles.homeHeadshot}>
        <div className={styles.headshotContainer}>
            <img src={HEADSHOT}/>
        </div>
      </div>
    </div>
  );
};
export default Home;
