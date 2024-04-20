import React from "react";

import Hero from "../src/components/Hero";

import Insights from "../src/components/Insights";

import Research from "../src/components/Research";

import InfoCard from "../src/components/InfoCard";

import Faq from "../src/components/Faq";

import Blogs from "../src/components/Blogs";

import { GatsbySeo } from 'gatsby-plugin-next-seo';

interface Data {
    title: string;
    highlightedTitle: string;
    description: string;
    buttonLabel: string;
    data: any[];
    apiEndPoints: any;
}

interface SEO {
    title: string,
    description: string
}

const SeoData: SEO = {
    title: "Home page title",
    description: "Home page description"
}


const hero1Data: Data = {

    // Exclude apiEndPoints here
    title: "Real Estate",


    // Exclude apiEndPoints here
    highlightedTitle: "Risk Intelligence",


    // Exclude apiEndPoints here
    description: "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",


    // Exclude apiEndPoints here
    buttonLabel: "Learn More",






    data: [





    ],
    apiEndPoints: {

    }
};

const insightsData: Data = {

    // Exclude apiEndPoints here
    title: "Unlocking Insights",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "2 Million+ Tracked Data Points",


    // Exclude apiEndPoints here
    buttonLabel: "Explore Insights",






    data: [



        { id: 0, name: "Projects", value: "40,000+" },

        { id: 1, name: "Developers", value: "60,000+" },

        { id: 2, name: "Legal Cases", value: "20,000+" },



    ],
    apiEndPoints: {

    }
};

const hero2Data: Data = {

    // Exclude apiEndPoints here
    title: "Power your research for Real Estate",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "",


    // Exclude apiEndPoints here
    buttonLabel: "Learn More",






    data: [



        "Conduct due diligence on RERA projects",

        "Keep track of your Real Estate portfolio",

        "Early identification of risk",

        "Property market intelligence",



    ],
    apiEndPoints: {

    }
};

const researchData: Data = {

    // Exclude apiEndPoints here
    title: "Introducing “research”",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "Unified Risk Intelligence Platform for Real Estate",


    // Exclude apiEndPoints here
    buttonLabel: "",






    data: [



        { id: 0, name: "Easy-to-use, powerful research engine", value: "70+ filter types to help you refine your results" },

        { id: 1, name: "Project and Developer profiles", value: "Deep dive into comprehensive profiles covering construction, sales, approvals and litigation details" },

        { id: 2, name: "Consumer complaints and legal cases", value: "Access case history and detailed judgements" },

        { id: 3, name: "Analytics tools", value: "Leverage advanced options such as sorting, grouping for an in-depth analysis" },



    ],
    apiEndPoints: {

    }
};

const infoCard1Data: Data = {

    // Exclude apiEndPoints here
    title: "research is in private preview",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "You can request access to it with by filling up this form",


    // Exclude apiEndPoints here
    buttonLabel: "Request Access",






    data: [





    ],
    apiEndPoints: {

    }
};

const faqData: Data = {

    // Exclude apiEndPoints here
    title: "FAQs",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "",


    // Exclude apiEndPoints here
    buttonLabel: "",






    data: [



        { id: 0, name: "What is Reunion research product?", value: "research is our flagship product, currently under private preview. It&#39;s a unified search and analytics platform designed specifically for the Real Estate Risk Intelligence, providing powerful insights and comprehensive data." },

        { id: 1, name: "How can I access the research product during the private preview?", value: "To gain access to research during the private preview, please reach out to our team through the Contact page and describe your use case. We&#39;ll provide you with the necessary information and details." },



    ],
    apiEndPoints: {

    }
};

const blogsData: Data = {

    // Exclude apiEndPoints here
    title: "Real Estate Blogs",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "",


    // Exclude apiEndPoints here
    buttonLabel: "",






    data: [



        { id: 0, name: "Alt text for image 1", value: "Victory for Developers and Allottees: MORYA GRAND&#39;s Project Extension Granted by MahaRERA" },



    ],
    apiEndPoints: {

        GET_URL: "https://6af246c6-21a2-4d70-9a54-5f2a7b760ed6.mock.pstmn.io/getBlogs",

    }
};

const infoCard2Data: Data = {

    // Exclude apiEndPoints here
    title: "Refer a Friend",


    // Exclude apiEndPoints here
    highlightedTitle: "",


    // Exclude apiEndPoints here
    description: "Spread the word and click the button below to refer our products to a friend who might find them valuable.",


    // Exclude apiEndPoints here
    buttonLabel: "Refer Now",






    data: [





    ],
    apiEndPoints: {

    }
};



const Home: React.FC = () => {
    return (
        <>
            <GatsbySeo {...SeoData} />

            <Hero {...hero1Data} />

            <Insights {...insightsData} />

            <Hero {...hero2Data} />

            <Research {...researchData} />

            <InfoCard {...infoCard1Data} />

            <Faq {...faqData} />

            <Blogs {...blogsData} />

            <InfoCard {...infoCard2Data} />

        </>
    );
};
export default Home;
