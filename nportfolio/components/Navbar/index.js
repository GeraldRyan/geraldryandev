import React from "react";
import Switch from "@material-ui/core/Switch";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import styles from "../../styles/Home.module.css";
import navstyles from './Navbar.module.css'

const Navbar = ({ dark, setDark }) => {
  function handleSwitch() {
    console.log("Dark", dark)
    setDark(!dark)
  }
  return (
    <div className={navstyles.navbar} id="top">
      <div className={navstyles.darkmode}>
        <div className="day-icon">
          <FiSun />
        </div>
        <div className="switch">
          <Switch setDark={setDark} dark={dark} onChange={handleSwitch} />
        </div>
        <div className="night-icon">
          <FiMoon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
