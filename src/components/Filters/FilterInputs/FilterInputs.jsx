import React from "react";
import FilterInputComponent from "./FilterInputComponent";

export default function FilterInputs(props) {
  return (
    <div>
      {props.filterInputs.map((filterInput) => {
        return (
          <FilterInputComponent
            filterInput={filterInput}
            setValue={props.handleChangeInput}
          />
        );
      })}
    </div>
  );
}
