import React from "react";
import Hero from "../components/Hero";
import Blogs from "../components/Blogs";
import Faq from "../components/Faq";
import Insights from "../components/Insights";
import InfoCard from "../components/InfoCard";
import { titlesData, descriptionsData, buttonsData, benefits, features, stats } from "../data/data";
import { faqs } from "../data/faqsData";
import { cardData } from "../data/blogsData";

const Home: React.FC = () => {

    return (
        <>
            <Hero
                title={titlesData.heroTitle}
                highlightedTitle={titlesData.heroHighlightedTitle}
                description={descriptionsData.heroDescription}
                listItems={[]}
                buttonLabel=""
            />

            <Insights
                title={titlesData.insightsTitle}
                description={descriptionsData.insightsDescription}
                features={[]}
                stats={stats}
            />

            <Hero
                title={titlesData.powerResearchTitle}
                highlightedTitle=""
                description=""
                listItems={benefits}
                buttonLabel={buttonsData.learnMore}
            />

            <Insights
                title={titlesData.researchTitle}
                description={descriptionsData.researchDescription}
                features={features}
                stats={[]}
            />

            <InfoCard
                title={titlesData.privatePreviewTitle}
                description={descriptionsData.privatePreviewDescription}
                label={buttonsData.requestAccess}
            />

            <Faq faqs={faqs} />

            <Blogs cardData={cardData} />

            <InfoCard
                title={titlesData.referFriendTitle}
                description={descriptionsData.referFriendDescription}
                label={buttonsData.referNow}
            />
        </>
    );
};

export default Home;
