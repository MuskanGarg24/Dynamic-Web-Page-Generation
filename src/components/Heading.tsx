import React from 'react'

interface HeadingProps {
    title: string;
    description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
        <div className='text-center'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {title}
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
                {description}
            </p>
        </div>
    )
}

export default Heading