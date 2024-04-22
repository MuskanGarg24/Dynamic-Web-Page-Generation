import React from "react";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import Research from "../components/Research";
import InfoCard from "../components/InfoCard";
import Faq from "../components/Faq";
import Blogs from "../components/Blogs";
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { homePageData, HomePageData } from "../data/homePageData";
import { SEO, homePageSEO } from "../data/seo";

interface ServerDataProps {
    serverData: {
        homePageData: HomePageData;
        homePageSEO: SEO;
        data: [];
    }
}

const Home: React.FC<ServerDataProps> = ({ serverData }) => {

    console.log("home page props are", serverData);

    return (
        <>
            <GatsbySeo
                {...serverData.homePageSEO}
            />

            <Hero
                {...serverData.homePageData.hero1}
            />

            <Insights
                {...serverData.homePageData.insights}
            />

            <Hero
                {...serverData.homePageData.hero2}
            />

            <Research
                {...serverData.homePageData.research}
            />

            <InfoCard
                {...serverData.homePageData.infoCard1}
            />

            <Faq {...serverData.homePageData.faq} />

            <Blogs {...serverData.homePageData.blogs} />

            <InfoCard
                {...serverData.homePageData.infoCard2}
            />
        </>
    );
};

export default Home;


export async function getServerData() {
    console.log("Server side rendering of home page");
    try {
        const res = await fetch(homePageData.blogs.apiEndPoints.GET_URL);
        const fetchedData = await res.json();
        const updatedBlogsData = [...homePageData.blogs.data, ...fetchedData.blogs];
        const udpatedHomePageData = {
            ...homePageData,
            blogs: {
                ...homePageData.blogs,
                data: updatedBlogsData
            }
        }
        return {
            props: {
                homePageData: udpatedHomePageData,
                homePageSEO,
            }
        }
    } catch (error) {
        console.log("error fetching data", error);
    }
}