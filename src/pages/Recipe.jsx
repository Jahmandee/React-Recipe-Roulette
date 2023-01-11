import React from "react";
import { useLocation } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "column",
    gap: "12px",
  },

  image: {
    width: "250px",
  },
};

function Recipe() {
  const location = useLocation();
  console.log("location:", location);
  const recipe = location.state.recipe;
  console.log(recipe.ingredientLines);

  return (
    <div style={styles.container}>
      <h1>{recipe.label}</h1>
      <img style={styles.image} src={recipe.image} />
      <ul>
        <h3>Ingredients</h3>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <a target="_blank" href={recipe.url}>
        Find the full recipe here
      </a>
    </div>
  );
}

export default Recipe;
