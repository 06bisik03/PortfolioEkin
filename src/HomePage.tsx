import { useEffect } from "react";
import ProjectCard, { type ProjectCardProps } from "./Components/ProjectCard";
import SiteFooter from "./Components/SiteFooter";
import SiteHeader from "./Components/SiteHeader";
import { localizedPath, type ProjectKey, useLanguage } from "./i18n";
import codeCoachPoster from "./assets/optimized/codecoach.webp";
import cryptPulsePoster from "./assets/optimized/cryptpulse.webp";
import cryptPulseVideo from "./assets/optimized/cryptpulse-showcase.mp4";
import portrait from "./assets/optimized/ekin-portrait.webp";
import flavorFusionPoster from "./assets/optimized/flavorfusion.webp";
import flavorFusionVideo from "./assets/optimized/flavorfusion-showcase.mp4";
import gothamBooksPoster from "./assets/optimized/gotham-books.webp";
import gothamBooksVideo from "./assets/optimized/gotham-books-showcase.mp4";
import hiPexPoster from "./assets/optimized/hipex.webp";
import hiPexVideo from "./assets/optimized/hipex-showcase.mp4";
import kinfusionPoster from "./assets/optimized/kinfusion.webp";
import kinfusionVideo from "./assets/optimized/kinfusion-showcase.mp4";
import kinosmeticsPoster from "./assets/optimized/kinosmetics.webp";
import kinosmeticsVideo from "./assets/optimized/kinosmetics-showcase.mp4";
import omegaServersPoster from "./assets/optimized/omegaservers.webp";
import omegaServersVideo from "./assets/optimized/omegaservers-showcase.mp4";
import opusElitePoster from "./assets/optimized/opuselite-showcase-poster.webp";
import opusEliteVideo from "./assets/optimized/opuselite-showcase.mp4";

const projects: Array<Omit<ProjectCardProps, "featured" | "number">> = [
  {
    title: "CryptPulse",
    category: "Crypto analytics · Product build",
    description:
      "A focused market intelligence experience that makes live crypto data feel clear and immediate.",
    image: cryptPulsePoster,
    video: cryptPulseVideo,
    href: "https://crypt-pulse.netlify.app/",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "redux", label: "Redux Toolkit" },
      { id: "chart", label: "Recharts" },
      { id: "firebase", label: "Firebase Realtime DB" },
      { id: "api", label: "CoinGecko API" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "CodeCoach",
    category: "Learning platform · Full stack",
    description:
      "A guided coding environment designed to turn practice into visible, motivating progress.",
    image: codeCoachPoster,
    href: "https://code-coach-beta.vercel.app/",
    technologies: [
      { id: "nextjs", label: "Next.js" },
      { id: "react", label: "React" },
      { id: "typescript", label: "TypeScript" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "prisma", label: "Prisma" },
      { id: "postgresql", label: "PostgreSQL" },
      { id: "openai", label: "OpenAI API" },
      { id: "vercel", label: "Vercel" },
    ],
  },
  {
    title: "Kinfusion",
    category: "Artisan coffee · Frontend",
    description:
      "A composed coffee-house experience built around ritual, provenance, and an editorial sense of calm.",
    image: kinfusionPoster,
    video: kinfusionVideo,
    href: "https://kinfusion.netlify.app",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "Kinosmetics",
    category: "Luxury beauty · Experience design",
    description:
      "A soft, immersive shopping concept built around confident art direction and frictionless browsing.",
    image: kinosmeticsPoster,
    video: kinosmeticsVideo,
    href: "https://kinosmetics.netlify.app",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "react-router", label: "React Router" },
      { id: "swiper", label: "Swiper" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "FlavorFusion",
    category: "Contemporary dining · Interface design",
    description:
      "A cinematic restaurant experience where restrained interaction lets the ingredients and atmosphere lead.",
    image: flavorFusionPoster,
    video: flavorFusionVideo,
    href: "https://flavorfusionn.netlify.app",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "react-router", label: "React Router" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "HiPex",
    category: "Digital concept · Frontend",
    description:
      "A private-estates concept shaped by cinematic imagery, restrained typography, and quietly confident interaction.",
    image: hiPexPoster,
    video: hiPexVideo,
    href: "https://hipexx.netlify.app",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "swiper", label: "Swiper" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "OmegaServers",
    category: "Cloud security · Frontend",
    description:
      "A high-trust infrastructure concept that turns complex cloud protection into a precise, confident product experience.",
    image: omegaServersPoster,
    video: omegaServersVideo,
    href: "https://omegaservers.netlify.app",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "css", label: "CSS Modules" },
      { id: "react-router", label: "React Router" },
      { id: "swiper", label: "Swiper" },
      { id: "netlify", label: "Netlify" },
    ],
  },
  {
    title: "Gotham Books",
    category: "Editorial commerce · Full stack",
    description:
      "A cinematic independent-bookshop experience that pairs atmospheric storytelling with a complete digital catalogue.",
    image: gothamBooksPoster,
    video: gothamBooksVideo,
    href: "https://github.com/06bisik03/GothamBooks",
    technologies: [
      { id: "react", label: "React" },
      { id: "javascript", label: "JavaScript" },
      { id: "sass", label: "Sass" },
      { id: "react-router", label: "React Router" },
      { id: "browser-storage", label: "Browser storage" },
      { id: "api", label: "Open Library API" },
      { id: "github", label: "GitHub" },
    ],
  },
];

const projectKeys: Array<Exclude<ProjectKey, "opusElite">> = [
  "cryptPulse",
  "codeCoach",
  "kinfusion",
  "kinosmetics",
  "flavorFusion",
  "hiPex",
  "omegaServers",
  "gothamBooks",
];

const HomePage = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    if (window.location.hash) {
      window.setTimeout(() => {
        document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <div className="site-shell">
      <div className="intro-curtain" aria-hidden="true">
        <span>BEI</span>
      </div>
      <SiteHeader />

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{t.home.hero.eyebrow}</p>
            <h1>
              <span>{t.home.hero.titleLead}</span>
              <span className="serif-italic">{t.home.hero.titleAccent}</span>
            </h1>
            <p className="hero-lede">{t.home.hero.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                {t.home.hero.workAction}
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href={localizedPath("/contact", language)}>
                {t.home.hero.contactAction} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label={t.home.hero.portraitLabel}>
            <div className="portrait-kinetic" aria-hidden="true">
              <span className="kinetic-track kinetic-track-outer"><i /></span>
              <span className="kinetic-track kinetic-track-middle"><i /></span>
              <span className="kinetic-track kinetic-track-inner"><i /></span>
              <span className="kinetic-axis kinetic-axis-horizontal" />
              <span className="kinetic-axis kinetic-axis-diagonal" />
            </div>
            <div className="portrait-frame">
              <div className="portrait-field" aria-hidden="true" />
              <div className="portrait-glow" aria-hidden="true" />
              <img
                src={portrait}
                width="883"
                height="1280"
                alt="Baris Ekin Isik"
              />
              <span className="portrait-index">01 / 04</span>
            </div>
            <p className="availability"><span /> {t.home.hero.availability}</p>
          </div>

          <a className="scroll-cue" href="#about" aria-label={t.home.hero.scrollLabel}>
            <span>{t.home.hero.scroll}</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="profile section" id="about">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.home.profile.label}</p>
            <p className="section-note">{t.home.profile.note}</p>
          </div>

          <div className="profile-statement" data-reveal>
            <h2>
              {t.home.profile.statementLead}<em>{t.home.profile.statementAccent}</em>
              {t.home.profile.statementTail}
            </h2>
          </div>

          <div className="profile-grid">
            <div className="profile-copy" data-reveal>
              {t.home.profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <a className="text-link" href="#story">{t.home.profile.more} <span>↓</span></a>
            </div>

            <div className="profile-metrics" data-reveal>
              {t.home.profile.metrics.map((metric) => (
                <div key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise section-dark" id="expertise">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.home.expertise.label}</p>
            <p className="section-note">{t.home.expertise.note}</p>
          </div>

          <div className="expertise-list">
            {t.home.expertise.items.map((item, index) => (
              <article data-reveal key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="tech-marquee" aria-label={t.home.expertise.stackLabel}>
            <div>
              <span>TypeScript</span><i>✦</i><span>React</span><i>✦</i><span>Next.js</span>
              <i>✦</i><span>Node.js</span><i>✦</i><span>Express</span><i>✦</i>
              <span>MongoDB</span><i>✦</i><span>SQL</span><i>✦</i><span>TypeScript</span>
              <i>✦</i><span>React</span><i>✦</i><span>Next.js</span><i>✦</i>
              <span>Node.js</span><i>✦</i><span>Express</span><i>✦</i><span>MongoDB</span>
              <i>✦</i><span>SQL</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.home.work.label}</p>
            <p className="section-note">{t.home.work.note}</p>
          </div>

          <div className="featured-project" data-reveal>
            <ProjectCard
              title="OpusElite"
              category={t.home.work.projects.opusElite.category}
              description={t.home.work.projects.opusElite.description}
              image={opusElitePoster}
              video={opusEliteVideo}
              href="https://opuselite.netlify.app/"
              technologies={[
                { id: "react", label: "React" },
                { id: "javascript", label: "JavaScript" },
                { id: "css", label: "CSS Modules" },
                { id: "nodejs", label: "Node.js" },
                { id: "express", label: "Express" },
                { id: "mongodb", label: "MongoDB" },
                { id: "netlify", label: "Netlify Functions" },
              ]}
              featured
              number="01"
            />
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div data-reveal key={project.title}>
                <ProjectCard
                  {...project}
                  category={t.home.work.projects[projectKeys[index]].category}
                  description={t.home.work.projects[projectKeys[index]].description}
                  number={String(index + 2).padStart(2, "0")}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.home.story.label}</p>
            <p className="section-note">{t.home.story.note}</p>
          </div>

          <div className="story-layout">
            <h2 data-reveal>{t.home.story.title}</h2>
            <div className="story-copy" data-reveal>
              {t.home.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="contact-band">
          <div className="contact-band-orbit" aria-hidden="true" />
          <p className="eyebrow" data-reveal>{t.home.contactBand.eyebrow}</p>
          <h2 data-reveal>{t.home.contactBand.titleLead}<br /><em>{t.home.contactBand.titleAccent}</em></h2>
          <a
            className="round-link"
            href={localizedPath("/contact", language)}
            aria-label={t.home.contactBand.linkLabel}
            data-reveal
          >
            <span>{t.home.contactBand.link}</span><i>↗</i>
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
