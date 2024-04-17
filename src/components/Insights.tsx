import React from "react";
import Heading from "./Heading";
import Stat from "./Stat";

interface stats {
    id: number;
    name: string;
    value: string;
}

interface InsightsProps {
    title: string;
    description: string;
    stats: stats[];
}

const Insights: React.FC<InsightsProps> = ({ title, description, stats }) => {
    return (
        <div className="bg-white pt-24 sm:pt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Heading title={title} description={description} />
                    <dl className="mb-9 mt-3 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map((insight) => (
                            <Stat id={insight.id} name={insight.name} value={insight.value} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Insights;
