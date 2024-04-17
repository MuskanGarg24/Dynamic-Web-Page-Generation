import React from 'react';
import Heading from './Heading';
import ResearchCard from './ResearchCard';

interface Research {
    name: string;
    description: string;
}

interface ResearchProps {
    features: Research[];
    title: string;
    description: string;
}

const Research: React.FC<ResearchProps> = ({ features, title, description }) => {
    return (
        <div className="bg-white pt-24 sm:pt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Heading title={title} description={description} />
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 mt-16">
                        {features.map((feature) => (
                            <ResearchCard key={feature.name} name={feature.name} description={feature.description} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Research;