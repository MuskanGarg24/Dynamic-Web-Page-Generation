import React from 'react'
import { InboxIcon } from '@heroicons/react/24/outline';

interface ResearchProps {
    name: string;
    description: string;
}

const ResearchCard: React.FC<ResearchProps> = ({ name, description }) => {
    return (
        <div key={name} className="flex flex-col">
            <dt className="font-semibold text-lg leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#036efa]">
                    <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {name}
            </dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 text-md">
                <p className="flex-auto">{description}</p>
            </dd>
        </div>
    )
}

export default ResearchCard