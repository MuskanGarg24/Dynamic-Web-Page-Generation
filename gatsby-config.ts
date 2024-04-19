import { GatsbyConfig } from "gatsby";
import { siteMeta } from "./src/data/seo";

const siteTitle = siteMeta.siteMetadata.title;
const siteUrl = siteMeta.siteMetadata.siteUrl;

const config: GatsbyConfig = {
  siteMetadata: {
    title: siteTitle,
    siteUrl: siteUrl,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-next-seo",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-layout",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              buildTime
            }
            allSitePage {
              nodes{ 
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          site: { buildTime },
        }: {
          allSitePage: { nodes: { path: string }[] };
          site: { buildTime: string };
        }) => {
          return allPages.map((page: { path: string }) => {
            return {
              ...page,
              modifiedTime: buildTime,
            };
          });
        },
        serialize: ({
          path,
          modifiedTime,
        }: {
          path: string;
          modifiedTime: string;
        }) => {
          return {
            url: path,
            lastmod: modifiedTime,
          };
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.png",
      },
    },
  ],
};

export default config;
