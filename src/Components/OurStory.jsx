import visionmissionimg from "../assets/images/visionmissionimg.png";
const OurStory = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] dark:text-white font-bold"
          >
            Transforming Ideas into Digital Realities
          </h3>
          <p className="desc mt-4" data-aos="fade-right">
            At IntueraAi Solution, we are dedicated to turning your visionary
            ideas into impactful digital solutions. Our team of experts combines
            app development, web development, and UI/UX design to empower
            businesses across industries. We leverage the latest technologies
            and strategic planning to drive growth, user engagement, and lasting
            success.
            <br />
            <br />
            Partner with us to create scalable, user-friendly digital
            experiences that propel your business forward in today's fast-paced
            world.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src={visionmissionimg}
          alt="IntueraAi Vision and Mission"
        />
      </div>
    </section>
  );
};

export default OurStory;
