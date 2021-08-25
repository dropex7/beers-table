import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sliders from "./Sliders/Sliders";
import FilterInputs from "./FilterInputs/FilterInputs";
import Pagination from "./Pagination/Pagination";
import DateFilters from "./DateFilters/DateFilters";
import createNewArrayOfObjects from "../../utils/createNewArrayOfObjects";
import convertFiltersToParams from "../../utils/convertFiltersToParams";

const useStyles = makeStyles({
  filtersContainer: {
    height: "80vh",
  },
});

export default function Filters(props) {
  const classes = useStyles();
  const [beforeDate, setBeforeDate] = React.useState(new Date());
  const [afterDate, setAfterDate] = React.useState(new Date(2007, 3));
  const [sliderElements, setSliderElements] = React.useState([
    {
      name: "abv",
      title: "Alcohol by Volume",
      value: [0, 60],
      max: 60,
      step: 5,
    },
    {
      name: "ibu",
      title: "International Bitterness Unit",
      value: [0, 1200],
      max: 1200,
      step: 100,
    },
    {
      name: "ebc",
      title: "European Brewing Convention",
      value: [0, 600],
      max: 600,
      step: 50,
    },
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
    props.submitFilters(
      convertFiltersToParams(
        sliderElements,
        filterInputs,
        beforeDate,
        afterDate
      )
    );
  }

  return (
    <Grid container direction="row" className={classes.filtersContainer}>
      <Grid item xs={12}>
        <Typography>
          <i>Page:</i> <b>{props.pageNumber}</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Pagination
          onChangePageSize={props.onChangePageSize}
          onChangePageNumber={props.onChangePageNumber}
          pageSize={props.pageSize}
          pageNumber={props.pageNumber}
          isNextPageExists={props.isNextPageExists}
          onChangeNextPageExists={props.onChangeNextPageExists}
        ></Pagination>
      </Grid>
      <Grid item xs={12}>
        <DateFilters
          beforeDate={beforeDate}
          afterDate={afterDate}
          handleChangeBeforeDate={setBeforeDate}
          handleChangeAfterDate={setAfterDate}
        />
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
