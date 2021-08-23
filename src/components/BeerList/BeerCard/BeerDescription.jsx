import React from "react";
import { Grid, Typography } from "@material-ui/core";

const BeerDescription = (props) => {
  const beerDescription = [
    { title: "", value: props.beer.name },
    { title: "Alcohol by Volume", value: props.beer.abv },
    { title: "IBU", value: props.beer.ibu },
    { title: "EBC", value: props.beer.ebc },
    { title: "Yeast", value: props.beer.ingredients.yeast },
  ];
  return (
    <Grid container direction="column" alignItems="flex-start">
      {beerDescription.map((desc) => {
        return desc.title ? (
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="body2">
              <b>{desc.title}:</b>
              <i> {desc.value}</i>
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="h5">
              <b>{desc.value}</b>
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BeerDescription;
