import React from "react";
import SidbarLinks from "./SidbarLinks";
import "./_sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__wrapper__header">
        <h1>mefragh</h1>
      </div>
      <div className="sidebar__wrapper__menu">
        <ul>
          <SidbarLinks name="home" />
          <SidbarLinks name="about" />
          <SidbarLinks name="portfolio" />
          <SidbarLinks name="services" />
          <SidbarLinks name="contact" />
        </ul>
      </div>
      <div className="sidebar__wrapper__bot">Let Me Make your thought</div>
    </div>
  );
};

export default Sidebar;
