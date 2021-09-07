import React from "react";
import { Select, MenuItem, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const PaginationFooter = (props) => {
  function handeChangeSelectInput(value) {
    props.onChangePageNumber(1);
    props.onChangePageSize(value);
  }
  return (
    <Grid container>
      <Grid item xs={6}>
        <Pagination
          count={props.max_pages}
          page={props.pageNumber}
          onChange={(event, value) => props.onChangePageNumber(value)}
          variant="outlined"
          color="primary"
          shape="rounded"
          size="large"
        />
      </Grid>
      <Grid item xs={6}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.pageSize}
          onChange={(event) => handeChangeSelectInput(event.target.value)}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default PaginationFooter;
