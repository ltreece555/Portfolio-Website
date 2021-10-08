import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import SkillsList from "./SkillsList";
import { useSelector } from "react-redux";
import SectionHeader from "../Other/SectionHeader";
//import { DstATopComposition } from "react-native-image-filter-kit";

const useStyles = makeStyles((theme) => ({
  root: {
    color: ({ mutedDark }) => mutedDark,
    paddingTop: "75px",
    paddingBottom: "75px",
    textAlign: "center",
  },
  aboutTenant: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  aboutTenantText: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  icon: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: ({ accent }) => accent,
  },
  iconImage: {
    margin: "auto",
  },
  profilePicture: {
    width: "60%",
    borderRadius: "50%",
    maxWidth: "300px",
  },
  profileText: {
    width: "90%",
  },
}));

const AboutMe = () => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  return (
    <div id="about" className={classes.root}>
      <SectionHeader title="About" direction="left" />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            <Grid item className={classes.aboutTenant} xs={6} md={3}>
              <Flip left>
                <div className={classes.icon}>
                  <img
                    className={classes.iconImage}
                    src="images/speedometer-64.png"
                    alt="Fast Icon"
                  />
                </div>
              </Flip>
              <Fade>
                <h3>Fast</h3>
                <p className={classes.aboutTenantText}>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </Fade>
            </Grid>

            <Grid item className={classes.aboutTenant} xs={6} md={3}>
              <Flip left>
                <div className={classes.icon}>
                  <img
                    className={classes.iconImage}
                    src="images/mobile-phone-8-64.png"
                    alt="Responsive Icon"
                  />
                </div>
              </Flip>
              <Fade>
                <h3>Responsive</h3>
                <p className={classes.aboutTenantText}>
                  My layouts will work on any device, big or small.
                </p>
              </Fade>
            </Grid>
            <Grid item className={classes.aboutTenant} xs={6} md={3}>
              <Flip left>
                <div className={classes.icon}>
                  <img
                    className={classes.iconImage}
                    src="images/lightbulb-2-64.png"
                    alt="Intuitive Icon"
                  />
                </div>
              </Flip>
              <Fade>
                <h3>Intuitive</h3>
                <p className={classes.aboutTenantText}>
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </Fade>
            </Grid>
            <Grid item className={classes.aboutTenant} xs={6} md={3}>
              <Flip left>
                <div className={classes.icon}>
                  <img
                    className={classes.iconImage}
                    src="images/rocket-64.png"
                    alt="Dynamic Icon"
                  />
                </div>
              </Flip>
              <Fade>
                <h3>Dynamic</h3>
                <p className={classes.aboutTenantText}>
                  Websites don't have to be static. I love making pages come to
                  life.
                </p>
              </Fade>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Fade left>
                <img
                  className={classes.profilePicture}
                  src="images/fun guy.png"
                  alt="My Face"
                />
                <h3>Hi, I'm Luke Treece.</h3>
                <p className={classes.profileText}>
                  I'm a Front-End Developer with a serious passion for UI
                  effects, animations, and creating intuitive, dynamic user
                  experiences.
                </p>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade right>
                <SkillsList />
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default AboutMe;
