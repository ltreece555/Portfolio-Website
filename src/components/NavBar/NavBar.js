import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import ColorPicker from "./ColorPicker";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Dropdown from "./Dropdown/Dropdown";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "none",
    background: "none",
    minHeight: "65px",
    lineHeight: "0px",
  },
  toolBar: {
    minHeight: "65px",
  },
  background: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "65px",
    zIndex: "-100",
  },
  appBarLogoContainer: {
    flexGrow: "1",
  },
  appBarLogo: {
    flexGrow: 1,
    width: "40px",
    margin: "5px",
  },
  appBarBtn: {
    textTransform: "none",
    color: "inherit",
  },
}));

const NavBar = () => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);
  const startUp = useSelector((state) => state.startUp);

  const theme = useTheme();
  const smallScreenUp = useMediaQuery(theme.breakpoints.up("sm"));

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
    if (smallScreenUp) {
      return (
        <AppBar id="appBar" className={classes.appBar} elevation={0}>
          <Fade top>
            <ToolBar className={classes.toolBar}>
              <div className={classes.appBarLogoContainer}>
                <a href="#">
                  <img
                    className={classes.appBarLogo}
                    src={"images/logo-white.png"}
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
    } else {
      return (
        <AppBar id="appBar" className={classes.appBar} elevation={0}>
          <Fade top>
            <ToolBar className={classes.toolBar}>
              <div className={classes.appBarLogoContainer}>
                <a href="#">
                  <img
                    className={classes.appBarLogo}
                    src={"images/logo-white.png"}
                    alt="Logo"
                  ></img>
                </a>
              </div>
              <Dropdown />
            </ToolBar>
          </Fade>
        </AppBar>
      );
    }
  } else {
    return null;
  }
};

export default NavBar;
