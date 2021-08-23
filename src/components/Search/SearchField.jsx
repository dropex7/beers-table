import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";

export default function SearchField(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          className="{classes.search}"
        >
          <Typography className="" variant="h5" noWrap>
            Beer Menu
          </Typography>

          <DebounceInput
            minLength={0}
            debounceTimeout={300}
            onChange={(event) => props.onFilterData(event.target.value)}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
