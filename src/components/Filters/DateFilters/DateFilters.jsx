import React from "react";
import { Grid, Divider } from "@material-ui/core";
import DateFilterComponent from "./DateFilterComponents/DateFilterComponent";

const DateFilters = () => {
  const [beforeDate, setBeforeDate] = React.useState(new Date());
  const [afterDate, setAfterDate] = React.useState(new Date());
  console.log(beforeDate);
  console.log(afterDate);

  return (
    <Grid container direction="column">
      <Divider style={{ marginBottom: "5px" }} />
      <DateFilterComponent
        date={beforeDate}
        title="Brewed before"
        handleChangeDate={setBeforeDate}
      />
      <DateFilterComponent
        date={afterDate}
        title="Brewed after"
        handleChangeDate={setAfterDate}
      />
      <Divider style={{ marginTop: "5px" }} />
    </Grid>
  );
};

export default DateFilters;
