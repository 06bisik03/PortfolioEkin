import React, { useState, useRef } from "react";
import styles from "../Styles/ContactMe.module.css";
import  useIntersectionObserver  from "../Hooks/useIntersectionObserver";

const FormLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const formLinkRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(formLinkRef, setIsVisible);

  return (
    <div
      ref={formLinkRef}
      className={`${styles.formLink} ${isVisible ? styles.visible : ""}`}
    >
      <h1>Delighted by what you see? Contact me!</h1>
      <a href="/contact">CONTACT</a>
    </div>
  );
};

export default FormLink;
