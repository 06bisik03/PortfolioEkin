import { forwardRef, useState } from "react";
import styles from "../Styles/Projects.module.css";

import KinfusionVod from "../assets/KinfusionVod.mp4";
import KinfusionImg from "../assets/Kinfusion.png";
import KinosmeticsVod from "../assets/KinosmeticsVod.mp4";
import KinosmeticsImg from "../assets/KinosmeticsImg.png";
import OmegaVod from "../assets/OmegaVod.mp4";
import OmegaImg from "../assets/OmegaImg.png";
import OpusEliteVod from "../assets/OpusEliteVod.mp4";
import OpusEliteImg from "../assets/OpusEliteImg.png";
import FlavorFusionVod from "../assets/FlavorFus.mp4";
import FlavorFusionImg from "../assets/FlavorFusionImg.png";
import CryptPulseVod from "../assets/CryptPulseVod.mp4";
import CryptPulseImg from "../assets/CryptpulseImg.png";
import ComingSoon from "../assets/ComingSoon.webp";
import HipexImg from "../assets/Hipex.png";
import HipexVod from "../assets/HiPexVod.mp4";
import VideoPlayer from "./VideoPlayer";
import { useRef } from "react";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

export const Projects = forwardRef<HTMLDivElement>(
  (_, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const projectsRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver(projectsRef, setIsVisible);

    return (
      <div
        className={`${styles.projectsContainer} ${
          isVisible ? styles.visible : ""
        }`}
        ref={projectsRef}
      >
        <div className={styles.fullProjects}
        ref={ref}>
          <h2>Full-fledged Operational Projects</h2>
          <div className={styles.projects1}>
            <VideoPlayer imgLink={CryptPulseImg} vodLink={CryptPulseVod} />
            <VideoPlayer imgLink={OpusEliteImg} vodLink={OpusEliteVod} />
            <VideoPlayer imgLink={ComingSoon} vodLink={"null"} />
          </div>
        </div>
        <div className={styles.templates}>
          <h2>Preview Templates</h2>
          <div className={styles.projects2}>
            <div className={styles.projects1}>
              <VideoPlayer
                imgLink={FlavorFusionImg}
                vodLink={FlavorFusionVod}
              />
              <VideoPlayer imgLink={KinfusionImg} vodLink={KinfusionVod} />
              <VideoPlayer imgLink={KinosmeticsImg} vodLink={KinosmeticsVod} />
            </div>
            <div className={styles.projects1}>
              <VideoPlayer imgLink={OmegaImg} vodLink={OmegaVod} />
              <VideoPlayer imgLink={HipexImg} vodLink={HipexVod} />
              <VideoPlayer imgLink={ComingSoon} vodLink={"null"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
