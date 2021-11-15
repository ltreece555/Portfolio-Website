import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RadioGroup } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { blue, red, green } from "@material-ui/core/colors";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    // height: "60px",
  },
  radioGroup: {
    // height: "100%",
    // width: "fit-content",
    // flexDirection: "row",
    // justifyContent: "right",
    // alignItems: "center",
  },
  radioButton: {
    height: "fill",
  },
}));

const ColorPicker = () => {
  const classes = useStyles();
  const color = useSelector((state) => state.colorPallete);
  const dispatch = useDispatch();

  const handleColorChange = (event) => {
    dispatch({ type: "COLOR", payload: event.target.value });
  };

  return (
    <div className={classes.container}>
      <RadioGroup
        name="color-picker"
        className={classes.radioGroup}
        defaultValue={color.id}
        onChange={handleColorChange}
        style={{ flexDirection: "row" }}
      >
        <Radio
          className={classes.radioButton}
          value="blue"
          style={{ color: blue[300] }}
        />
        <Radio
          className={classes.radioButton}
          value="red"
          style={{ color: red[300] }}
        />
        <Radio
          className={classes.radioButton}
          value="green"
          style={{ color: green[300] }}
        />
      </RadioGroup>
    </div>
  );
};

export default ColorPicker;
