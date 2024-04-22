import React from "react";
import Heading from "./Heading";
import { StaticImage } from 'gatsby-plugin-image';

interface BlogData {
    id: number;
    name: string;
    value: string;
}

interface BlogProps {
    title: string;
    description: string;
    data: BlogData[];
}

const Blogs: React.FC<BlogProps> = ({ title, description, data }) => {

    return (
        <div className="px-48 pt-28">
            <Heading title={title} description={description} />
            <div className="mt-14 grid grid-cols-3 gap-10">
                {data.map((item, index) => (
                    <div key={index} className="rounded-xl shadow-lg">
                        <div>
                            <StaticImage src="../images/blog-image.jpg" alt={item.name} className="rounded-t-xl" />
                        </div>
                        <div className="p-5">
                            <p className="font-semibold cursor-pointer">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
