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
      duration: 0.7,
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
const childVariants = {
  initial: {
    opacity: 0,
    x: "1vh",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      ease: "easeOut",
      duration: 1,
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
      variants={AboutVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="about"
    >
      <div className="about__wrapper ">
        <div className="about__wrapper__img">
          <img src="/images/ftu.jpg" alt="" />
        </div>
        <motion.div variants={childVariants} className="about__wrapper__desc">
          <h1>About</h1>
          <h2>afsane mahdavid</h2>
          <h4>desiner | jeweller</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi aut, temporibus labore voluptate nulla porro ipsam unde dolorum
            magnam odit expedita error fugiat quo deserunt dolor. Dolor, at
            accusamus.
          </p>
          <a className="btn about__wrapper__desc__resume ">Download Resume</a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
