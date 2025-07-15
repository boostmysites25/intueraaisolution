import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";


const AppLayout = () => {
  // Initialize AOS
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });

  // Initialize Tawk.to
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/68763c0dc944ed1910dc5e37/1j06tl59r";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    
    // Add script to head
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector(`script[src="https://embed.tawk.to/68763c0dc944ed1910dc5e37/1j06tl59r"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <div className="bg-white dark:bg-darkbackground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
