import React, { useEffect, useState } from "react";
import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const HomePageBanner = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  const navigateTo = (link) => {
    navigate(link);
  };

  const headingText = "Vision Beyond Reality";
  const paragraphText =
    "Where Cosmic Innovation Meets Quantum-Level Intelligence";

  useEffect(() => {
    setIsVisible(true);

    // Sequence animations
    const sequenceAnimations = async () => {
      await controls.start("visible");
      await controls.start({ y: 0, opacity: 1, transition: { delay: 0.2 } });
    };

    sequenceAnimations();
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 12,
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative w-full bg-[#060b19] sm:min-h-screen overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-black/40 z-10" />

      {/* Background Video */}
      <ReactPlayer
        url={bannervideo}
        loop={true}
        playsinline
        playing={true}
        width="100%"
        height="100vh"
        muted
        className="object-cover videoplayer"
        config={{
          file: {
            attributes: {
              style: {
                objectFit: "cover",
                width: "100vw",
                height: "100vh",
              },
            },
          },
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute flex flex-col items-center justify-center left-0 top-0 w-full h-full pt-[7rem] z-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Heading */}
        <motion.h1
          className="sm:text-6xl text-3xl font-bold font-mono text-center text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          {headingText.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="flex flex-col gap-8 pb-5 max-w-2xl px-4"
          variants={containerVariants}
        >
          {/* Animated Paragraph */}
          <motion.p
            className="font-medium font-mono text-lg sm:text-2xl text-white text-center leading-relaxed"
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: headingText.length * 0.05 + 0.3,
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            {paragraphText}
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: headingText.length * 0.05 + 0.6 },
            }}
          >
            <motion.button
              onClick={() => navigateTo("/about-us")}
              className="primary-btn relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Get Started</span>
              <motion.span
                className="absolute inset-0 bg-white/10 group-hover:bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>

            <motion.button
              onClick={() => navigateTo("/contact-us")}
              className="secondary-btn-white relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Contact Us</span>
              <motion.span
                className="absolute inset-0 bg-black/10 group-hover:bg-black/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating particles/dots for added effect */}
        <AnimatePresence>
          {isVisible && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/20 pointer-events-none"
                  initial={{
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    width: Math.random() * 10 + 2,
                    height: Math.random() * 10 + 2,
                  }}
                  animate={{
                    opacity: [0, 0.5, 0],
                    y: [0, Math.random() * 100 - 50],
                    transition: {
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 5,
                    },
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePageBanner;
