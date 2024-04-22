import React from "react";

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
    title: "Company page title",
    description: "Company page description"
}



interface ServerDataProps {
    serverData: {
        
        SeoData: SEO;
    }
}

const Company: React.FC<ServerDataProps> = ({serverData}) => {

    const loggedIn = useAuthentication();

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
        
            
        
        </>
    );
};
export default Company;


export async function getServerData() {
    console.log("Server side rendering of Company using templating and script")
    try {
        
            return {
                props: {
                    
                    SeoData,
                }
            };
        
    }
    catch (error) {
        console.log("Error while fetching data for Company page", error);
    }
}
