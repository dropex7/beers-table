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

const IngredientsList = ({ ingredients, title }) => {
  const classes = useStyles();
  return (
    <List dense={true} className={classes.cardList}>
      {ingredients.map((ingredient, index) => {
        return (
          <div
            className={classes.cardListItemContainer}
            key={title + ingredient.name + index}
          >
            <ListItem
              alignItems="flex-start"
              className={classes.ingredientsCardListElement}
            >
              <ListItemText
                className={classes.cardText}
                primary={title === "Foods" ? ingredient : ingredient.name}
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
