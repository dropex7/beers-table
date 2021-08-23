import React from "react";
import { Grid, Button, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  selectInput: {
    height: "40px",
    marginLeft: "5px",
  },
});

const Pagination = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <Button variant="contained" color="primary">
          Prev
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          variant="outlined"
          className={classes.selectInput}
          value={props.pageSize}
          onChange={(event) => props.onChangePageSize(event.target.value)}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        {props.pageSize}
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary">
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Pagination;
