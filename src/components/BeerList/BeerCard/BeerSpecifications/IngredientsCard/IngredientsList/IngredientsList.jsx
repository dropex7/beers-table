import React from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  ingredientsCardListElement: {
    alignItems: "center",
    justifyContent: "center",
    height: "80px",
  },
  cardListItemContainer: {
    width: "100%",
  },
  cardText: {
    fontSize: "13px",
  },
});

const IngredientsList = (props) => {
  const classes = useStyles();
  return (
    <List dense={true} className={classes.cardList}>
      {props.ingredients.map((ingredient) => {
        return (
          <div className={classes.cardListItemContainer}>
            <ListItem
              alignItems="flex-start"
              className={classes.ingredientsCardListElement}
            >
              <ListItemText
                className={classes.cardText}
                primary={props.title === "Foods" ? ingredient : ingredient.name}
              />
            </ListItem>
            <Divider variant="fullWidth" />
          </div>
        );
      })}
    </List>
  );
};

export default IngredientsList;
