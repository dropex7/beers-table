import React from "react";
import SliderComponent from "./SliderComponent";

export default function Sliders(props) {
  return (
    <div>
      {props.sliderElements.map((sliderEl) => {
        return (
          <SliderComponent
            key={sliderEl.name}
            name={sliderEl.name}
            title={sliderEl.title}
            value={sliderEl.value}
            max={sliderEl.max}
            step={sliderEl.step}
            handleChangeSlider={props.handleChangeSlider}
            valueText={(value) => value}
          />
        );
      })}
    </div>
  );
}
