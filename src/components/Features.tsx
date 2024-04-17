import React from 'react';
import { InboxIcon } from '@heroicons/react/24/outline';

interface Feature {
    name: string;
    description: string;
}

interface FeaturesProps {
    features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
    return (
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {features.map((feature) => (
                    <div key={feature.name} className="flex flex-col">
                        <dt className="font-semibold text-lg leading-7 text-gray-900">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#036efa]">
                                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 text-md">
                            <p className="flex-auto">{feature.description}</p>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Features;