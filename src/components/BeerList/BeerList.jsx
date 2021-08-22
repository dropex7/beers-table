import React from "react";
import BeerCard from "./BeerCard/BeerCard";
import "./BeerList.css";

export default function DataList(props) {
  return (
    <div className="data-list">
      {props.beers.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            imageUrl={beer.image_url}
            description={beer.description}
          />
        );
      })}
    </div>
  );
}
