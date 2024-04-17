import React from 'react';
import Accordian from './Accordian';
import Heading from './Heading';

export interface FaqType {
    question: string;
    answer: string;
}

interface FaqProps {
    faqs: FaqType[];
}

const Faq: React.FC<FaqProps> = ({ faqs }) => {
    return (
        <div className="bg-white mt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <Heading title='FAQs' description='' />
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <Accordian key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Faq;