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
            About Me <br />
             
          </h2>
          <h5>
  <p>
    I'm a 21-year-old Turkish software developer and 3rd-semester Computer
    Science student with over a year and a half of professional experience.
    I build with TypeScript, React, Next.js, Node.js, Express, and SQL —
    and I care as much about the product as I do about the code behind it.
  </p>

  <p>
    My path into programming started with a single moment: my high school
    IT teacher wrote a piece of Java code (Dijkstra's Algorithm) on the smartboard that found the
    shortest path between two points — and it traced the exact route I
    walked home every day. That was it for me. I had to understand how
    that was possible, and I never stopped.
  </p>

  <p>
    Since then, I've contributed to production at a professional level —
    including building the contact page for Cinemo's corporate website and many more.
  </p>

  <p>
    What drives me isn't just writing code that works — it's building
    things that feel inevitable. Clean, efficient, and thought through
    to the last detail.
  </p>

  <p>
    I'm currently open to junior developer (Working Student) positions where I can bring
    both technical depth and product instinct to a team that builds
    things that matter.
  </p>

  <p>
    Outside of code, I'm a guitarist and music producer — I write and
    compose my own songs using Cubase and FL Studio, and spend most
    evenings jamming with friends. It's how I stay creative, and
    creativity is something I bring into everything I build.
  </p>
</h5>
        </div>
      </div>
    </div>
  );
});
export default AboutMe;
