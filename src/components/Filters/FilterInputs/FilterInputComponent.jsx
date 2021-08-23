import React from "react";
import { TextField, Grid } from "@material-ui/core";

const FilterInputComponent = (props) => {
  return (
    <div>
      <Grid item>
        <TextField
          id="standard-search"
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
