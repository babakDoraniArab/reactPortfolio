import React from "react";
import { Link } from "react-router-dom";

const SidbarLinks = ({ name }) => {
  return (
    <li>
      <Link to={name}>{name}</Link>
    </li>
  );
};

export default SidbarLinks;
