import React from "react";
import { Grid, Typography } from "@material-ui/core";

const BeerDescription = ({ beer }) => {
  const beerDescription = [
    { title: "", value: beer.name },
    { title: "ID", value: beer.id },
    { title: "Alcohol by Volume", value: beer.abv },
    { title: "IBU", value: beer.ibu },
    { title: "EBC", value: beer.ebc },
    { title: "Yeast", value: beer.ingredients.yeast },
  ];
  return (
    <Grid container direction="column" alignItems="flex-start">
      {beerDescription.map((desc) => {
        return desc.title ? (
          <Grid key={desc.title} item xs={12} zeroMinWidth>
            <Typography variant="body2">
              <b>{desc.title}:</b>
              <i> {desc.value}</i>
            </Typography>
          </Grid>
        ) : (
          <Grid key={desc.title} item xs={12} zeroMinWidth>
            <Typography variant="h6">
              <i>{desc.value}</i>
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BeerDescription;
