import React, { useState } from "react";
import styles from '../Styles/Projects.module.css';
import HoverVideoPlayer from "react-hover-video-player";
const VideoPlayer :React.FC<VideoPlayerProps>= ({vodLink, imgLink}) => {
  const [hovered,setHovered] = useState<boolean>(false);
  const handleHoverEvent = (type: 'enter' | 'leave') => {
    if (type === 'enter') {
      vodLink !== 'null' ? setHovered(true) : setHovered(false);
    } else if (type === 'leave') {
      setHovered(false);
    }
  }

    return (
        <a className={styles.project}>
            <HoverVideoPlayer
              videoSrc={vodLink}
              restartOnPaused
              onMouseEnter ={() => handleHoverEvent('enter')}
              onMouseLeave = {() => handleHoverEvent('leave')}
              pausedOverlay={
                <img
                  src={imgLink}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              }
              style={{
                width: '100%',
                height: '70%',
                alignSelf: 'center',
                transform: hovered ? 'scale(1.075)' :'none',
                transition: 'transform 0.3s ease',
                
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