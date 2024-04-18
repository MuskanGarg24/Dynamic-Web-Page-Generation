import React from 'react';
import Heading from './Heading';
import { InboxIcon } from '@heroicons/react/24/outline';

interface Research {
    name: string;
    description: string;
}

interface ResearchProps {
    title: string;
    description: string;
    data: Research[];
}

const Research: React.FC<ResearchProps> = ({ title, description, data }) => {
    return (
        <div className="bg-white pt-24 sm:pt-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <Heading title={title} description={description} />
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 mt-16">
                        {data.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <dt className="font-semibold text-lg leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#036efa]">
                                        <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {item.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 text-md">
                                    <p className="flex-auto">{item.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Research;