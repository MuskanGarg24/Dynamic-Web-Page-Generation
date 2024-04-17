import React from 'react'
import Heading from './Heading'
import Card from './Card'

interface BlogProps {
    cardData: CardData[];
}

interface CardData {
    id: number;
    alt: string;
    title: string;
}

const Blogs: React.FC<BlogProps> = ({ cardData }) => {

    return (
        <div className='px-48 pt-28'>
            <Heading title='Real Estate Blogs' description='' />
            <div className='mt-14 grid grid-cols-3 gap-10'>
                {cardData.map((card) => (
                    <Card key={card.id} title={card.title} alt={card.alt} />
                ))}
            </div>
        </div>
    )
}

export default Blogs
