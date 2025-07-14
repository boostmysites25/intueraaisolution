import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import LeadForm from "../Components/landingpage/LeadForm";
const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img
            data-aos="fade-right"
            src={homeaboutimg}
            alt="IntueraAi Solution"
          />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to IntueraAi Solution
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              At IntueraAi Solution, we specialize in crafting innovative
              digital solutions that drive business success. Our expertise spans
              app development, responsive web development, and user-centric
              UI/UX design. Whether you're launching a startup MVP or scaling an
              enterprise-grade product, we combine strategic planning,
              cutting-edge technology, and creative design to bring your ideas
              to life and accelerate growth.
            </p>
          </div>
        </div>
      </section>
      <div className="wrapper bg-transparent dark:bg-gradient-to-b from-primary/50 to-black/50  backdrop-blur-md rounded-xl w-fit mx-auto">
        <LeadForm />
      </div>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Innovative Digital Solutions Tailored for Your Success
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            At IntueraAi Solution, we specialize in app development, web
            development, and UI/UX design, delivering custom digital products
            that drive business growth and user engagement. Partner with us to
            transform your ideas into scalable, user-friendly experiences.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <div className="wrapper bg-transparent dark:bg-gradient-to-b from-primary/50 to-black/50 backdrop-blur-md rounded-xl w-fit mx-auto">
            <LeadForm />
          </div>
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
