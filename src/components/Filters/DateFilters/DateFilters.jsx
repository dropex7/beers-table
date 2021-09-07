import React from "react";
import { Grid, Divider } from "@material-ui/core";
import DateFilterComponent from "./DateFilterComponents/DateFilterComponent";

const DateFilters = ({
  beforeDate,
  afterDate,
  handleChangeBeforeDate,
  handleChangeAfterDate,
}) => {
  return (
    <Grid container direction="column">
      <Divider style={{ marginBottom: "5px" }} />
      <DateFilterComponent
        date={beforeDate}
        title="Brewed before"
        minDate={new Date(2007, 5)}
        maxDate={new Date()}
        handleChangeDate={handleChangeBeforeDate}
      />
      <DateFilterComponent
        date={afterDate}
        title="Brewed after"
        minDate={new Date(2007, 3)}
        maxDate={new Date(2016, 5)}
        handleChangeDate={handleChangeAfterDate}
      />
      <Divider style={{ marginTop: "5px" }} />
    </Grid>
  );
};

export default DateFilters;
