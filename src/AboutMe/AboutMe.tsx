import { forwardRef,useState, useRef } from "react";
import styles from "../Styles/AboutMe.module.css";

import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const AboutMe = forwardRef<HTMLDivElement>((_,ref) => {
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
              I am a 21-year-old Turkish software developer. I first encountered
              programming thanks to my IT teacher in high school, who showed me
              how to create interactive websites using HTML and CSS. Since then,
              I have advanced on my own and learned JavaScript to build small
              applications, such as a calculator, which was my first-ever
              programming project and is also available on my GitHub account.
            </p>
            <p>
              After having worked for almost a year and a half I have been fortunate enough to learn a lot of things and elevate my programming skills to another dimension. Writing code that is more efficient and more readable is not as challenging as it used to be before. Combining the knowledge I had before working and experience I have gained while working, has enabled me to combine the two to make me a better programmer overall and always strive for better. Hence, I always refuse to settle for mediocre when I can always make something better.
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
