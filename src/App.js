import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar/NavBar.js";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "-webkit-fill-available",
    fontFamily: "Sofia Pro, sans-serif",
    // fontSize: "16px",
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "300",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      lineHeight: "27px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
}));

const noscroll = () => {
  window.scrollTo(0, 0);
};

const App = () => {
  const classes = useStyles();
  const startUp = useSelector((state) => state.startUp);
  //const mobile = useSelector((state) => state.mobile);
  //const dispatch = useDispatch();

  // const setMobile = () => {
  //   if (window.outerWidth > 700) {
  //     dispatch({ type: "MOBILE_FALSE", payload: false });
  //   } else {
  //     dispatch({ type: "MOBILE_TRUE", payload: true });
  //   }
  // };

  // Disable scroll only for startup animation
  if (startUp) {
    window.addEventListener("scroll", noscroll);
  } else {
    window.removeEventListener("scroll", noscroll);
    // Apply smooth-scrolling for nav bar buttons
    document.getElementsByTagName("HTML")[0].className += "smoothscroll";
  }

  //window.addEventListener("resize", setMobile);

  return (
    <div className={classes.root}>
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
