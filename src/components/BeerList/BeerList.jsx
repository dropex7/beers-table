import React from "react";
import BeerCard from "./BeerCard/BeerCard";
import { Grid } from "@material-ui/core";
// import { useStyles } from "@material-ui/core/styles";

// const makeStyles = useStyles({

// })

export default function BeerList(props) {
  return (
    <Grid container spacing={2} fixed>
      {props.beers.map((beer) => {
        return (
          <Grid key={beer.id} container item xs={4}>
            <BeerCard beer={beer} />
          </Grid>
        );
      })}
    </Grid>
  );
}
