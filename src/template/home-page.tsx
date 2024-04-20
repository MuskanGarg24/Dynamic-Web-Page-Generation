import React from "react";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import Research from "../components/Research";
import InfoCard from "../components/InfoCard";
import Faq from "../components/Faq";
import Blogs from "../components/Blogs";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { homePageSEO } from "../data/seo";
import { homePageData } from "../data/homePageData";
// import { blogsApiEndpoint } from "../data/apiEndpoints";

// yaml file -> defining what are different component to be called, order of the components and props to that component

// script -> which will print this homepage using the yaml file and nunjucks

const Home: React.FC = () => {
    return (
        <>
            <GatsbySeo
                title={homePageSEO.title}
                description={homePageSEO.description}
            />

            <Hero
                title={homePageData.hero1.title}
                highlightedTitle={homePageData.hero1.highlightedTitle}
                description={homePageData.hero1.description}
                buttonLabel={homePageData.hero1.buttonLabel}
                data={homePageData.hero1.data}
            />
            
            <Hero
                title={homePageData.hero1.title}
                highlightedTitle={homePageData.hero1.highlightedTitle}
                description={homePageData.hero1.description}
                buttonLabel={homePageData.hero1.buttonLabel}
                data={homePageData.hero1.data}
            />

            <Insights
                title={homePageData.insights.title}
                description={homePageData.insights.description}
                data={homePageData.insights.data}
            />

            <Hero
                title={homePageData.hero2.title}
                highlightedTitle={homePageData.hero2.highlightedTitle}
                description={homePageData.hero2.description}
                buttonLabel={homePageData.hero2.buttonLabel}
                data={homePageData.hero2.data}
            />

            <Research
                title={homePageData.research.title}
                description={homePageData.research.description}
                data={homePageData.research.data}
            />

            <InfoCard
                title={homePageData.infoCard1.title}
                description={homePageData.infoCard1.description}
                buttonLabel={homePageData.infoCard1.buttonLabel}
            />

            <Faq title={homePageData.faq.title} description={homePageData.faq.description} data={homePageData.faq.data} />

            {/* <Blogs title={homePageData.blogs.title} description={homePageData.blogs.description} data={homePageData.blogs.data} blogsApiEndpoint={blogsApiEndpoint} /> */}

            <InfoCard
                title={homePageData.infoCard2.title}
                description={homePageData.infoCard2.description}
                buttonLabel={homePageData.infoCard2.buttonLabel}
            />
        </>
    );
};

export default Home;
