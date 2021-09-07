import React from "react";
import BeerDescription from "./BeerDescription";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BeerSpecifications from "./BeerSpecifications/BeerSpecifications";
import { DEFAULT_IMAGE_SRC } from "../../../constans/CONSTS";

const useStyles = makeStyles({
  Card: {
    padding: "10px 8px",
    width: "100%",
    boxShadow: "8px 5px 18px -4px rgba(63, 81, 181, 0.32)",
  },
  CardContent: {
    padding: "0",
  },
  CardImg: {
    height: "200px",
    marginRight: "10px",
  },
});

export default function BeerCard({ beer }) {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.Card}>
      <CardContent className={classes.CardContent}>
        <Grid container direction="row" alignItems="center" spacing={1}>
          <Grid item xs={5}>
            <img
              src={beer.image_url ? beer.image_url : DEFAULT_IMAGE_SRC}
              alt={beer.name}
              className={classes.CardImg}
            />
          </Grid>
          <Grid item xs={7}>
            <BeerDescription beer={beer} />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <BeerSpecifications
            foods={beer.food_pairing}
            ingredients={beer.ingredients}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
