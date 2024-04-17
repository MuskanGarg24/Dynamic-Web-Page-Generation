import React from 'react';
import Features from './Features';
import Stats from './Stats';

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
                    <div className='text-center'>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            {title}
                        </h2>
                        <p className="mt-4 text-xl leading-8 text-gray-600">
                            {description}
                        </p>
                    </div>
                    {stats && <Stats stats={stats} />}
                    {features && <Features features={features} />}
                </div>
            </div>
        </div>
    );
};

export default Insights;
