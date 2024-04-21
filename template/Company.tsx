import React from "react";

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
    title: "Company page title",
    description: "Company page description"
}




const Company: React.FC = () => {
    return (
        <>
        <GatsbySeo {...SeoData} />
            
        </>
    );
};
export default Company;
