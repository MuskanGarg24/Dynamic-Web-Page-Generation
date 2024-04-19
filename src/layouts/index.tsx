import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { footerData } from "../data/footerItems";
import { navItems } from "../data/navtems";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar navItems={navItems} />
      <div>{children}</div>
      <Footer footerItems={footerData} />
    </div>
  );
};

export default Layout;
