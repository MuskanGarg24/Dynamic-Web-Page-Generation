interface HeroData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: string[];
}

interface InsightsData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; name: string; value: string }[];
}

interface ResearchData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { name: string; description: string }[];
}

interface InfoCardData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: string[];
}

interface FAQData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; question: string; answer: string }[];
}

interface BlogsData {
  title: string;
  highlightedTitle: string;
  description: string;
  buttonLabel: string;
  data: { id: number; alt: string; title: string }[];
}

interface HomePageData {
  hero1: HeroData;
  insights: InsightsData;
  hero2: HeroData;
  research: ResearchData;
  infoCard1: InfoCardData;
  faq: FAQData;
  blogs: BlogsData;
  infoCard2: InfoCardData;
}

// convert this to yaml file and then import it to the component

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
        description: "70+ filter types to help you refine your results",
      },
      {
        name: "Project and Developer profiles",
        description:
          "Deep dive into comprehensive profiles covering construction, sales, approvals and litigation details",
      },
      {
        name: "Consumer complaints and legal cases",
        description: "Access case history and detailed judgements",
      },
      {
        name: "Analytics tools",
        description:
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
        question: "What is Reunion's research product?",
        answer:
          "'research' is our flagship product, currently under private preview. It's a unified search and analytics platform designed specifically for the Real Estate Risk Intelligence, providing powerful insights and comprehensive data.",
      },
      {
        id: 1,
        question:
          "How can I access the 'research' product during the private preview?",
        answer:
          "To gain access to 'research' during the private preview, please reach out to our team through the Contact page and describe your use case. We'll provide you with the necessary information and details.",
      },
      {
        id: 2,
        question: "What sets 'research' apart from other real estate tools?",
        answer:
          "'research' stands out with its easy-to-use, powerful search engine, extensive filter options, detailed project and developer profiles, insights into consumer complaints and legal cases, and advanced analytics tools.",
      },
      {
        id: 3,
        question: "When will 'research' be available to the public?",
        answer:
          "We are actively working towards a public release for 'research.' Stay updated by subscribing to our newsletter or following us on social media to be the first to know when it becomes available.",
      },
      {
        id: 4,
        question: "How is my data secured on the Reunion platform?",
        answer:
          "We take data security seriously. Our platform employs robust encryption protocols and follows industry best practices to ensure the confidentiality and integrity of your data. You can learn more about our security measures in our Privacy Policy.",
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
        alt: "Alt text for image 1",
        title:
          "Victory for Developers and Allottees: MORYA GRAND's Project Extension Granted by MahaRERA",
      },
      {
        id: 1,
        alt: "Alt text for image 2",
        title:
          "Securing Consumer Interests: Udaan Aria's MahaRERA Extension Case",
      },
      {
        id: 2,
        alt: "Alt text for image 3",
        title:
          "Ensuring Trustworthy Real Estate Transactions: Your Guide to Verifying HRERA Certified Agents",
      },
    ],
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
