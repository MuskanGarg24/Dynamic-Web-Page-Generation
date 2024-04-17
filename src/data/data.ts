// data for home page

export const titlesData = {
  heroTitle: "Real Estate",
  heroHighlightedTitle: "Risk Intelligence",
  insightsTitle: "Unlocking Insights",
  insightsDescription: "2 Million+ Tracked Data Points",
  powerResearchTitle: "Power your research for Real Estate",
  researchTitle: "Introducing “research”",
  faqTitle: "FAQs",
  blogsTitle: "Real Estate Blogs",
  privatePreviewTitle: "research is in private preview",
  referFriendTitle: "Refer a Friend",
};

export const descriptionsData = {
  heroDescription:
    "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",
  insightsDescription: "2 Million+ Tracked Data Points",
  researchDescription: "Unified Risk Intelligence Platform for Real Estate",
  privatePreviewDescription:
    "You can request access to it with by filling up this form",
  referFriendDescription:
    "Spread the word and click the button below to refer our products to a friend who might find them valuable.",
};

export const buttonsData = {
  learnMore: "Learn More",
  requestAccess: "Request Access",
  referNow: "Refer Now",
};

interface Stat {
  id: number;
  name: string;
  value: string;
}

export const stats: Stat[] = [
  { id: 1, name: "Projects", value: "40,000+" },
  { id: 2, name: "Developers", value: "60,000+" },
  { id: 3, name: "Legal Cases", value: "20,000+" },
];

interface ResearchFeatures {
  name: string;
  description: string;
}

export const features: ResearchFeatures[] = [
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
];

export const benefits: string[] = [
  "Conduct due diligence on RERA projects",
  "Keep track of your Real Estate portfolio",
  "Early identification of risk",
  "Property market intelligence",
];
