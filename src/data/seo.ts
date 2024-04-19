interface SiteMeta {
  siteMetadata: {
    title: string;
    siteUrl: string;
  };
}

interface SEO {
  title: string;
  description: string;
}

export const siteMeta: SiteMeta = {
  siteMetadata: {
    title: "reunion-site",
    siteUrl: "https://www.yourdomain.tld",
  },
};

export const homePageSEO: SEO = {
  title: "Home",
  description: "Home page.",
};
