import React, { useState } from "react";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import Fade from "react-reveal/Fade";
import { useSelector, useDispatch } from "react-redux";
import startUpLogo from "./logo.png";
import "./StartUp.css";

const StartUpScreen = () => {
  const [showLogo, setShowLogo] = useState(true);
  const startingUp = useSelector((state) => state.startUp);
  const color = useSelector((state) => state.colorPallete);
  const dispatch = useDispatch();

  setTimeout(() => {
    if (startingUp) {
      dispatch({ type: "STARTUP_FALSE" });
    }
  }, 4400);

  setTimeout(() => {
    setShowLogo(false);
  }, 1500);

  const containerWaveVariants = {
    start: {
      transition: {
        staggerChildren: 0.5,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const blockWaveVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "10%",
    },
  };

  const blockWaveTransition = {
    duration: 2,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  if (startingUp) {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={6000}
          classNames="shrink-container"
        >
          <motion.div className="bottomBlockContainer">
            <CSSTransition
              in={true}
              appear={true}
              timeout={6000}
              classNames="shrink-1"
            >
              <motion.div className="bottomBlock bottomBlock-1" />
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={6000}
              classNames="shrink-2"
            >
              <motion.div className="bottomBlock bottomBlock-2" />
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={6000}
              classNames="shrink-3"
            >
              <motion.div className="bottomBlock bottomBlock-3" />
            </CSSTransition>
          </motion.div>
        </CSSTransition>
        <Fade clear when={showLogo}>
          <img className="startUpLogo" src={startUpLogo} alt="logo" />
        </Fade>
      </>
    );
  } else {
    return (
      <>
        <motion.div
          className="bottomBlockContainer"
          variants={containerWaveVariants}
          initial="start"
          animate="end"
        >
          <motion.div
            className="bottomBlock bottomBlock-1"
            variants={blockWaveVariants}
            transition={blockWaveTransition}
          />
          <motion.div
            className="bottomBlock bottomBlock-2"
            variants={blockWaveVariants}
            transition={blockWaveTransition}
          >
            <Fade top>
              <a href="#about" className="call-to-action">
                <p
                  className="call-to-action-text"
                  style={{ color: color.mutedDark, marginBottom: "0px" }}
                >
                  Here's what I can do
                </p>
                <p
                  className="call-to-action-pointer"
                  style={{ color: color.mutedDark, marginTop: "5px" }}
                >
                  V
                </p>
              </a>
            </Fade>
          </motion.div>
          <motion.div
            className="bottomBlock bottomBlock-3"
            variants={blockWaveVariants}
            transition={blockWaveTransition}
          />
        </motion.div>
      </>
    );
  }
};

export default StartUpScreen;
