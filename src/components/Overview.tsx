import React from 'react'

interface OverviewProps {
    title: string;
    description: string;
}

const Overview: React.FC<OverviewProps> = ({title, description}) => {
    return (
        <div className='px-14'>
            <div className="py-9">
                <h1 className='text-5xl font-bold mb-7'>{title}</h1>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Overview