import React from "react";
import SidbarLinks from "./SidbarLinks";
import "./_sidebar.scss";
import { motion } from "framer-motion";

const wrapperVariants = {
  initial: {
    opacity: 0,
    x: "-20vh",
  },
  animate: {
    opacity: 1,
    x: "0vh",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
  exit: {},
};
const childrenVariants = {
  initial: {
    opacity: 0,
    y: "-4vh",
  },
  animate: {
    opacity: 1,
    y: "0vh",
    transition: {
      delay: 1.5,
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
  exit: {},
};

const footerVariants = {
  initial: {
    opacity: 0,
    y: "+4vh",
  },
  animate: {
    opacity: 1,
    y: "0vh",
    transition: { delay: 1.5, ease: "easeOut", duration: 0.5 },
  },
  exit: {},
};
const Sidebar = () => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      className="sidebar__wrapper"
    >
      <div className="sidebar__wrapper__header">
        <motion.h1>mefragh</motion.h1>
      </div>
      <div className="sidebar__wrapper__menu">
        <motion.ul variants={childrenVariants}>
          <SidbarLinks name="home" />
          <SidbarLinks name="about" />
          <SidbarLinks name="portfolio" />
          <SidbarLinks name="services" />
          <SidbarLinks name="contact" />
        </motion.ul>
      </div>
      <motion.div variants={footerVariants} className="sidebar__wrapper__bot">
        Let Me Make your thought
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
