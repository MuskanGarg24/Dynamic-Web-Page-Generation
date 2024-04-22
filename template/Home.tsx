import React from "react";

import Hero from "../src/components/Hero";

import Insights from "../src/components/Insights";

import Research from "../src/components/Research";

import InfoCard from "../src/components/InfoCard";

import Faq from "../src/components/Faq";

import Blogs from "../src/components/Blogs";

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import useAuthentication from "../src/components/useAuthentication";

interface Data {
    title: string;
    highlightedTitle: string;
    description: string;
    buttonLabel: string;
    data: any[];
    apiEndPoints: any;
    isSSR: string;
    isProtected: string;
}

interface SEO {
    title: string,
    description: string
}

const SeoData: SEO = {
    title: "Home page title",
    description: "Home page description"
}


const hero1: Data = {
    
        
            title: "Real Estate",
    
    
        
            highlightedTitle: "Risk Intelligence",
    
    
        
            description: "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",
    
    
        
            buttonLabel: "Learn More",
    
    
        
    
        
    
        
            isSSR: "false",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
        
    
    ],
    apiEndPoints: {
        
    }
};

const insights: Data = {
    
        
            title: "Unlocking Insights",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "2 Million+ Tracked Data Points",
    
    
        
            buttonLabel: "Explore Insights",
    
    
        
    
        
    
        
            isSSR: "false",
    
    
        
            isProtected: "true",
    
    
    data: [
        
        
            
                    { id: 0, name: "Projects", value: "40,000+" },
                
                    { id: 1, name: "Developers", value: "60,000+" },
                
                    { id: 2, name: "Legal Cases", value: "20,000+" },
                
        
    
    ],
    apiEndPoints: {
        
    }
};

const hero2: Data = {
    
        
            title: "Power your research for Real Estate",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "",
    
    
        
            buttonLabel: "Learn More",
    
    
        
    
        
    
        
            isSSR: "false",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
                    "Conduct due diligence on RERA projects",
                
                    "Keep track of your Real Estate portfolio",
                
                    "Early identification of risk",
                
                    "Property market intelligence",
                
        
    
    ],
    apiEndPoints: {
        
    }
};

const research: Data = {
    
        
            title: "Introducing “research”",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "Unified Risk Intelligence Platform for Real Estate",
    
    
        
            buttonLabel: "",
    
    
        
    
        
    
        
            isSSR: "false",
    
    
        
            isProtected: "true",
    
    
    data: [
        
        
            
                    { id: 0, name: "Easy-to-use, powerful research engine", value: "70+ filter types to help you refine your results" },
                
                    { id: 1, name: "Project and Developer profiles", value: "Deep dive into comprehensive profiles covering construction, sales, approvals and litigation details" },
                
                    { id: 2, name: "Consumer complaints and legal cases", value: "Access case history and detailed judgements" },
                
                    { id: 3, name: "Analytics tools", value: "Leverage advanced options such as sorting, grouping for an in-depth analysis" },
                
        
    
    ],
    apiEndPoints: {
        
    }
};

const infoCard1: Data = {
    
        
            title: "research is in private preview",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "You can request access to it with by filling up this form",
    
    
        
            buttonLabel: "Request Access",
    
    
        
    
        
    
        
            isSSR: "true",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
        
    
    ],
    apiEndPoints: {
        
    }
};

const faq: Data = {
    
        
            title: "FAQs",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "",
    
    
        
            buttonLabel: "",
    
    
        
    
        
    
        
            isSSR: "true",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
                    { id: 0, name: "What is Reunion research product?", value: "research is our flagship product, currently under private preview. It&#39;s a unified search and analytics platform designed specifically for the Real Estate Risk Intelligence, providing powerful insights and comprehensive data." },
                
                    { id: 1, name: "How can I access the research product during the private preview?", value: "To gain access to research during the private preview, please reach out to our team through the Contact page and describe your use case. We&#39;ll provide you with the necessary information and details." },
                
        
    
    ],
    apiEndPoints: {
        
    }
};

const blogs: Data = {
    
        
            title: "Real Estate Blogs",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "",
    
    
        
            buttonLabel: "",
    
    
        
    
        
    
        
            isSSR: "true",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
                    { id: 0, name: "Alt text for image 1", value: "Victory for Developers and Allottees: MORYA GRAND&#39;s Project Extension Granted by MahaRERA" },
                
        
    
    ],
    apiEndPoints: {
        
        GET_URL: "https://6af246c6-21a2-4d70-9a54-5f2a7b760ed6.mock.pstmn.io/getBlogs",
        
    }
};

const infoCard2: Data = {
    
        
            title: "Refer a Friend",
    
    
        
            highlightedTitle: "",
    
    
        
            description: "Spread the word and click the button below to refer our products to a friend who might find them valuable.",
    
    
        
            buttonLabel: "Refer Now",
    
    
        
    
        
    
        
            isSSR: "true",
    
    
        
            isProtected: "false",
    
    
    data: [
        
        
            
        
    
    ],
    apiEndPoints: {
        
    }
};


interface ServerDataProps {
    serverData: {
        
    hero1: Data;
        
    insights: Data;
        
    hero2: Data;
        
    research: Data;
        
    infoCard1: Data;
        
    faq: Data;
        
    blogs: Data;
        
    infoCard2: Data;
        
        SeoData: SEO;
    }
}

const Home: React.FC<ServerDataProps> = ({serverData}) => {

    const loggedIn = useAuthentication();

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
        
            
                
                    
                        <Hero {...hero1} />
                    
                
            
                
                    {Boolean(insights.isProtected) && loggedIn ? 
                    ( 
                        
                            <Insights {...insights} />
                        
                    ): 
                    (
                        <p className="text-center text-xl my-20"> You need to be logged in to view this section </p>
                    )}
                
            
                
                    
                        <Hero {...hero2} />
                    
                
            
                
                    {Boolean(research.isProtected) && loggedIn ? 
                    ( 
                        
                            <Research {...research} />
                        
                    ): 
                    (
                        <p className="text-center text-xl my-20"> You need to be logged in to view this section </p>
                    )}
                
            
                
                    
                        <InfoCard {...serverData.infoCard1} />
                    
                
            
                
                    
                        <Faq {...serverData.faq} />
                    
                
            
                
                    
                        <Blogs {...serverData.blogs} />
                    
                
            
                
                    
                        <InfoCard {...serverData.infoCard2} />
                    
                
            
        
        </>
    );
};
export default Home;


export async function getServerData() {
    console.log("Server side rendering of Home using templating and script")
    try {
        
        const res = await fetch(blogs.apiEndPoints.GET_URL);
        const fetchedData = await res.json();
        const blogsData = {
            ...blogs,
            data: [...blogs.data, ...fetchedData.blogs]
        }
        return {
            props: {
                
                    
                
                    
                
                    
                
                    
                
                    
                        infoCard1,
                    
                
                    
                        faq,
                    
                
                    
                        blogs: blogsData,
                    
                
                    
                        infoCard2,
                    
                
                SeoData,
            }
        }
        
    }
    catch (error) {
        console.log("Error while fetching data for Home page", error);
    }
}
