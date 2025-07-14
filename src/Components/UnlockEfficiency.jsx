import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Efficiency" />
        <h1 className="main-title w-fit">
          Empower Your Business with Our Digital Solutions
        </h1>
        <p className="desc text-center">
          At IntueraAi Solution, we deliver innovative app development,
          responsive web design, and user-centric UI/UX services. Our solutions
          help streamline operations, enhance customer engagement, and
          accelerate growth through tailored technology.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
