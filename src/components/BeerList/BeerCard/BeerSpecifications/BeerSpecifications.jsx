import React from "react";
import IngredientsCard from "./IngredientsCard/IngredientsCard";
import { Grid } from "@material-ui/core";

const BeerSpecifications = ({ foods, ingredients }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <IngredientsCard title="Foods" ingredients={foods} />
      </Grid>
      <Grid item xs={12}>
        <IngredientsCard title="Malts" ingredients={ingredients.malt} />
      </Grid>
      <Grid item xs={12}>
        <IngredientsCard title="Hops" ingredients={ingredients.hops} />
      </Grid>
    </Grid>
  );
};

export default BeerSpecifications;
