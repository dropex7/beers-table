import React from "react";
import { Grid, Typography, Slider } from "@material-ui/core";

export default function SliderComponent(props) {
  return (
    <Grid item>
      <Typography>{props.title}</Typography>
      <Slider
        value={props.value}
        onChange={(e, newValue) =>
          props.handleChangeSlider(newValue, props.name)
        }
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        getAriaValueText={props.valueText}
        marks
        step={props.step}
        min={0}
        max={props.max}
      />
    </Grid>
  );
}
