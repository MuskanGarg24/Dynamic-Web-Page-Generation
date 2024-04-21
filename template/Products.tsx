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
    title: "Products page title",
    description: "Products page description"
}




const Products: React.FC = () => {
    return (
        <>
        <GatsbySeo {...SeoData} />
            
        </>
    );
};
export default Products;
