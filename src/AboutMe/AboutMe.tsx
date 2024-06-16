import React, { forwardRef,useState, useRef } from "react";
import styles from "../Styles/AboutMe.module.css";
import ekinImg from "../assets/ekin.png";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";
interface AboutProp {}
const AboutMe = forwardRef<HTMLDivElement, AboutProp>((prop, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver(projectsRef, setIsVisible);
  return (
    <div  className={`${styles.aboutMeContainer} ${
      isVisible ? styles.visible : ""
    }`}
    ref={projectsRef}>
      <div className={styles.aboutMeRef} ref={ref}>
        <div className={styles.aboutMeImg}></div>
        <div className={styles.aboutMeInfo}>
          <h2>
            About Me, <br />
            I'm Baris Ekin ISIK, <br />
          </h2>
          <h5>
            <p>
              {" "}
              I am a 20-year-old Turkish software developer. I first encountered
              programming thanks to my IT teacher in high school, who showed me
              how to create interactive websites using HTML and CSS. Since then,
              I have advanced on my own and learned JavaScript to build small
              applications, such as a calculator, which was my first-ever
              programming project and is also available on my GitHub account.
            </p>
            <p>
              Although I have no real-life industry experience, I have honed my
              skills over the last six years with self-made projects ranging
              from simple frontend templates to full-stack websites. I am also
              actively applying for new jobs and internships.
            </p>

            <p>
              {" "}
              When I am not coding, I am almost always playing the guitar,
              writing, and composing my own songs with the help of Cubase and FL
              Studio. I enjoy listening to new songs regardless of genre and
              jamming with others from my dorm almost every afternoon in our
              music room.
            </p>
          </h5>
        </div>
      </div>
    </div>
  );
});
export default AboutMe;
