import type { Site, Metadata, Socials, NavLink } from "@types";

export const SITE: Site = {
  NAME: "Dastonbek",
  TITLE: "Dastonbek | Backend Engineering, ERP & AI Automation",
  DESCRIPTION: "Backend Software Engineer & AI Automation Specialist based in Tashkent, Uzbekistan. Core stack: Python, FastAPI, PostgreSQL. High-demand services in ERP maintenance, AI agents, Telegram ecosystems, and database optimization.",
  EMAIL: "yakubovdastonbek@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  ANALYTICS: {
    GOOGLE_ANALYTICS_ID: "", // Set your GA4 Measurement ID (e.g. G-XXXXXXXXXX) or via PUBLIC_GA_ID in .env
    YANDEX_METRIKA_ID: "",   // Optional: Set your Yandex Metrika ID or via PUBLIC_YM_ID in .env
  },
};

export const HOME: Metadata = {
  TITLE: "Dastonbek | Backend Engineering, ERP & AI Automation",
  DESCRIPTION: "Backend Software Engineer & AI Automation Specialist based in Tashkent, Uzbekistan. I make manufacturing and B2B systems run faster with Python, FastAPI, PostgreSQL, and AI.",
};

export const BLOG: Metadata = {
  TITLE: "Engineering Notes",
  DESCRIPTION: "Technical writings on ERP architecture, query optimization, and backend engineering.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "Track record in enterprise ERP maintenance, AI workflows, and backend engineering.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects & Case Studies",
  DESCRIPTION: "Selected client solutions, automated workflows, and backend systems.",
};

export const NAV_LINKS: NavLink[] = [
  { NAME: "Home", HREF: "/" },
  { NAME: "Services", HREF: "/#services" },
  { NAME: "Projects", HREF: "/projects" },
  { NAME: "Contact", HREF: "/#contact" },
];

export const SOCIALS: Socials = [
  { 
    NAME: "telegram",
    HREF: "https://t.me/dastonbekuz",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/D-Yakubov",
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/dyakubov/",
  },
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/dastonbekme",
  }
];
