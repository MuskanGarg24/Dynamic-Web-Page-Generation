import React from "react";

import { GatsbySeo } from 'gatsby-plugin-next-seo';
import axios from "axios";

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

    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get("http://localhost:3000/verify", {
                headers: {
                    Authorization: token
                }
            })
                .then(() => {
                    setLoggedIn(true);
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            console.log("No token found");
        }
    }, []);

    console.log(loggedIn)

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
