import React from "react";
import BeerCard from "./BeerCard/BeerCard";
import { Grid } from "@material-ui/core";

export default function BeerList({ beers }) {
  return (
    <Grid container spacing={2}>
      {beers.map((beer) => {
        return (
          <Grid key={beer.id} container item xs={4}>
            <BeerCard beer={beer} />
          </Grid>
        );
      })}
    </Grid>
  );
}
