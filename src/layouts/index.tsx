import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}


const navItems = {
  
    navItems: [{"to":"/","text":"Home"},{"to":"/products","text":"Products"},{"to":"/company","text":"Company"},{"to":"/about","text":"About Us"},{"to":"/login","text":"Login"}],
  
};

const footerData = {
  
    products: [{"name":"Research","link":"/research"}],
  
    company: [{"name":"About Us","link":"/about-us"},{"name":"Contact Us","link":"/contact-us"},{"name":"Careers","link":"/careers"}],
  
    policy: [{"name":"Terms of Service","link":"/terms-of-service"},{"name":"Privacy Policy","link":"/privacy-policy"},{"name":"Cookies Policy","link":"/cookies-policy"}],
  
    socialIcons: [{"name":"Twitter","link":"https://twitter.com/"},{"name":"LinkedIn","link":"https://www.linkedin.com/"},{"name":"Instagram","link":"https://www.instagram.com/"},{"name":"YouTube","link":"https://www.youtube.com/"},{"name":"Facebook","link":"https://www.facebook.com/"}],
  
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
    <Navbar navItems={navItems.navItems}/>
    <div>{children}</div>
    <Footer footerItems={footerData}/>
  </div>
  );
};

export default Layout;
