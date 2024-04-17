import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { navItems } from '../data/navtems'
import { footerData } from '../data/footerItems'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Navbar navItems={navItems} />
            <div>
                {children}
            </div>
            <Footer footerItems={footerData} />
        </div>
    )
}

export default Layout
