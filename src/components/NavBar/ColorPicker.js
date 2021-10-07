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
  const [value, setValue] = useState("1");
  const color = useSelector((state) => state.colorPallete);
  const dispatch = useDispatch();

  const handleColorChange = (event) => {
    setValue(event.target.value);
    dispatch({ type: "COLOR", payload: event.target.value });
    if (window.scrollY < 650) {
      document.getElementById("appBar").style.background = "none";
    } else {
      document.getElementById("appBar").style.background = color.primary;
    }
  };

  return (
    <div className={classes.container}>
      <RadioGroup
        name="color-picker"
        className={classes.radioGroup}
        value={value}
        onChange={handleColorChange}
        style={{ flexDirection: "row" }}
      >
        <Radio
          className={classes.radioButton}
          value="1"
          style={{ color: blue[300] }}
        />
        <Radio
          className={classes.radioButton}
          value="2"
          style={{ color: red[300] }}
        />
        <Radio
          className={classes.radioButton}
          value="3"
          style={{ color: green[300] }}
        />
      </RadioGroup>
    </div>
  );
};

export default ColorPicker;
