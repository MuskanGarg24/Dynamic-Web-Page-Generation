import React from 'react'

interface StatProps {
    id: number;
    name: string;
    value: string;
}

const Stat: React.FC<StatProps> = ({ id, name, value }) => {
    return (
        <div key={id} className="flex flex-col p-8">
            <div>
                <dt className="mt-2 text-lg font-medium text-gray-500">
                    {name}
                </dt>
                <dd className="text-4xl text-[#036efa] font-semibold mt-3">
                    {value}
                </dd>
            </div>
        </div>
    )
}

export default Stat