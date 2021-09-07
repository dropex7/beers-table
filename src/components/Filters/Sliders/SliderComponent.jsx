import React from "react";
import { Grid, Typography, Slider } from "@material-ui/core";

export default function SliderComponent({
  title,
  value,
  handleChangeSlider,
  name,
  valueText,
  step,
  max,
}) {
  return (
    <Grid item>
      <Typography>{title}</Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => handleChangeSlider(newValue, name)}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        marks
        step={step}
        min={0}
        max={max}
      />
    </Grid>
  );
}
