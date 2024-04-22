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



interface ServerDataProps {
    serverData: {
        
        SeoData: SEO;
    }
}

const Company: React.FC<ServerDataProps> = ({serverData}) => {

    console.log("page props are", serverData);

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
            
        </>
    );
};
export default Company;


export async function getServerData() {
    console.log("Server side rendering of Company using templating and script")
    return {
        props: {
            
            SeoData,
        }
    }
}