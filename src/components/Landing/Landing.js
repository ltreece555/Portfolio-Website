import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import iconLinkedIn from "./link icons/linkedin.png";
import iconTwitter from "./link icons/twitter.png";
import iconGitHub from "./link icons/github.png";
import Grid from "@material-ui/core/Grid";
import StartUp from "../StartUp/StartUp";
import SpinningLogo from "./SpinningLogo/Scene";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    height: "100vh",
    overflow: "hidden",
  },
  body: {
    marginTop: "100px",
    [theme.breakpoints.up("lg")]: {
      marginTop: "150px",
    },
  },
  mainText: {
    textAlign: "center",
    fontFamily: "IntegralCF, sans-serif",
    fontWeight: "900",
    letterSpacing: "1px",
    fontSize: "8vw",
    lineHeight: "8vw",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      fontSize: "4vw",
      lineHeight: "4vw",
    },
    marginTop: "0",
    marginBottom: "4vh",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
    },
  },
  icons: {
    justifyContent: "center",
    marginBottom: "25px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "left",
    },
  },
  icon: {
    height: "25px",
    width: "25px",
    marginRight: "1vw",
    marginLeft: "1vw",
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0",
      marginRight: "1vw",
      marginLeft: "0vw",
    },
  },
  secondaryText: {
    textAlign: "center",
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "300",
    margin: "0",
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
    },
  },
  canvasContainer: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "20rem",
    },
    [theme.breakpoints.up("lg")]: {
      height: "40rem",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const color = useSelector((state) => state.colorPallete);

  return (
    <div
      className={classes.root}
      style={{
        background:
          "linear-gradient(" + color.accent + "," + color.primary + ")",
      }}
    >
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.body}>
            <Grid item xs={12} lg={6}>
              <p className={classes.mainText}>
                FRONT-END WEB DEVELOPER & DESIGNER
              </p>
              <div className={classes.flexContainer}>
                <div>
                  <div className={classes.icons}>
                    <a
                      href="https://www.linkedin.com/in/luke-treece-43a54817b/"
                      target="_blank"
                    >
                      <img
                        className={classes.icon}
                        src={iconLinkedIn}
                        alt="LinkedIn"
                      />
                    </a>
                    <a href="https://github.com/ltreece555" target="_blank">
                      <img
                        className={classes.icon}
                        src={iconGitHub}
                        alt="GitHub"
                      />
                    </a>
                    <a href="https://twitter.com/LukeTreece5" target="_blank">
                      <img
                        className={classes.icon}
                        src={iconTwitter}
                        alt="Twitter"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <p className={classes.secondaryText}>
                    Helping you achieve high quality websites with exceptional
                    user experience
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} className={classes.canvasContainer}>
              <SpinningLogo />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <StartUp />
    </div>
  );
};

export default LandingPage;
