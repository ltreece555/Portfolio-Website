import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  skillContainer: {
    display: "flex",
    flexDirection: "horizontal",
    height: "27px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  languageContainer: {
    display: "flex",
    flexDirection: "horizontal",
    width: "30%",
    minWidth: "100px",
  },
  languageDisplay: {
    color: "white",
    backgroundColor: ({ accent }) => accent,
    fontWeight: "bold",
    width: "100%",
    justifyContent: "center",
  },
  languageDisplayText: {
    height: "100%",
    textAlign: "center",
    margin: "0px",
  },
  percentageContainer: {
    display: "flex",
    flexDirection: "horizontal",
    width: "100%",
  },
  percentageDisplayText: {
    margin: "0px",
    textAlign: "right",
    paddingRight: "10px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Skill = ({ language, percentage }) => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  return (
    <div className={classes.skillContainer}>
      <div className={classes.languageContainer}>
        <div className={classes.languageDisplay}>
          <p className={classes.languageDisplayText}>{language}</p>
        </div>
      </div>
      <div className={classes.percentageContainer}>
        <div
          style={{ width: `${percentage}%`, backgroundColor: color.primary }}
        ></div>
        <div
          className={classes.percentageDisplay}
          style={{
            width: `${100 - percentage}%`,
            backgroundColor: color.mutedLight,
          }}
        >
          <p className={classes.percentageDisplayText}>{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
