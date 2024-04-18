import React from 'react'
import Button from './Button';

interface InfoCardProps {
    title: string;
    description: string;
    buttonLabel: string;
}


const InfoCard: React.FC<InfoCardProps> = ({ title, description, buttonLabel }) => {
    return (
        <div className='mt-20 p-9 w-[80vw] mx-auto bg-[#ffffff] rounded-xl shadow-lg'>
            <h1 className='text-4xl font-bold'>
                {title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
                {description}
            </p>
            <div className="mt-7">
                <Button label={buttonLabel} />
            </div>
        </div>
    )
}

export default InfoCard;