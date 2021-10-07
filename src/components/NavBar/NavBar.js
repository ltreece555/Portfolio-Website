import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import ColorPicker from "./ColorPicker";
import Dropdown from "./Dropdown/Dropdown";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none",
  },
  appBarLogoContainer: {
    flexGrow: "1",
  },
  appBarLogo: {
    flexGrow: 1,
    width: "50px",
  },
  appBarBtn: {
    textTransform: "none",
    color: "inherit",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const startUp = useSelector((state) => state.startUp);
  const color = useSelector((state) => state.colorPallete);

  const updateNavBar = () => {
    if (document.getElementById("appBar") != null) {
      if (window.scrollY < 650) {
        document.getElementById("appBar").style.background = "none";
      } else {
        document.getElementById("appBar").style.background = color.primary;
      }
    }
  };

  window.onload = () => {
    updateNavBar();
  };

  window.onchange = () => {
    updateNavBar();
  };

  window.onscroll = () => {
    updateNavBar();
  };

  if (!startUp) {
    return (
      <AppBar id="appBar" className={classes.appBar} elevation={0}>
        <Fade top>
          <ToolBar>
            <div className={classes.appBarLogoContainer}>
              <a href="#">
                <img
                  className={classes.appBarLogo}
                  src={"images/logo.png"}
                  alt="Logo"
                ></img>
              </a>
            </div>
            <ColorPicker />
            <Button href="#about" className={classes.appBarBtn}>
              ABOUT
            </Button>
            <Button href="#projects" className={classes.appBarBtn}>
              PROJECTS
            </Button>
            <Button href="#contact" className={classes.appBarBtn}>
              CONTACT
            </Button>
          </ToolBar>
        </Fade>
      </AppBar>
    );
  }
};

export default NavBar;
