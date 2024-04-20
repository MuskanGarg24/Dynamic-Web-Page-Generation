import React from "react";
import Hero from "../components/Hero";
import Insights from "../components/Insights";

interface Data {
    title: string;
    highlightedTitle: string;
    description: string;
    buttonLabel: string;
    data: any[];
}

const hero1: Data = {
    title: "Real Estate",
    highlightedTitle: "Risk Intelligence",
    description: "Uncover valuable real estate insights and navigate risks intelligently with our data-driven solutions, leveraging government data for informed decision-making",
    buttonLabel: "Learn More",
    data: []
};

const insights: Data = {
    title: "Unlocking Insights",
    highlightedTitle: "",
    description: "2 Million+ Tracked Data Points",
    buttonLabel: "Explore Insights",
    data: [
        { id: 0, name: "Projects", value: "40,000+" },
        { id: 1, name: "Developers", value: "60,000+" },
        { id: 2, name: "Legal Cases", value: "20,000+" },
    ]
};


const hero2: Data = {
    title: "Power your research for Real Estate",
    highlightedTitle: "",
    description: "",
    buttonLabel: "Learn More",
    data: [
        "Conduct due diligence on RERA projects",
        "Keep track of your Real Estate portfolio",
        "Early identification of risk",
        "Property market intelligence",
    ],
};

const Home: React.FC = () => {

    return (
        <>
            <Hero
                {...hero1}
            />
            <Insights {...insights} />
            <Hero
                {...hero2}
            />
        </>
    );
};

export default Home;
