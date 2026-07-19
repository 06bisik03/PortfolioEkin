import { useEffect } from "react";
import ProjectCard from "./Components/ProjectCard";
import SiteFooter from "./Components/SiteFooter";
import SiteHeader from "./Components/SiteHeader";
import codeCoachPoster from "./assets/optimized/codecoach.webp";
import cryptPulsePoster from "./assets/optimized/cryptpulse.webp";
import portrait from "./assets/optimized/ekin-portrait.webp";
import flavorFusionPoster from "./assets/optimized/flavorfusion.webp";
import hiPexPoster from "./assets/optimized/hipex.webp";
import hiPexVideo from "./assets/optimized/hipex-showcase.mp4";
import kinfusionPoster from "./assets/optimized/kinfusion.webp";
import kinosmeticsPoster from "./assets/optimized/kinosmetics.webp";
import opusElitePoster from "./assets/optimized/opuselite-showcase-poster.webp";
import opusEliteVideo from "./assets/optimized/opuselite-showcase.mp4";

const projects = [
  {
    title: "CryptPulse",
    category: "Crypto analytics · Product build",
    description:
      "A focused market intelligence experience that makes live crypto data feel clear and immediate.",
    image: cryptPulsePoster,
    href: "https://crypt-pulse.netlify.app/",
  },
  {
    title: "CodeCoach",
    category: "Learning platform · Full stack",
    description:
      "A guided coding environment designed to turn practice into visible, motivating progress.",
    image: codeCoachPoster,
    href: "https://code-coach-beta.vercel.app/",
  },
  {
    title: "Kinfusion",
    category: "Editorial commerce · Frontend",
    description:
      "A modern storefront concept pairing strong product hierarchy with an editorial rhythm.",
    image: kinfusionPoster,
    href: "https://kinfusion.netlify.app",
  },
  {
    title: "Kinosmetics",
    category: "Beauty commerce · Experience design",
    description:
      "A soft, immersive shopping concept built around confident art direction and frictionless browsing.",
    image: kinosmeticsPoster,
    href: "https://kinosmetics.netlify.app",
  },
  {
    title: "FlavorFusion",
    category: "Food discovery · Interface design",
    description:
      "A lively recipe experience that balances rich imagery with calm, practical navigation.",
    image: flavorFusionPoster,
    href: "https://flavorfusionn.netlify.app",
  },
  {
    title: "HiPex",
    category: "Digital concept · Frontend",
    description:
      "A private-estates concept shaped by cinematic imagery, restrained typography, and quietly confident interaction.",
    image: hiPexPoster,
    video: hiPexVideo,
    href: "https://hipexx.netlify.app",
  },
];

const HomePage = () => {
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
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Software engineer · Aachen, Germany</p>
            <h1>
              <span>Digital products,</span>
              <span className="serif-italic">composed with intent.</span>
            </h1>
            <p className="hero-lede">
              I design and engineer polished web experiences where precise systems meet
              tactile interaction.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work
                <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link" href="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-portrait" aria-label="Portrait of Baris Ekin Isik">
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <img
                src={portrait}
                width="883"
                height="1280"
                alt="Baris Ekin Isik"
              />
              <span className="portrait-index">01 / 04</span>
            </div>
            <p className="availability"><span /> Available for working-student roles</p>
          </div>

          <a className="scroll-cue" href="#about" aria-label="Scroll to profile">
            <span>Scroll</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="profile section" id="about">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">01 · Profile</p>
            <p className="section-note">Engineering with a product instinct.</p>
          </div>

          <div className="profile-statement" data-reveal>
            <h2>
              The best digital work feels <em>inevitable</em> — clear in purpose, exact in
              execution, and effortless to use.
            </h2>
          </div>

          <div className="profile-grid">
            <div className="profile-copy" data-reveal>
              <p>
                I’m a computer science student and full-stack developer building thoughtful
                products with TypeScript, React, Next.js, Node.js, and modern data systems.
              </p>
              <p>
                My work moves comfortably from interface detail to application architecture.
                I care about the invisible parts too: performance, accessibility, maintainable
                systems, and the small decisions that make a product feel considered.
              </p>
              <a className="text-link" href="#story">More about my path <span>↓</span></a>
            </div>

            <div className="profile-metrics" data-reveal>
              <div>
                <strong>5+</strong>
                <span>Years building independently</span>
              </div>
              <div>
                <strong>1.5+</strong>
                <span>Years professional experience</span>
              </div>
              <div>
                <strong>360°</strong>
                <span>Product thinking, frontend to backend</span>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise section-dark" id="expertise">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">02 · Expertise</p>
            <p className="section-note">A small, sharp toolkit — used deeply.</p>
          </div>

          <div className="expertise-list">
            <article data-reveal>
              <span>01</span>
              <h3>Product-minded engineering</h3>
              <p>From early product logic to production-ready React and Next.js systems.</p>
            </article>
            <article data-reveal>
              <span>02</span>
              <h3>Interface & interaction</h3>
              <p>Responsive, accessible interfaces with motion that supports the experience.</p>
            </article>
            <article data-reveal>
              <span>03</span>
              <h3>Backend & data</h3>
              <p>Node.js APIs, authentication, SQL and NoSQL data built for clarity and scale.</p>
            </article>
          </div>

          <div className="tech-marquee" aria-label="Technology stack">
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
            <p className="eyebrow">03 · Selected work</p>
            <p className="section-note">Interfaces with atmosphere and purpose.</p>
          </div>

          <div className="featured-project" data-reveal>
            <ProjectCard
              title="OpusElite"
              category="Luxury tailoring · Full-stack commerce"
              description="A cinematic tailoring experience built around craft, restraint, and the ritual of choosing something made to last."
              image={opusElitePoster}
              video={opusEliteVideo}
              href="https://opuselite.netlify.app/"
              featured
              number="01"
            />
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <div data-reveal key={project.title}>
                <ProjectCard {...project} number={String(index + 2).padStart(2, "0")} />
              </div>
            ))}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">04 · Story</p>
            <p className="section-note">Curiosity became a craft.</p>
          </div>

          <div className="story-layout">
            <h2 data-reveal>It started with the shortest path home.</h2>
            <div className="story-copy" data-reveal>
              <p>
                In high school, an IT teacher drew Dijkstra’s algorithm on a smartboard. The
                route it found between two points was the exact route I walked home every day.
                I needed to understand how that was possible — and I never really stopped.
              </p>
              <p>
                Since then, I’ve contributed to production work including Cinemo’s corporate
                contact experience, built complete products of my own, and learned to treat
                technology as both an engineering discipline and a creative medium.
              </p>
              <p>
                Away from the screen, I write and produce music in Cubase and FL Studio. The
                same instinct carries across both practices: listen closely, remove what is
                unnecessary, and make every layer earn its place.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-band">
          <div className="contact-band-orbit" aria-hidden="true" />
          <p className="eyebrow" data-reveal>Have a role, project, or idea?</p>
          <h2 data-reveal>Let’s make something<br /><em>remarkable.</em></h2>
          <a className="round-link" href="/contact" aria-label="Open contact page" data-reveal>
            <span>Start a<br />conversation</span><i>↗</i>
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
