import React from "react";

import Overview from "../src/components/Overview";

import { GatsbySeo } from 'gatsby-plugin-next-seo';

import axios from "axios"



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
    title: "About page title",
    description: "About page description"
}


const overview1: Data = {
    
    
    title: "Mission and Vision",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "At Reunion, our mission is clear - to revolutionize the Indian real estate sector by introducing advanced technology that fosters transparency and efficiency. We aim to become the foremost technology partner, delivering innovative solutions that empower all stakeholders.  Our vision is a future where the Indian real estate industry operates seamlessly, driven by cutting-edge technology that reshapes processes and decision-making. We aspire to lead this transformation by exceeding the evolving needs of the industry, creating an ecosystem where every participant can thrive.",
    
    
    
    buttonLabel: "",
    
    
    
    
    data: [
        
            
                
            
        
    ],
    apiEndPoints: {
        
    }
};

const overview2: Data = {
    
    
    title: "About Us",
    
    
    
    highlightedTitle: "",
    
    
    
    description: "Reunion is dedicated to reshaping the Indian real estate landscape through technological advancements. Our holistic approach spans discovery, digitization, and automation, addressing the diverse needs of the sector. We believe in leveraging technology as a catalyst for positive change. With a team of experienced engineers and industry experts, we understand the unique challenges faced by the Indian real estate sector. Crafting innovative solutions, we aim not only to meet but exceed industry demands. Our focus is on delivering tangible results, helping clients achieve their business objectives. As we grow, our commitment to being the premier technology partner remains unwavering. Join us on this transformative journey, where we strive to elevate your business to new heights",
    
    
    
    buttonLabel: "",
    
    
    
    
    
    
    data: [
        
            
                
            
        
    ],
    apiEndPoints: {
        
    }
};


interface ServerDataProps {
    serverData: {
        
        overview1: Data;
        
        overview2: Data;
        
        SeoData: SEO;
    }
}

const About: React.FC<ServerDataProps> = ({serverData}) => {

    
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get("http://localhost:3000/verify", {
                headers: {
                    Authorization: token
                }
            })
                .then((response) => {
                    console.log(response);
                    setLoggedIn(true);
                })
                .catch((error) => {
                    console.log(error);
                    window.location.href = "/login";
                });
        } else {
            window.location.href = "/login";
        }
    }, []);
    

    return (
        <>
        <GatsbySeo {...serverData.SeoData} />
        
        {loggedIn ? (
            <>
                
                <Overview {...serverData.overview1} />
                
                <Overview {...serverData.overview2} />
                
            </>
        ) : null}
        
        </>
    );
};
export default About;


export async function getServerData() {
    console.log("Server side rendering of About using templating and script")
    try {
        
            return {
                props: {
                    
                    overview1,
                    
                    overview2,
                    
                    SeoData,
                }
            };
        
    }
    catch (error) {
        console.log("Error while fetching data for About page", error);
    }
}