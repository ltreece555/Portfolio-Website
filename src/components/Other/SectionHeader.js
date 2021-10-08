import React from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
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
    backgroundColor: ({ mutedDark }) => mutedDark,
    width: "50px",
    height: "3px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "75px",
  },
}));

const SectionHeader = ({ title, direction }) => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  if (direction === "right") {
    return (
      <Fade right cascade>
        <h1 className={classes.sectionTitleText}>{title}</h1>
        <div className={classes.sectionTitleDivider} />
      </Fade>
    );
  } else {
    return (
      <Fade left cascade>
        <h1 className={classes.sectionTitleText}>{title}</h1>
        <div className={classes.sectionTitleDivider} />
      </Fade>
    );
  }
};

export default SectionHeader;
