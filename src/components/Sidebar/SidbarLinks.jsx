import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const liVariants = {
  hover: {
    letterSpacing: "14px",

    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const SidbarLinks = ({ name }) => {
  return (
    <motion.li variants={liVariants} whileHover="hover">
      <Link to={name}>{name}</Link>
    </motion.li>
  );
};

export default SidbarLinks;
