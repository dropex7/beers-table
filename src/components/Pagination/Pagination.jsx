import React from "react";
import { Grid, Button, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  selectInput: {
    height: "30px",
  },
  paginationContainer: {
    marginBottom: "7px",
  },
});

const Pagination = (props) => {
  const classes = useStyles();

  const handleChangePageToPrev = () => {
    props.onChangePageNumber(props.pageNumber - 1);
    props.onChangeNextPageExists(true);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.paginationContainer}
    >
      <Grid item xs={4}>
        <Button
          disabled={props.pageNumber === 1}
          onClick={handleChangePageToPrev}
          variant="contained"
          color="primary"
          size="small"
        >
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
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={80}>80</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => props.onChangePageNumber(props.pageNumber + 1)}
          variant="contained"
          color="primary"
          size="small"
          disabled={!props.isNextPageExists}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Pagination;
