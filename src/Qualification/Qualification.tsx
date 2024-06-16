import { useState, useRef } from "react";
import styles from "../Styles/Qualification.module.css";
import { forwardRef } from "react";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

import LazyLoad from "react-lazy-load";

export const Qualification = forwardRef<HTMLDivElement>((_, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const qualificationRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(qualificationRef, setIsVisible);

  return (
    <div
      ref={ref}
      className={`${styles.qualificationContainer} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.qualificationIntroduction} ref={qualificationRef}>
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
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/452228/html-5.svg" />
              </LazyLoad>

              <h4>HTML</h4>
            </div>{" "}
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/452185/css-3.svg" />
              </LazyLoad>
              <h4>CSS/SCSS</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/452045/js.svg" />
              </LazyLoad>
              <h4>JavaScript</h4>{" "}
            </div>{" "}
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/354478/typescript-icon.svg" />
              </LazyLoad>
              <h4>TypeScript</h4>
            </div>
            <div />{" "}
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" />
              </LazyLoad>
              <h4>React JS</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/452210/git.svg" />
              </LazyLoad>
              <h4>Git</h4>
            </div>
            <div />
          </div>
        </div>
        <div className={styles.techStackLogosBackend}>
          <h2>Backend Technologies I prefer using</h2>
          <div className={styles.languagesBackend}>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/303658/nodejs-1-logo.svg" />
              </LazyLoad>
              <h4>Node JS</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://imgs.search.brave.com/dYOC8zWGw9HfWegfPLqE6kjIzG2RgPSySVu8jae78Ss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn.svg" />
              </LazyLoad>
              <h4>Express</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://pluspng.com/img-png/logo-mongodb-png--1756.png" />
              </LazyLoad>
              <h4>MongoDB</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://www.svgrepo.com/show/353735/firebase.svg" />
              </LazyLoad>
              <h4>Firebase</h4>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Qualification;
