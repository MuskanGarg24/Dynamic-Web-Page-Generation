import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface CardProps {
    title: string;
    alt: string;
}

const Card: React.FC<CardProps> = ({ title, alt }) => {
    return (
        <div className="rounded-xl shadow-lg">
            <div>
                <StaticImage src='../images/blog-image.jpg' alt={alt} className="rounded-t-xl" />
            </div>
            <div className='p-5'>
                <p className='font-semibold cursor-pointer'>{title}</p>
            </div>
        </div>
    )
}

export default Card