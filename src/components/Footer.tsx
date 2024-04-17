import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FooterData } from '../data/footerItems';

interface FooterProps {
    footerItems: FooterData;
}

const Footer: React.FC<FooterProps> = ({ footerItems }) => {
    return (
        <div className='w-full bg-[#ffffff] p-20 mt-10'>
            <div className='flex space-x-52'>
                <div>
                    <div>
                        <StaticImage src='../images/logo.png' alt='logo' className="w-48" />
                    </div>
                    <div className="mt-12 flex space-x-6 cursor-pointer">
                        {footerItems.socialIcons.map((socialIcon, index) => (
                            <a key={index} href={socialIcon.link}>
                                <StaticImage src={socialIcon.src} alt={socialIcon.name} className="w-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='flex space-x-48 text-[#6b7583]'>
                    {Object.entries(footerItems).map(([sectionTitle, items]: [string, { link: string, name: string }[]]) => (
                        sectionTitle !== "socialIcons" && (
                            <div key={sectionTitle}>
                                <h6 className='font-semibold'>{sectionTitle.toUpperCase()}</h6>
                                <ul>
                                    {items.map((item: { link: string, name: string }, index: number) => (
                                        <li key={index} className='mt-4'>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className='mt-12'>
                <hr />
                <div className="text-center text-[#6b7583] mt-10">
                    <h6 className='font-semibold'>Registered with Startup India (DIPP96460)</h6>
                    <p className='pt-1'>© 2022 Web3 Platforms Private Limited. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
