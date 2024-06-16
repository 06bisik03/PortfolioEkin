import styles from "../Styles/Qualification.module.css";
import React, { useState, useRef } from "react";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";
import UILogo from "../assets/design.svg";
import DataLogo from "../assets/database.svg";
import microsoftLogo from "../assets/microsoft.svg";
import program from "../assets/program.svg";
import algo from "../assets/algo.svg";
import clean from "../assets/clean.svg";
import LazyLoad from "react-lazy-load";
const MySkills: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(skillsRef, setIsVisible);

  return (
    <div
      ref={skillsRef}
      className={`${styles.skills} ${isVisible ? styles.visibleSkills : ""}`}
    >
      <h2>My Skills</h2>
      <div className={styles.carousel}>
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={UILogo} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>UI/UX Design</h4>
            <h5>
              I design beautiful web interfaces with pure CSS/SCSS and other
              frontend web technologies
            </h5>
          </div>
        </div>
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={clean} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>Clean Coding</h4>
            <h5>
              I write impeccable code with utmost readability that other
              developers can read with ease
            </h5>
          </div>
        </div>{" "}
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={algo} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>Deep Algorithm Understanding</h4>
            <h5>
              I have a deep understanding of algorithms and data structures that
              are used widely in real life
            </h5>
          </div>
        </div>{" "}
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={microsoftLogo} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>Microsoft Office 365 Knowledge</h4>
            <h5>I have deep knowledge of Microsoft Office 365.</h5>
          </div>
        </div>{" "}
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={DataLogo} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>NoSQL Databases</h4>
            <h5>
              I can write efficient and clean NoSQL code, ensuring optimal
              performance and scalability
            </h5>
          </div>
        </div>{" "}
        <div className={styles.skillItem}>
          <div className={styles.imageSkill}>
            <LazyLoad offset={400}>
              <img src={program} />
            </LazyLoad>
          </div>
          <div className={styles.imageSkillInfo}>
            <h4>Multiple Programming Languages</h4>
            <h5>
              My arsenal consists of multiple programming languages such as C++,
              C and Java.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
