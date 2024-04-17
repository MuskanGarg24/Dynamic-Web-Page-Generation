import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Button from './Button'

interface NavProps {
    navItems: { to: string, text: string }[];
}

const Navbar: React.FC<NavProps> = ({ navItems }) => {

    return (
        <div className='flex justify-between px-36 py-2 bg-[#ffffff] shadow-lg'>
            <div className='flex space-x-12'>
                <div>
                    <StaticImage src='../images/logo.png' alt='logo' className="w-48" />
                </div>
                <ul className='flex space-x-9 text-[#6b7583] text-md font-semibold mt-6 cursor-pointer'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.to}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-3">
                <Button label="Log in" />
            </div>
        </div>
    )
}

export default Navbar