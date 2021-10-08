import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "200px",
    color: "white",
  },
  gridItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  backToTopButton: {
    width: "60px",
    height: "60px",
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
  },
  backToTopButtonImage: {
    width: "60%",
    heigh: "60%",
    transform: "rotate(270deg)",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const color = useSelector((state) => state.colorPallete);

  return (
    <Grid
      container
      className={classes.container}
      style={{ backgroundColor: color.accent }}
    >
      <Grid item xs={6} className={classes.gridItemContainer}>
        <p>luke.treece@gmail.com</p>
        <p>(870) 761-9236</p>
      </Grid>
      <Grid item xs={6} className={classes.gridItemContainer}>
        <a href="#">
          <motion.div
            className={classes.backToTopButton}
            style={{ backgroundColor: color.primary }}
            whileHover={{
              scale: 1.2,
            }}
          >
            <img
              className={classes.backToTopButtonImage}
              src="./images/up-arrow.png"
              alt="Up Arrow"
            />
          </motion.div>
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
