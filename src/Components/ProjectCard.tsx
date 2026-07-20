import { type CSSProperties, useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import TechnologyIcon, { type TechnologyId } from "./TechnologyIcon";

export interface ProjectTechnology {
  id: TechnologyId;
  label: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  number: string;
  video?: string;
  featured?: boolean;
  technologies: readonly ProjectTechnology[];
}

const technologyMotionStyle = (index: number) =>
  ({
    "--tech-reveal-delay": `${(0.18 + index * 0.075).toFixed(3)}s`,
    "--tech-drift-delay": `${(1.25 + index * 0.21).toFixed(2)}s`,
    "--tech-sheen-delay": `${(index * 0.42).toFixed(2)}s`,
    "--tech-icon-delay": `${(index * -0.55).toFixed(2)}s`,
  }) as CSSProperties;

const ProjectCard = ({
  title,
  category,
  description,
  image,
  href,
  number,
  video,
  featured = false,
  technologies,
}: ProjectCardProps) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !videoReady) return;

    if (isPlaying) {
      void videoRef.current.play().catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, videoReady]);

  const beginPreview = () => {
    if (!video) return;
    setVideoReady(true);
    setIsPlaying(true);
  };

  const endPreview = () => {
    if (!video) return;
    setIsPlaying(false);
  };

  const togglePreview = () => {
    if (!video) return;
    setVideoReady(true);
    setIsPlaying((playing) => !playing);
  };

  return (
    <article className={`project-card${featured ? " project-card-featured" : ""}`}>
      <div
        className={`project-media${isPlaying ? " is-playing" : ""}`}
        onMouseEnter={beginPreview}
        onMouseLeave={endPreview}
      >
        {video ? (
          <video
            ref={videoRef}
            src={videoReady ? video : undefined}
            poster={image}
            preload="none"
            muted
            loop
            playsInline
            aria-label={`${title} ${t.projectCard.websitePreview}`}
          />
        ) : (
          <img
            src={image}
            alt={`${title} ${t.projectCard.projectInterface}`}
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
          />
        )}

        <span className="project-number">{number}</span>

        {video && (
          <button
            className="preview-toggle"
            type="button"
            onClick={togglePreview}
            aria-label={`${isPlaying ? t.projectCard.pauseLabel : t.projectCard.playLabel}: ${title}`}
          >
            <span>{isPlaying ? t.projectCard.pause : t.projectCard.preview}</span>
            <i aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</i>
          </button>
        )}
      </div>

      <div className="project-info">
        <div>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <div className="project-stack" aria-label={`${title} ${t.projectCard.stack}`}>
          <div className="project-stack-heading" aria-hidden="true">
            <span>{t.projectCard.signature}</span>
            <span>{String(technologies.length).padStart(2, "0")}</span>
          </div>
          <ul>
            {technologies.map((technology, index) => (
              <li key={`${title}-${technology.id}`} style={technologyMotionStyle(index)}>
                <TechnologyIcon technology={technology.id} />
                <span>{technology.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <a href={href} target="_blank" rel="noreferrer" aria-label={`${t.projectCard.visitLabel} ${title}`}>
          {t.projectCard.visit} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
