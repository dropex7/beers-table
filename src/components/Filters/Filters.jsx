import React from "react";
import { Grid, Button } from "@material-ui/core";
import Sliders from "./Sliders/Sliders";
import FilterInputs from "./FilterInputs/FilterInputs";
import {
  createNewArrayOfObjects,
  convertFiltersToParams,
} from "../../utils/utils";

export default function Filters(props) {
  const [sliderElements, setSliderElements] = React.useState([
    { name: "abv", value: [0, 60], max: 60, step: 5 },
    { name: "ibu", value: [0, 1200], max: 1200, step: 100 },
    { name: "ebc", value: [0, 600], max: 600, step: 50 },
  ]);

  const [filterInputs, setFilterInputs] = React.useState([
    { name: "yeast", value: "" },
    { name: "hops", value: "" },
    { name: "malt", value: "" },
    { name: "food", value: "" },
  ]);

  const handleChangeSlider = (value, sliderName) => {
    setSliderElements((prevState) =>
      createNewArrayOfObjects(prevState, value, sliderName)
    );
  };

  const handleChangeInput = (value, inputName) => {
    setFilterInputs((prevState) =>
      createNewArrayOfObjects(prevState, value, inputName)
    );
  };

  function submitFiltersWithParams() {
    props.submitFilters(convertFiltersToParams(sliderElements, filterInputs));
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Sliders
        sliderElements={sliderElements}
        handleChangeSlider={handleChangeSlider}
      />
      <FilterInputs
        filterInputs={filterInputs}
        handleChangeInput={handleChangeInput}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={submitFiltersWithParams}
      >
        Применить фильтры
      </Button>
    </Grid>
  );
}
