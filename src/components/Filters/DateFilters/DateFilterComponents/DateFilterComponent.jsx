import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

const DateFilterComponent = ({
  title,
  date,
  maxDate,
  minDate,
  handleChangeDate,
}) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ height: "30px" }}
      >
        <Grid item xs={6}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            onChange={handleChangeDate}
            format="MM-yyyy"
            disableCalendar={true}
            clearIcon={null}
            value={date}
            maxDate={maxDate}
            minDate={minDate}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DateFilterComponent;
