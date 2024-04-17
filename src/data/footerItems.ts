interface FooterItem {
  name: string;
  link: string;
}

interface SocialIcon {
  name: string;
  src: string;
  link: string;
}

export interface FooterData {
  products: FooterItem[];
  company: FooterItem[];
  policy: FooterItem[];
  socialIcons: SocialIcon[];
}

export const footerData: FooterData = {
  products: [{ name: "Research", link: "/research" }],
  company: [
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Careers", link: "/careers" },
  ],
  policy: [
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Cookies Policy", link: "/cookies-policy" },
  ],
  socialIcons: [
    {
      name: "Twitter",
      src: "../../images/twitterLogo.png",
      link: "https://twitter.com/",
    },
    {
      name: "LinkedIn",
      src: "../../images/linkedinLogo.png",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      src: "../../images/instagramLogo.png",
      link: "https://www.instagram.com/",
    },
    {
      name: "YouTube",
      src: "../../images/youtubeLogo.png",
      link: "https://www.youtube.com/",
    },
    {
      name: "Facebook",
      src: "../../images/facebookLogo.png",
      link: "https://www.facebook.com/",
    },
  ],
};
