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
    
    
    title: "Real Estate",
    
    
    
    highlightedTitle: "Risk Intelligence",
    
    
    
    description: "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",
    
    
    
    buttonLabel: "Learn More",
    
    
    
    
    data: [
        
            
                
            
        
    ]
};

const insightsData: Data = {
    
    
    title: "Unlocking Insights",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "2 Million+ Tracked Data Points",
    
    
    
    buttonLabel: "Explore Insights",
    
    
    
    
    data: [
        
            
                
                    { id: 0, name: "Projects", value: "40,000+" },
                
                    { id: 1, name: "Developers", value: "60,000+" },
                
                    { id: 2, name: "Legal Cases", value: "20,000+" },
                
            
        
    ]
};

const hero2Data: Data = {
    
    
    title: "Power your research for Real Estate",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "",
    
    
    
    buttonLabel: "Learn More",
    
    
    
    
    data: [
        
            
                
                    "Conduct due diligence on RERA projects",
                
                    "Keep track of your Real Estate portfolio",
                
                    "Early identification of risk",
                
                    "Property market intelligence",
                
            
        
    ]
};

const researchData: Data = {
    
    
    title: "Introducing “research”",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "Unified Risk Intelligence Platform for Real Estate",
    
    
    
    buttonLabel: "",
    
    
    
    
    data: [
        
            
                
                    { id: 0, name: "Easy-to-use, powerful research engine", value: "70+ filter types to help you refine your results" },
                
                    { id: 1, name: "Project and Developer profiles", value: "Deep dive into comprehensive profiles covering construction, sales, approvals and litigation details" },
                
                    { id: 2, name: "Consumer complaints and legal cases", value: "Access case history and detailed judgements" },
                
                    { id: 3, name: "Analytics tools", value: "Leverage advanced options such as sorting, grouping for an in-depth analysis" },
                
            
        
    ]
};

const infoCard1Data: Data = {
    
    
    title: "research is in private preview",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "You can request access to it with by filling up this form",
    
    
    
    buttonLabel: "Request Access",
    
    
    
    
    data: [
        
            
                
            
        
    ]
};

const faqData: Data = {
    
    
    title: "FAQs",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "",
    
    
    
    buttonLabel: "",
    
    
    
    
    data: [
        
            
                
                    { id: 0, name: "What is Reunion research product?", value: "research is our flagship product, currently under private preview. It&#39;s a unified search and analytics platform designed specifically for the Real Estate Risk Intelligence, providing powerful insights and comprehensive data." },
                
                    { id: 1, name: "How can I access the research product during the private preview?", value: "To gain access to research during the private preview, please reach out to our team through the Contact page and describe your use case. We&#39;ll provide you with the necessary information and details." },
                
            
        
    ]
};

const blogsData: Data = {
    
    
    title: "Real Estate Blogs",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "",
    
    
    
    buttonLabel: "",
    
    
    
    
    data: [
        
            
                
                    { id: 0, name: "Alt text for image 1", value: "Victory for Developers and Allottees: MORYA GRAND&#39;s Project Extension Granted by MahaRERA" },
                
            
        
    ]
};

const infoCard2Data: Data = {
    
    
    title: "Refer a Friend",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "Spread the word and click the button below to refer our products to a friend who might find them valuable.",
    
    
    
    buttonLabel: "Refer Now",
    
    
    
    
    data: [
        
            
                
            
        
    ]
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
