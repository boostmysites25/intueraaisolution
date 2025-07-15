import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 1000,
    offset: -10,
  });
  return (
    <div>
      <Header />
      <WhatsAppIcon />
      <TawkMessengerReact
        propertyId="68763c0dc944ed1910dc5e37"
        widgetId="1j06tl59r"
      />
      <ScrollToTop />
      <div className="bg-white dark:bg-darkbackground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
