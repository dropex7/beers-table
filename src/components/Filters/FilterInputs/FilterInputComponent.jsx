import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  filterInputTextField: {
    marginBottom: "10px",
  },
});

const FilterInputComponent = ({ filterInput, setValue }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <TextField
          id="standard-search"
          className={classes.filterInputTextField}
          variant="outlined"
          label={`Type ${filterInput.name}...`}
          type="search"
          value={filterInput.value}
          onChange={(event) => setValue(event.target.value, filterInput.name)}
        />
      </Grid>
    </div>
  );
};

export default FilterInputComponent;
