import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  filterInputTextField: {
    marginBottom: "10px",
  },
});

const FilterInputComponent = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <TextField
          id="standard-search"
          className={classes.filterInputTextField}
          variant="outlined"
          label={`Type ${props.filterInput.name}...`}
          type="search"
          value={props.filterInput.value}
          onChange={(event) =>
            props.setValue(event.target.value, props.filterInput.name)
          }
        />
      </Grid>
    </div>
  );
};

export default FilterInputComponent;
