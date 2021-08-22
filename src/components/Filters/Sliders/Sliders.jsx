import React from "react";
import SliderComponent from "./SliderComponent";

export default function Sliders(props) {
  return (
    <div>
      {props.sliderElements.map((sliderEl) => {
        return (
          <SliderComponent
            name={sliderEl.name}
            value={sliderEl.value}
            max={sliderEl.max}
            step={sliderEl.step}
            setValue={props.handleChangeSlider}
            valueText={(value) => value}
          />
        );
      })}
    </div>
  );
}
