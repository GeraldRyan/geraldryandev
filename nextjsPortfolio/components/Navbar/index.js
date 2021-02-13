import React from "react";
import Switch from "@material-ui/core/Switch";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import nav from './navbar.module.scss'

const Navbar = ({ dark, setDark }) => {
  function handleSwitch() {
    console.log("Dark", dark)
    setDark(!dark)
  }
  return (
    <div className={nav.navbar} id={nav.navbarElement}>
      <div className={nav.darkmode}>
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
