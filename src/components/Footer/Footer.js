import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "250px",
    color: "white",
    lineHeight: "0px",
  },
  gridItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center top",
    alignItems: "center",
  },
  buttonGridContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "400px",
    paddingBottom: "30px",
  },
  footerButton: {
    width: "60px",
    height: "60px",
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
  },
  backToTopButton: {
    width: "60px",
    height: "60px",
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    position: "relative",
    bottom: "30px",
  },
  footerButtonImage: {
    width: "60%",
    heigh: "60%",
  },
  backToTopButtonImage: {
    width: "60%",
    heigh: "60%",
    transform: "rotate(270deg)",
  },
  infoText: {
    textAlign: "center",
    justifyContent: "center",
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
      <Grid item xs={12} className={classes.gridItemContainer}>
        <a href="#">
          <motion.div
            className={(classes.footerButton, classes.backToTopButton)}
            style={{ backgroundColor: color.primary }}
            whileHover={{
              scale: 1.2,
            }}
          >
            <img
              className={
                (classes.footerButtonImage, classes.backToTopButtonImage)
              }
              src="./images/up-arrow.png"
              alt="Up Arrow"
            />
          </motion.div>
        </a>
      </Grid>

      <Grid item xs={12} className={classes.gridItemContainer}>
        <Grid container className={classes.buttonGridContainer}>
          <Grid item xs={3} className={classes.gridItemContainer}>
            <a
              href="https://www.linkedin.com/in/luke-treece-43a54817b/"
              target="_blank"
            >
              <motion.div
                className={classes.footerButton}
                style={{ backgroundColor: color.primary }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <img
                  className={classes.footerButtonImage}
                  src="./images/linkedin.png"
                  alt="Up Arrow"
                />
              </motion.div>
            </a>
          </Grid>
          <Grid item xs={3} className={classes.gridItemContainer}>
            <a href="https://github.com/ltreece555" target="_blank">
              <motion.div
                className={classes.footerButton}
                style={{ backgroundColor: color.primary }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <img
                  className={classes.footerButtonImage}
                  src="./images/github.png"
                  alt="Up Arrow"
                />
              </motion.div>
            </a>
          </Grid>
          <Grid item xs={3} className={classes.gridItemContainer}>
            <a href="https://twitter.com/LukeTreece5" target="_blank">
              <motion.div
                className={classes.footerButton}
                style={{ backgroundColor: color.primary }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <img
                  className={classes.footerButtonImage}
                  src="./images/twitter.png"
                  alt="Up Arrow"
                />
              </motion.div>
            </a>
          </Grid>
          <Grid item xs={3} className={classes.gridItemContainer}>
            <a href="https://www.facebook.com/luke.treece.33" target="_blank">
              <motion.div
                className={classes.footerButton}
                style={{ backgroundColor: color.primary }}
                whileHover={{
                  scale: 1.2,
                }}
              >
                <img
                  className={classes.footerButtonImage}
                  src="./images/facebook.png"
                  alt="Up Arrow"
                />
              </motion.div>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.gridItemContainer}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <p className={classes.infoText}>Luke Treece &copy;</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={classes.infoText}>luke.treece@gmail.com</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={classes.infoText}>1(870) 761-9236</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
