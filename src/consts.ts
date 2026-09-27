import type { Site, Metadata, Socials, NavLink } from "@types";

export const SITE: Site = {
  NAME: "Dastonbek",
  TITLE: "Dastonbek | Business Automation & ERP Specialist",
  DESCRIPTION: "Freelance ERP maintainer and backend specialist (Python, FastAPI, PostgreSQL). I help manufacturing and B2B companies automate reporting, optimize databases, and build robust APIs.",
  EMAIL: "yakubovdastonbek@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Dastonbek | Business Automation & ERP Specialist",
  DESCRIPTION: "Freelance ERP maintainer and backend specialist (Python, FastAPI, PostgreSQL). I make manufacturing and B2B systems run faster.",
};

export const BLOG: Metadata = {
  TITLE: "Engineering Notes",
  DESCRIPTION: "Technical writings on ERP architecture, query optimization, and backend engineering.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "Track record in enterprise ERP maintenance and backend engineering.",
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
