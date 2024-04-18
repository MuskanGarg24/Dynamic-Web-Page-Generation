import React from "react";
import Heading from "./Heading";

interface Stats {
    id: number;
    name: string;
    value: string;
}

interface InsightsProps {
    title: string;
    description: string;
    data: Stats[];
}

const Insights: React.FC<InsightsProps> = ({ title, description, data }) => {
    return (
        <div className="bg-white pt-24 sm:pt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Heading title={title} description={description} />
                    <dl className="mb-9 mt-3 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((insight) => (
                            <div key={insight.id} className="flex flex-col p-8">
                                <div>
                                    <dt className="mt-2 text-lg font-medium text-gray-500">
                                        {insight.name}
                                    </dt>
                                    <dd className="text-4xl text-[#036efa] font-semibold mt-3">
                                        {insight.value}
                                    </dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Insights;
