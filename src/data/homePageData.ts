interface ApiEndpoint {
  GET_URL: string;
}

interface HeroData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: string[];
  apiEndPoints?: ApiEndpoint;
}

interface InsightsData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; name: string; value: string }[];
  apiEndPoints?: ApiEndpoint;
}

interface ResearchData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { name: string; value: string }[];
  apiEndPoints?: ApiEndpoint;
}

interface InfoCardData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: string[];
  apiEndPoints?: ApiEndpoint;
}

interface FAQData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; name: string; value: string }[];
  apiEndPoints?: ApiEndpoint;
}

interface BlogsData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; name: string; value: string }[];
  apiEndPoints: ApiEndpoint;
}

export interface HomePageData {
  hero1: HeroData;
  insights: InsightsData;
  hero2: HeroData;
  research: ResearchData;
  infoCard1: InfoCardData;
  faq: FAQData;
  blogs: BlogsData;
  infoCard2: InfoCardData;
}

export const homePageData: HomePageData = {
  hero1: {
    title: "Real Estate",
    highlightedTitle: "Risk Intelligence",
    description:
      "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",
    buttonLabel: "Learn More",
    data: [],
  },
  insights: {
    title: "Unlocking Insights",
    highlightedTitle: "",
    description: "2 Million+ Tracked Data Points",
    buttonLabel: "",
    data: [
      { id: 1, name: "Projects", value: "40,000+" },
      { id: 2, name: "Developers", value: "60,000+" },
      { id: 3, name: "Legal Cases", value: "20,000+" },
    ],
  },
  hero2: {
    title: "Power your research for Real Estate",
    highlightedTitle: "",
    description: "",
    buttonLabel: "Learn More",
    data: [
      "Conduct due diligence on RERA projects",
      "Keep track of your Real Estate portfolio",
      "Early identification of risk",
      "Property market intelligence",
    ],
  },
  research: {
    title: "Introducing “research”",
    highlightedTitle: "",
    description: "Unified Risk Intelligence Platform for Real Estate",
    buttonLabel: "",
    data: [
      {
        name: "Easy-to-use, powerful research engine",
        value: "70+ filter types to help you refine your results",
      },
      {
        name: "Project and Developer profiles",
        value:
          "Deep dive into comprehensive profiles covering construction, sales, approvals and litigation details",
      },
      {
        name: "Consumer complaints and legal cases",
        value: "Access case history and detailed judgements",
      },
      {
        name: "Analytics tools",
        value:
          "Leverage advanced options such as sorting, grouping for an in-depth analysis",
      },
    ],
  },
  infoCard1: {
    title: "research is in private preview",
    highlightedTitle: "",
    description: "You can request access to it with by filling up this form",
    buttonLabel: "Request Access",
    data: [],
  },
  faq: {
    title: "FAQs",
    highlightedTitle: "",
    description: "",
    buttonLabel: "",
    data: [
      {
        id: 0,
        name: "What is Reunion's research product?",
        value:
          "'research' is our flagship product, currently under private preview. It's a unified search and analytics platform designed specifically for the Real Estate Risk Intelligence, providing powerful insights and comprehensive data.",
      },
      {
        id: 1,
        name: "How can I access the 'research' product during the private preview?",
        value:
          "To gain access to 'research' during the private preview, please reach out to our team through the Contact page and describe your use case. We'll provide you with the necessary information and details.",
      },
    ],
  },
  blogs: {
    title: "Real Estate Blogs",
    highlightedTitle: "",
    description: "",
    buttonLabel: "",
    data: [
      {
        id: 0,
        name: "Alt text for image 1",
        value:
          "Victory for Developers and Allottees: MORYA GRAND's Project Extension Granted by MahaRERA",
      },
    ],
    apiEndPoints: {
      GET_URL:
        "https://6af246c6-21a2-4d70-9a54-5f2a7b760ed6.mock.pstmn.io/getBlogs",
    },
  },
  infoCard2: {
    title: "Refer a Friend",
    highlightedTitle: "",
    description:
      "Spread the word and click the button below to refer our products to a friend who might find them valuable.",
    buttonLabel: "Refer Now",
    data: [],
  },
};
