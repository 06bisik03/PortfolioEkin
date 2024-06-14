import React from "react";
import styles from '../Styles/Projects.module.css';
import HoverVideoPlayer from "react-hover-video-player";
const VideoPlayer :React.FC<VideoPlayerProps>= ({vodLink, imgLink}) => {
    return (
        <a className={styles.project}>
            <HoverVideoPlayer
              videoSrc={vodLink}
              restartOnPaused
              pausedOverlay={
                <img
                  src={imgLink}
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
    )
}
export default VideoPlayer;