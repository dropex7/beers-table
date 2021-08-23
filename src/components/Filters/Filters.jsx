import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sliders from "./Sliders/Sliders";
import FilterInputs from "./FilterInputs/FilterInputs";
import Pagination from "./../Pagination/Pagination";
import {
  createNewArrayOfObjects,
  convertFiltersToParams,
} from "../../utils/utils";

const useStyles = makeStyles({
  filtersContainer: {
    height: "70vh",
  },
});

export default function Filters(props) {
  const classes = useStyles();
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
    { name: "ids", value: "" },
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
    <Grid container direction="row" className={classes.filtersContainer}>
      <Grid item xs={12}>
        <Pagination
          onChangePageSize={props.onChangePageSize}
          onChangePageNumber={props.onChangePageNumber}
          pageSize={props.pageSize}
          pageNumber={props.pageNumber}
        ></Pagination>
      </Grid>
      <Grid item xs={12}>
        <Sliders
          sliderElements={sliderElements}
          handleChangeSlider={handleChangeSlider}
        />
      </Grid>
      <Grid item xs={12}>
        <FilterInputs
          filterInputs={filterInputs}
          handleChangeInput={handleChangeInput}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={submitFiltersWithParams}
        >
          Применить фильтры
        </Button>
      </Grid>
    </Grid>
  );
}
