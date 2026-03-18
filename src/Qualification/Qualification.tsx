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
       <div className={styles.techStack}>
        <h1>1.5+</h1>
        <div className={styles.techStackInfo}>
          Years of work-experience. I helped with building partner portals from scratch 
        </div>
      </div>
      <div className={styles.techStackLanguages}>
        <div className={styles.techStackLogos}>
          <h2>Frontend Technologies I prefer using</h2>
          <div className={styles.languages}>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://cdn.simpleicons.org/nextdotjs/white"
                  alt="Next.js"
                />
              </LazyLoad>
              <h4>Next</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                  alt="React"
                />
              </LazyLoad>
              <h4>React</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
                  alt="TypeScript"
                />
              </LazyLoad>
              <h4>TypeScript</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://www.svgrepo.com/show/452045/js.svg"
                  alt="JavaScript"
                />
              </LazyLoad>
              <h4>JavaScript</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt="CSS and SCSS"
                />
              </LazyLoad>
              <h4>CSS/SCSS</h4>
            </div>
          </div>
        </div>
        <div className={styles.techStackLogosBackend}>
          <h2>Backend Technologies I prefer using</h2>
          <div className={styles.languagesBackend}>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-1-226034.png?f=webp&w=256"
                  alt="Node.js"
                />
              </LazyLoad>
              <h4>Node JS</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img src="https://cdn.simpleicons.org/express/white" alt="Express" />
              </LazyLoad>
              <h4>Express</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
               <img src="https://cdn.simpleicons.org/mongodb/white" alt="MongoDB" />
              </LazyLoad>
              <h4>MongoDB</h4>
            </div>
            <div className={styles.lang}>
              <LazyLoad offset={400}>
                <img
                  src="https://www.svgrepo.com/show/353735/firebase.svg"
                  alt="Firebase"
                />
              </LazyLoad>
              <h4>Firebase</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Qualification;
