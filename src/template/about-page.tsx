import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { AboutPageData, aboutPageData } from '../data/aboutPageData'
import { SEO, aboutPageSEO } from '../data/seo'
import Overview from '../components/Overview';

interface ServerDataProps {
    serverData: {
        aboutPageData: AboutPageData;
        aboutPageSEO: SEO;
    }
}

const AboutPage: React.FC<ServerDataProps> = ({ serverData }) => {
    console.log("about page props are", serverData);

    return (
        <>
            <GatsbySeo
                {...serverData.aboutPageSEO}
            />
            <Overview {...serverData.aboutPageData.overview1} />
            <Overview {...serverData.aboutPageData.overview2} />
        </>
    );
}

export default AboutPage

export function getServerData() {
    console.log("Server side rendering of about page");
    return {
        props: {
            aboutPageData,
            aboutPageSEO
        }
    }
}