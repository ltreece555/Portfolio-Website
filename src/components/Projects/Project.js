import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { whileStatement } from "@babel/types";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    position: "relative",
    height: "475px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  viewProject: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewProjectButton: {
    position: "middle",
    height: "50px",
    width: "150px",
    color: "white",
    fontFamily: "Sofia Pro, sans-serif",
    fontSize: "16px",
    lineHeight: "27px",
    border: "solid",
    borderColor: "white",
    borderWidth: "3px",
    //borderRadius: "25px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  viewProjectButtonText: {
    margin: "0",
  },
  infoContainer: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    margin: "0px",
  },
  text: {
    marginTop: "25px",
    marginBottom: "auto",
  },
  tech: {
    margin: "0",
  },
}));

const Project = ({ direction, title, text, tech, img }) => {
  const classes = useStyles();
  const color = useSelector((state) => state.colorPallete);

  const appear = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  };

  switch (direction) {
    case "right":
      return (
        <Fade left>
          <Grid
            container
            className={classes.container}
            style={{ backgroundColor: "white" }}
          >
            <Grid item className={classes.imageContainer} xs={6}>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  className={classes.viewProject}
                  style={{ backgroundColor: color.accent }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={appear}
                >
                  <motion.button
                    className={classes.viewProjectButton}
                    variants={appear}
                    style={{
                      backgroundColor: color.accent,
                    }}
                  >
                    <h3 className={classes.viewProjectButtonText}>
                      View Project
                    </h3>
                  </motion.button>
                </motion.div>
              </div>
            </Grid>
            <Grid item className={classes.infoContainer} xs={6}>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.text}>{text}</p>
              <p className={classes.tech}>
                <strong>Tech Used: </strong>
                {tech}
              </p>
            </Grid>
          </Grid>
        </Fade>
      );
      break;
    case "left":
      return (
        <Fade right>
          <Grid
            container
            className={classes.container}
            style={{ backgroundColor: "white" }}
          >
            <Grid item className={classes.infoContainer} xs={6}>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.text}>{text}</p>
              <p className={classes.tech}>
                <strong>Tech Used: </strong>
                {tech}
              </p>
            </Grid>
            <Grid item className={classes.imageContainer} xs={6}>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  className={classes.viewProject}
                  style={{ backgroundColor: color.accent }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={appear}
                >
                  <motion.button
                    className={classes.viewProjectButton}
                    variants={appear}
                    style={{
                      backgroundColor: color.accent,
                    }}
                  >
                    <h3 className={classes.viewProjectButtonText}>
                      View Project
                    </h3>
                  </motion.button>
                </motion.div>
              </div>
            </Grid>
          </Grid>
        </Fade>
      );
    default:
      return (
        <Fade left>
          <Grid
            container
            className={classes.container}
            style={{ backgroundColor: "white" }}
          >
            <Grid item className={classes.imageContainer} xs={6}>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${img})` }}
              >
                <motion.div
                  className={classes.viewProject}
                  style={{ backgroundColor: color.accent }}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={appear}
                >
                  <motion.button
                    className={classes.viewProjectButton}
                    variants={appear}
                    style={{
                      backgroundColor: color.accent,
                    }}
                  >
                    <h3 className={classes.viewProjectButtonText}>
                      View Project
                    </h3>
                  </motion.button>
                </motion.div>
              </div>
            </Grid>
            <Grid item className={classes.infoContainer} xs={6}>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.text}>{text}</p>
              <p className={classes.tech}>
                <strong>Tech Used: </strong>
                {tech}
              </p>
            </Grid>
          </Grid>
        </Fade>
      );
  }
};

export default Project;
