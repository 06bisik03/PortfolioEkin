import React from "react";
import styles from "../Styles/Qualification.module.css";

import UILogo from '../assets/design.svg'
import DataLogo from '../assets/database.svg'
import microsoftLogo from '../assets/microsoft.svg'
import program from '../assets/program.svg'
import algo from '../assets/algo.svg'
import clean from '../assets/clean.svg'

const Qualification: React.FC = () => {
  return (
    <div className={styles.qualificationContainer}>
      <div className={styles.qualificationIntroduction}>
        <h2>About me:</h2>
        <h3>
          Hi, my name is Ekin and I am a Frontend/Backend/Fullstack developer. I
          am a self-taught programmer who enjoys building innovative and
          efficient websites that users would have fun scrolling through. Here
          is my current experience and Tech stack:
        </h3>
      </div>
      <div className={styles.techStack}>
        <h1>5+</h1>
        <div className={styles.techStackInfo}>
          Years of self-experience. Specialised in building interactive
          websites, while ensuring a smooth user experience for end users
        </div>
      </div>
      <div className={styles.techStackLanguages}>
        <div className={styles.techStackLogos}>
          <h2>Frontend Technologies I prefer using</h2>
          <div className={styles.languages}>
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/452228/html-5.svg" />
              <h4>HTML</h4>
            </div>{" "}
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/452185/css-3.svg" />
              <h4>CSS/SCSS</h4>
            </div>
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/452045/js.svg" />
              <h4>JavaScript</h4>{" "}
            </div>{" "}
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/354478/typescript-icon.svg" />
              <h4>TypeScript</h4>
            </div>
            <div />{" "}
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" />
              <h4>React JS</h4>
            </div>
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/452210/git.svg" />
              <h4>Git</h4>
            </div>
            <div />
          </div>
        </div>
        <div className={styles.techStackLogosBackend}>
          <h2>Backend Technologies I prefer using</h2>
          <div className={styles.languagesBackend}>
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg" />
              <h4>Node JS</h4>
            </div>
            <div className={styles.lang}>
              <img src="https://imgs.search.brave.com/dYOC8zWGw9HfWegfPLqE6kjIzG2RgPSySVu8jae78Ss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn.svg" />
              <h4>Express</h4>
            </div>
            <div className={styles.lang}>
              <img src="https://pluspng.com/img-png/logo-mongodb-png--1756.png" />
              <h4>MongoDB</h4>
            </div>
            <div className={styles.lang}>
              <img src="https://www.svgrepo.com/show/353735/firebase.svg" />
              <h4>Firebase</h4>
            </div>
            <div />
          </div>
        </div>
        <div className={styles.skills}>
          <h2>My Skills</h2>
          <div className={styles.carousel}>
            <div className={styles.skillItem}>
              <div className={styles.imageSkill}>
                <img src={UILogo} />
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
                <img src={clean} />
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
                <img src={algo} />
              </div>
              <div className={styles.imageSkillInfo}>
                <h4>Deep Algorithm Understanding</h4>
                <h5>
                  I have a deep understanding of algorithms and data structures
                  that are used widely in real life
                </h5>
              </div>
            </div>{" "}
            <div className={styles.skillItem}>
              <div className={styles.imageSkill}>
                <img src={microsoftLogo} />
              </div>
              <div className={styles.imageSkillInfo}>
                <h4>Microsoft Office 365 Knowledge</h4>
                <h5>
                  I have deep knowledge of Microsoft Office 365.
                </h5>
              </div>
            </div>{" "}
            <div className={styles.skillItem}>
              <div className={styles.imageSkill}>
                <img src={DataLogo} />
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
                <img src={program}/>
              </div>
              <div className={styles.imageSkillInfo}>
                <h4>Multiple Programming Languages</h4>
                <h5>
                  My arsenal consists of multiple programming languages such as
                  C++, C and Java.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
