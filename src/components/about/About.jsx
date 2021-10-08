import React from "react";
import "./_about.scss";
import { motion } from "framer-motion";

const AboutVariants = {
  initial: {
    opacity: 0,
    y: "-1vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
  },
  exit: {
    y: "100vw",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="home"
      variants={AboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about"
    >
      About page
    </motion.div>
  );
};

export default About;
