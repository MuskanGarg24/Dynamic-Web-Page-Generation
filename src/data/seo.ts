interface SiteMeta {
  siteMetadata: {
    title: string;
    siteUrl: string;
  };
}

export const siteMeta: SiteMeta = {
  siteMetadata: {
    title: "reunion-site",
    siteUrl: "https://www.yourdomain.tld",
  },
};

export interface SEO {
  title: string;
  description: string;
}

export const homePageSEO: SEO = {
  title: "Home",
  description: "Home page.",
};

export const aboutPageSEO: SEO = {
  title: "About",
  description: "About page.",
};
