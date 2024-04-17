import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

interface FaqItemProps {
    question: string;
    answer: string;
}

const Accordian: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
        <Disclosure as="div" className="pt-6">
            {({ open }) => (
                <>
                    <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">{question}</span>
                            <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">{answer}</p>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Accordian;
