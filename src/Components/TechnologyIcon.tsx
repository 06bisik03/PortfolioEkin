import type { IconType } from "react-icons";
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  LuBrainCircuit,
  LuBraces,
  LuChartSpline,
  LuDatabase,
} from "react-icons/lu";

export type TechnologyId =
  | "api"
  | "browser-storage"
  | "chart"
  | "css"
  | "express"
  | "firebase"
  | "github"
  | "javascript"
  | "mongodb"
  | "netlify"
  | "nextjs"
  | "nodejs"
  | "openai"
  | "postgresql"
  | "prisma"
  | "react"
  | "react-router"
  | "redux"
  | "sass"
  | "swiper"
  | "tailwind"
  | "typescript"
  | "vercel";

const technologyIcons: Record<TechnologyId, IconType> = {
  api: LuBraces,
  "browser-storage": LuDatabase,
  chart: LuChartSpline,
  css: SiCss,
  express: SiExpress,
  firebase: SiFirebase,
  github: SiGithub,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  openai: LuBrainCircuit,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  react: SiReact,
  "react-router": SiReactrouter,
  redux: SiRedux,
  sass: SiSass,
  swiper: SiSwiper,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  vercel: SiVercel,
};

const TechnologyIcon = ({ technology }: { technology: TechnologyId }) => {
  const Icon = technologyIcons[technology];

  return <Icon aria-hidden="true" />;
};

export default TechnologyIcon;
