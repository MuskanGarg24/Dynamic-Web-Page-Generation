import React from "react";

import LogIn from "../src/components/LogIn";

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
    title: "Login page title",
    description: "Login page description"
}


const login: Data = {
    
    
    title: "Login to your account",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "",
    
    
    
    buttonLabel: "Login",
    
    
    
    
    
    
    data: [
        
            
                
            
        
    ],
    apiEndPoints: {
        
        login: "http://localhost:3000/login",
        
    }
};


interface ServerDataProps {
    serverData: {
        
        login: Data;
        
        SeoData: SEO;
    }
}

const Login: React.FC<ServerDataProps> = ({serverData}) => {

    

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
        
            
            <LogIn {...serverData.login} />
            
        
        </>
    );
};
export default Login;


export async function getServerData() {
    console.log("Server side rendering of Login using templating and script")
    try {
        
            return {
                props: {
                    
                    login,
                    
                    SeoData,
                }
            };
        
    }
    catch (error) {
        console.log("Error while fetching data for Login page", error);
    }
}