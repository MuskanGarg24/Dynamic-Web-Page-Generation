import React from "react";
import Button from "./Button";
import { StaticImage } from "gatsby-plugin-image";

interface HeroProps {
    title: string;
    highlightedTitle: string;
    description: string;
    buttonLabel: string;
    data: string[];
}

const Hero: React.FC<HeroProps> = ({ title, highlightedTitle, description, buttonLabel, data }) => {

    return (
        <div className="bg-[#ffffff] flex space-x-10 px-48 pt-20">
            <div>
                <h1 className="text-5xl font-bold mt-5">
                    {title}
                    &#160;
                    <span className="text-[#036efa]">{highlightedTitle}</span>
                </h1>
                <p className="mt-5 text-2xl text-[#4a4458]">{description}</p>
                <ul className="my-9">
                    {data.map((item, index) => {
                        return (
                            <li className="text-lg mt-3" key={index}>{item}</li>
                        );
                    })}
                </ul>
                {buttonLabel && <Button label={buttonLabel} />}
            </div>
            <div>
                <StaticImage
                    src="../images/hero_image_1.avif"
                    alt="hero_image_1"
                    className="w-96"
                />
            </div>
        </div>
    );
};

export default Hero;
