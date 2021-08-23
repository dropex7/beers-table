import React from "react";
import IngredientsList from "./IngredientsList/IngredientsList";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ingredientsCard: {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "10px 0px",
    boxShadow: "4px 3px 20px -15px rgba(9, 8, 8, 1)",
  },
  ingredientsCardContent: {
    padding: "10px 7px",
  },
});

const IngredientsCard = (props) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.ingredientsCard}>
      <CardContent className={classes.ingredientsCardContent}>
        <Typography>
          <b>{props.title}: </b>
        </Typography>
        <Divider />
        <IngredientsList ingredients={props.ingredients} title={props.title} />
      </CardContent>
    </Card>
  );
};

export default IngredientsCard;
