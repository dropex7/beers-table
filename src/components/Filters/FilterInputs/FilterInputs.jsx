import React from "react";
import FilterInputComponent from "./FilterInputComponent";

export default function FilterInputs({ filterInputs, handleChangeInput }) {
  return (
    <div>
      {filterInputs.map((filterInput) => {
        return (
          <FilterInputComponent
            key={filterInput.name}
            filterInput={filterInput}
            setValue={handleChangeInput}
          />
        );
      })}
    </div>
  );
}
