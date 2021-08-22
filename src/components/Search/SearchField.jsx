import React from "react";
// import { TextField, InputAdornment } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";

export default function SearchField(props) {
  return (
    <div>
      <DebounceInput
        minLength={0}
        debounceTimeout={300}
        onChange={(event) => props.onFilterData(event.target.value)}
      />
      <h2>{props.searchField}</h2>
    </div>
  );
}
