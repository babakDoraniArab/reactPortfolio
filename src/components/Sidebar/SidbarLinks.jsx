import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const liVariants = {
  initial: {
    opacity: 0,
    x: "-1vh",
  },
  animate: {
    opacity: 1,
    x: "0vh",
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.5,
    },
  },
};

const SidbarLinks = ({ name }) => {
  return (
    <motion.li>
      <Link to={name}>{name}</Link>
    </motion.li>
  );
};

export default SidbarLinks;
