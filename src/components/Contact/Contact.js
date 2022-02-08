import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import SectionHeader from "../Other/SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    color: ({ mutedDark }) => mutedDark,
    overflow: "auto",
    paddingTop: "75px",
    paddingBottom: "75px",
  },
  sectionTitleText: {
    marginTop: "0px",
    fontFamily: "IntegralCF, sans-serif",
    fontSize: "1.5em",
    lineHeight: "1em",
    fontWeight: "900",
    letterSpacing: "1px",
    textAlign: "center",
  },
  sectionTitleDivider: {
    width: "50px",
    height: "3px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "75px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  infoField: {
    color: ({ mutedDark }) => mutedDark,
    backgroundColor: ({ mutedLight }) => mutedLight,
    width: "80vw",
    maxWidth: "450px",
    fontFamily: "Sofia Pro, sans-serif",
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: "300",
    border: "none",
    margin: "5px",
    padding: "10px",
  },
  messageField: {
    color: ({ mutedDark }) => mutedDark,
    backgroundColor: ({ mutedLight }) => mutedLight,
    width: "80vw",
    maxWidth: "450px",
    fontFamily: "Sofia Pro, sans-serif",
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: "300",
    resize: "none",
    border: "none",
    margin: "5px",
    padding: "10px",
  },
  // style={{ borderColor: color.accent, color: color.accent }}
  // whileHover={{
  //   color: color.mutedLight,
  //   backgroundColor: color.accent,
  // }}
  submitButton: {
    color: ({ accent }) => accent,
    borderColor: ({ accent }) => accent,
    transition: ".5s",
    "&:hover": {
      color: ({ mutedLight }) => mutedLight,
      backgroundColor: ({ accent }) => accent,
    },
    width: "125px",
    height: "50px",
    fontFamily: "Sofia Pro, sans-serif",
    fontSize: "16px",
    lineHeight: "27px",
    fontWeight: "300",
    backgroundColor: "white",
    border: "solid 3px",
    margin: "5px",
    cursor: "pointer",
  },
  submitButtonText: {
    margin: "0px",
  },
}));

const Contact = () => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  return (
    <div id="contact" className={classes.root}>
      <SectionHeader title="Contact" direction="left" />
      <form
        className={classes.form}
        action="https://formsubmit.co/luke.treece@gmail.com"
        method="POST"
        autoComplete="on"
      >
        <Fade up cascade>
          <input
            className={classes.infoField}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={classes.infoField}
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className={classes.messageField}
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="7"
          ></textarea>
        </Fade>
        <motion.button className={classes.submitButton}>
          <h3 className={classes.submitButtonText}>Submit</h3>
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
