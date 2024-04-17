import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Card from "./Card";
// import axios from 'axios';

interface BlogProps {
    cardData: CardData[];
    title: string;
    description: string;
}

interface CardData {
    id: number;
    alt: string;
    title: string;
}

const Blogs: React.FC<BlogProps> = ({ cardData, title, description }) => {
    const [blogs, setBlogs] = useState<CardData[]>([]);

    const fetchBlogs = async () => {
        // const response = axios.get("https://6af246c6-21a2-4d70-9a54-5f2a7b760ed6.mock.pstmn.io/getBlogs");
        // const data = response.data;
        await fetch(
            "https://6af246c6-21a2-4d70-9a54-5f2a7b760ed6.mock.pstmn.io/getBlogs"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBlogs(data.blogs);
            }).catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="px-48 pt-28">
            <Heading title={title} description={description} />
            <div className="mt-14 grid grid-cols-3 gap-10">
                {cardData.map((card) => (
                    <Card key={card.id} title={card.title} alt={card.alt} />
                ))}
            </div>
            <div className="mt-14 grid grid-cols-3 gap-10">
                {blogs.map((blog: any) => {
                    return <Card key={blog.id} title={blog.title} alt={blog.alt} />;
                })}
            </div>
        </div>
    );
};

export default Blogs;
