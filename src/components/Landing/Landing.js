import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import iconLinkedIn from "./link icons/linkedin.png";
import iconTwitter from "./link icons/twitter.png";
import iconGitHub from "./link icons/github.png";
import iconFacebook from "./link icons/facebook.png";
import Grid from "@material-ui/core/Grid";
import StartUp from "../StartUp/StartUp";
import SpinningLogo from "./SpinningLogo/Scene";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: "white",
    height: "100vh",
    //height: "50vh",
    height: props.mobileContainer.height,
    //height: "calc(100vh - calc(100vh - 100%))",
    //minHeight: "-webkit-fill-available",
    overflow: "hidden",
  }),
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
    // ["@media (max-width: 800px)"]: {
    //   fontSize: "32px",
    //   lineHeight: "32px",
    // },
    [theme.breakpoints.up("md")]: {
      fontSize: "6vw",
      lineHeight: "6vw",
    },
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
    ["@media (max-height: 350px)"]: {
      visibility: "hidden",
    },
  },
  canvasContainer: {
    width: "40vw",
    height: "25vh",
    [theme.breakpoints.up("sm")]: {
      height: "40vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "30vw",
    },
    ["@media (max-height: 550px)"]: {
      visibility: "hidden",
    },
  },
}));

const LandingPage = () => {
  const styleProps = {
    mobileContainer: {
      height: "100vh",
    },
  };
  const classes = useStyles(styleProps);
  const color = useSelector((state) => state.colorPallete);
  //const fullPageHeight = window.innerHeight;

  return (
    <div
      className={classes.root}
      style={{
        background:
          "linear-gradient(" + color.accent + "," + color.primary + ")",
        //height: fullPageHeight,
      }}
    >
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.body}>
            <Grid item xs={12} lg={6} className={classes.bodyItem}>
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
                    <a
                      href="https://www.facebook.com/luke.treece.33"
                      target="_blank"
                    >
                      <img
                        className={classes.icon}
                        src={iconFacebook}
                        alt="Facebook"
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
