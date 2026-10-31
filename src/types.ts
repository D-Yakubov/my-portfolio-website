export type SupportedLang = "en" | "uz" | "ru";

export type Site = {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  ANALYTICS?: {
    GOOGLE_ANALYTICS_ID?: string;
    YANDEX_METRIKA_ID?: string;
  };
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type NavLink = {
  NAME: string;
  HREF: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
