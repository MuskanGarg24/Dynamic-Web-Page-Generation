import React from 'react';
import Features from './Features';
import Stats from './Stats';
import Heading from './Heading';

interface InsightsProps {
    title: string;
    description: string;
    features: any;
    stats: any;
}

const Insights: React.FC<InsightsProps> = ({ title, description, features, stats }) => {

    return (
        <div className="bg-white pt-24 sm:pt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Heading title={title} description={description} />
                    {stats && <Stats stats={stats} />}
                    {features && <Features features={features} />}
                </div>
            </div>
        </div>
    );
};

export default Insights;
