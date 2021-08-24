import React from "react";
import { Grid, Typography } from "@material-ui/core";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";

const DateFilterComponent = (props) => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6}>
          <Typography>{props.title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            onChange={props.handleChangeDate}
            format="MM-yyyy"
            disableCalendar={true}
            value={props.date}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DateFilterComponent;
