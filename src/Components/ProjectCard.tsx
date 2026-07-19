import { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  number: string;
  video?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  category,
  description,
  image,
  href,
  number,
  video,
  featured = false,
}: ProjectCardProps) => {
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
            aria-label={`${title} website preview`}
          />
        ) : (
          <img
            src={image}
            alt={`${title} project interface`}
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
            aria-label={isPlaying ? `Pause ${title} preview` : `Play ${title} preview`}
          >
            <span>{isPlaying ? "Pause" : "Preview"}</span>
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
        <a href={href} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}>
          Visit project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
