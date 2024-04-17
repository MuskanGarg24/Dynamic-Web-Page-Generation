import React from 'react'

interface stats {
    id: number;
    name: string;
    value: string;
}

interface StatsProps {
    stats: stats[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
    return (
        <dl className="mb-9 mt-3 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((insight) => (
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
    )
}

export default Stats