import React from "react";
import { motion } from "framer-motion";
import "./_home.scss";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

const HomeVariants = {
  initial: {
    opacity: 0,
    y: "-1vh",
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.5,
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

const Home = () => {
  return (
    <motion.div
      className="home"
      variants={HomeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="home__content">
        <div className="home__content__img"></div>
        <motion.div variants={childVariants} className="home__content__text">
          <div className="home__content__text__title">
            <h1>AFSANE MAHDAVI</h1>
          </div>
          <div className="home__content__text__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              corporis eos corrupti itaque ex blanditiis cumque quas, reiciendis
            </p>
          </div>

          <div className="home__content__text__social">
            <FaFacebookF className="home__content__text__social__icon" />
            <RiInstagramFill className="home__content__text__social__icon" />
            <ImLinkedin2 className="home__content__text__social__icon" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
