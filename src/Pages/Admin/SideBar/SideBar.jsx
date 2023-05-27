import React, { useState } from "react";
import "../SideBar/SideBar.css";
import { IoMdCloseCircle } from "react-icons/io";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  console.log(expanded, "expanded");
  return (
    <>
      <button
        className="bars"
        style={expanded ? { left: "0%" } : { left: "0%" }}
        onClick={() => setExpaned(true)}
      >
        <GiHamburgerMenu className="hamburger" />
      </button>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ``}
      >
        {/* logo */}
        <div className="logos d-flex " style={{ alignItems: "inherit" }}>
          <span className="lobster">Flood Warn.</span>
          <span className="close ml-3 mr-1" onClick={() => setExpaned(false)}>
            {" "}
            <IoMdCloseCircle className="lobster" />{" "}
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem actives" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link to={`/admin` + item?.link} className="aLink d-flex w-100">
                  <item.icon />
                  <span className="d-flex align-items-center  pl-4">
                    {item.heading}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
