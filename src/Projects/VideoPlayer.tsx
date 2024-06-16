import React, { useEffect, useState } from "react";
import styles from "../Styles/Projects.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import LazyLoad from "react-lazy-load";
const VideoPlayer: React.FC<VideoPlayerProps> = ({ vodLink, imgLink }) => {
  const [heightVideoDiv, setHeightVideoDiv] = useState<string>("100%");
  useEffect(() => {
    if(window.innerWidth < 1020) {
      setHeightVideoDiv('70%')
    } 
  },[window.innerWidth])
  const [hovered, setHovered] = useState<boolean>(false);
  const handleHoverEvent = (type: "enter" | "leave") => {
    if (type === "enter") {
      vodLink !== "null" ? setHovered(true) : setHovered(false);
    } else if (type === "leave") {
      setHovered(false);
    }
  };

  return (
    <LazyLoad offset={400} height="35vh" width="25vw" >
    <a className={styles.project}>
      <HoverVideoPlayer
        videoSrc={vodLink}
        restartOnPaused
        onMouseEnter={() => handleHoverEvent("enter")}
        onMouseLeave={() => handleHoverEvent("leave")}
        pausedOverlay={
          <img
            src={imgLink}
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: "100%",
              height: heightVideoDiv,
              objectFit: "cover",
            }}
          />
        }
        style={{
          width: "100%",
          height: "70%",
          alignSelf: "center",
          transform: hovered ? "scale(1.1)" : "none",
          transformOrigin: "top center",
          transition: "transform 0.3s ease",
        }}
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    </a>
    </LazyLoad>
  );
};
export default VideoPlayer;
