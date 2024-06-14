import React from "react";
import styles from "../Styles/Projects.module.css";

import KinfusionVod from "../assets/KinfusionVod.mp4";
import KinfusionImg from "../assets/Kinfusion.png";
import VideoPlayer from "./VideoPlayer";
const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.fullProjects}>
        <h2>Full-fledged Operational Projects</h2>
        <div className={styles.projects1}>
          <VideoPlayer imgLink={KinfusionImg} vodLink={KinfusionVod}/>
        </div>
      </div>
      <div className={styles.templates}></div>
    </div>
  );
};
export default Projects;
