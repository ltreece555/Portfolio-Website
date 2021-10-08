import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Project from "./Project.js";
import SectionHeader from "../Other/SectionHeader.js";

const useStyles = makeStyles((theme) => ({
  root: {
    color: ({ mutedDark }) => mutedDark,
    backgroundColor: ({ mutedLight }) => mutedLight,
    height: "100%",
    paddingTop: "75px",
    paddingBottom: "75px",
  },
}));

const Projects = () => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  return (
    <div id="projects" className={classes.root}>
      <SectionHeader title="Projects" direction="right" />
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Project
                direction="right"
                title="Weather App"
                text="This app, powered by the AccuWeather Web-API, gives an 8 day forecast for the area of your choice in the form of a daily and hourly weather report as well as a temperature statistics chart."
                tech="React, Web-API, Chart.js"
                img="./images/Weather-App.JPG"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Project
                direction="left"
                title="Pokedex"
                text="This app integrates a Web-API to show a complete list of all Pokemon. The project also includes a search bar to only search for certain pokemon names."
                tech="React, Web-API, Material-UI"
                img="./images/Pokedex.jpg"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Project
                direction="right"
                title="Task Tracker"
                text="This smaller application exhibits an intuitive user experience and shows my comfortability with crafting custom components."
                tech="React"
                img="./images/Task-Tracker.JPG"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Project
                direction="left"
                title="Xbox Homepage Clone"
                text="This is an example of my ability to take a given design and recreate it from scratch."
                tech="HTML, CSS, JavaScript"
                img="./images/Xbox-Homepage.JPG"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Projects;
