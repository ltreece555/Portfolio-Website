import React from "react";
import { makeStyles } from "@material-ui/core";
import "./Dropdown.css";
import { useSelector } from "react-redux";
import ColorPicker from "../ColorPicker";

const useStyles = makeStyles((theme) => ({
  appBarLogo: {
    width: "50px",
  },
}));

const Dropdown = () => {
  const classes = useStyles();
  const color = useSelector((state) => state.colorPallete);
  const mobile = useSelector((state) => state.mobile);

  return (
    <nav style={{ backgroundColor: "none" }}>
      <label for="drop" class="toggle" id="main-toggle">
        <span class="nav-icon"></span>
      </label>
      <img
        className={classes.appBarLogo}
        src={"images/logo.png"}
        alt="Logo"
      ></img>
      <ColorPicker />
      <input type="checkbox" id="drop" />
      <ul class="menu">
        {mobile ? (
          <>
            <li style={{ backgroundColor: color.accent }}>
              <a href="#about">About</a>
            </li>
            <li style={{ backgroundColor: color.primary }}>
              <a href="#projects">Projects</a>
            </li>
            <li style={{ backgroundColor: color.accent }}>
              <a href="#contact">Contact</a>
            </li>
          </>
        ) : (
          <>
            <li style={{ backgroundColor: "none" }}>
              <a href="#about">About</a>
            </li>
            <li style={{ backgroundColor: "none" }}>
              <a href="#projects">Projects</a>
            </li>
            <li style={{ backgroundColor: "none" }}>
              <a href="#contact">Contact</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Dropdown;
