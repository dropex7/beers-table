import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchInput: {
    borderRadius: "10px",
    padding: "8px 15px",
    "&:focus": {
      outlineStyle: "none",
    },
  },
});

export default function SearchField(props) {
  const classes = useStyles();
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
            placeholder="Search..."
            className={classes.searchInput}
            minLength={0}
            debounceTimeout={300}
            onChange={(event) => props.onFilterData(event.target.value)}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
