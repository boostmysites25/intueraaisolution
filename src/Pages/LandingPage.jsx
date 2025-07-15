import React, { useEffect } from "react";
import LandingHeader from "../Components/landingpage/LandingHeader";
import LandingFooter from "../Components/landingpage/LandingFooter";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import LandingServices from "../Components/landingpage/LandingServices";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import LeadForm from "../Components/landingpage/LeadForm";
import Portfolio from "../Components/Portfolio";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

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
    <>
      <LandingHeader />
      <div className="bg-white dark:bg-darkblack">
        <HomePageBanner />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <img src={homeaboutimg} alt="homeaboutimg" />
            <div>
              <h1 className="main-title leading-tight">
                Welcome to IntueraAi Solution
              </h1>
              <p className="desc mt-4">
                In a reality where technology evolves at light speed, IntueraAi
                Solutions stands at the intersection of cosmic insight and
                cutting-edge innovation. By merging quantum-level thinking with
                AI-driven solutions, we transform visionary ideas into immersive
                digital experiences that transcend borders, dimensions, and
                industries. Whether you need a next-generation mobile app, an
                interstellar AR/VR environment, or an AI calling system that
                revolutionizes global communication, IntueraAi Solution is here
                to guide you on this journey across galaxies.
              </p>
            </div>
          </div>
        </section>
        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page={page} />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurStory />
            <UnlockEfficiency />
            <Faq />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
