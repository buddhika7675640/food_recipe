import React from "react";
import "./recipeTile.css";
// import { v4 as uuidv4 } from "uuid";

export default function recipeTile({ recipe }) {
  return (
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (

    // )

    <div
      className="recipeTile"
      onClick={() => window.open(recipe["recipe"]["url"])}
    >
      <img
        alt={recipe["recipe"]["label"]}
        className="recipeTile__img"
        src={recipe["recipe"]["image"]}
      />
      <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
