import React from "react";
import styles from "../Styles/Projects.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import KinfusionVod from "../assets/KinfusionVod.mp4";
import KinfusionImg from "../assets/Kinfusion.png";
const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.fullProjects}>
        <h2>Full-fledged Operational Projects</h2>
        <div className={styles.projects1}>
          <a className={styles.project}>
            <HoverVideoPlayer
              videoSrc={KinfusionVod}
              restartOnPaused
              pausedOverlay={
                <img
                  src={KinfusionImg}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                  }}
                />
              }
              style={{
                width: '100%',

                alignSelf: 'center'
              }}
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </a>
          <a className={styles.project}></a>
          <a className={styles.project}></a>
        </div>
      </div>
      <div className={styles.templates}></div>
    </div>
  );
};
export default Projects;
