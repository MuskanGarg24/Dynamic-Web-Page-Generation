import React from 'react';
import Heading from './Heading';
import { Disclosure } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export interface FaqType {
    question: string;
    answer: string;
}

interface FaqProps {
    title: string;
    description: string;
    data: FaqType[];
}

const Faq: React.FC<FaqProps> = ({ title, description, data }) => {
    return (
        <div className="bg-white mt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <Heading title={title} description={description} />
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {data.map((faq, index) => (
                            <Disclosure as="div" className="pt-6" key={index}>
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusIcon
                                                            className="h-4 w-4" aria-hidden="true" />
                                                    ) : (
                                                        <PlusIcon
                                                            className="h-4 w-4" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Faq;