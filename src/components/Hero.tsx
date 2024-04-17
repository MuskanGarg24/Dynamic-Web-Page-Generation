import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./Button";
import CheckMarkIcon from "../assets/svg/CheckMarkIcon";

interface Props {
    title: string;
    highlightedTitle: string;
    description: string;
    listItems: string[];
    buttonLabel: string;
}

const Hero: React.FC<Props> = ({ title, highlightedTitle, description, listItems, buttonLabel }) => {

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
                    {listItems.map((item, index) => {
                        return (
                            <div className="flex space-x-3 mt-3" key={index}>
                                <CheckMarkIcon />
                                <li className="text-lg">{item}</li>
                            </div>
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
