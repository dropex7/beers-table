import React from "react";
import { Grid, OutlinedInput } from "@material-ui/core";

const FilterInputComponent = (props) => {
  return (
    <div>
      <Grid item>
        <OutlinedInput
          id="outlined-adornment-weight"
          value={props.filterInput.value}
          onChange={(event) =>
            props.setValue(event.target.value, props.filterInput.name)
          }
          aria-describedby="outlined-weight-helper-text"
          labelWidth={0}
        />
        {props.filterInput.value}
      </Grid>
    </div>
  );
};

export default FilterInputComponent;
