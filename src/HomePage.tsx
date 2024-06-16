import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useRef } from "react";
import Navbar from "./Components/Navbar";
import { Home } from "./Home/Home";
import Qualification from "./Qualification/Qualification";
import FormLink from "./Contact/FormLink";
import MySkills from "./Qualification/MySkills";
import { Projects } from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Contact/Footer";
import { useSearchParams } from "react-router-dom";
const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const qualiRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = searchParams.get("scrollTo");
    if (section) {
      scrollToQualification(section);
    }
  }, [searchParams]);
  useEffect(() => {
    
  },[window.innerWidth])
  const scrollToQualification = (section: string) => {
    let targetElement: HTMLElement | null = null;
    switch (section) {
      case "Home":
        targetElement = homeRef.current;
        break;
      case "Projects":
        targetElement = projectRef.current;
        break;
      case "Qualification":
        targetElement = qualiRef.current;
        break;
      case "About":
        targetElement = aboutRef.current;
        break;
      default:
        return;
    }
    if (targetElement) {
      const navbarHeight = window.innerHeight * 0.1; // 9vh
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      // Check if the section is already in view
      const currentScrollPosition = window.scrollY;
      if (Math.abs(currentScrollPosition - offsetPosition) < 1) {
        return;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className={styles.appContainer}>
        <Navbar scrollToRef={scrollToQualification} />
        <div className={styles.contentContainer}>
          <Home ref={homeRef} />
          <Qualification ref={qualiRef} />
          <MySkills />
          <Projects ref={projectRef} />
          <AboutMe ref={aboutRef} />
        </div>
      </div>
      <FormLink />
      <Footer />
    </>
  );
};
export default HomePage;
