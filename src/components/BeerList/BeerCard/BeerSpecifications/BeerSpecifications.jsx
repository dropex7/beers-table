import React from "react";
import IngredientsCard from "./IngredientsCard/IngredientsCard";
import { Grid } from "@material-ui/core";

const BeerSpecifications = (props) => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={12}>
        <IngredientsCard title="Foods" ingredients={props.foods} />
      </Grid>
      <Grid item xs={12}>
        <IngredientsCard title="Malts" ingredients={props.ingredients.malt} />
      </Grid>
      <Grid item xs={12}>
        <IngredientsCard title="Hops" ingredients={props.ingredients.hops} />
      </Grid>
    </Grid>
  );
};

export default BeerSpecifications;
