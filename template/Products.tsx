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



interface ServerDataProps {
    serverData: {
        
        SeoData: SEO;
    }
}

const Products: React.FC<ServerDataProps> = ({serverData}) => {

    console.log("page props are", serverData);

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
            
        </>
    );
};
export default Products;


export async function getServerData() {
    console.log("Server side rendering of Products using templating and script")
    return {
        props: {
            
            SeoData,
        }
    }
}