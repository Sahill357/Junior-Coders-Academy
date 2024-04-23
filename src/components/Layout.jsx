import React from "react";
import MobileNav from "./layout/MobileNav";
import WebNav from "./layout/WebNav";
import { Link } from "react-router-dom";
 

 
const Layout = ({ children }) => {
  
  <Link href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></Link>


  return (
    <div className="main">
      {/* Mobile Menu */}
      <MobileNav />
      {/* Mobile Menu */}




      {/* Web Menu */}
      <WebNav />
      {/* Web Menu */}

     

      {children}
   


      
    </div>
  );
};

export default Layout;
