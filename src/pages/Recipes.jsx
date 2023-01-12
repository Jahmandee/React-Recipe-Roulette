import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Card from "../components/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import foodAnimation from "../lottie/food.json";
import loadingAnimation from "../lottie/loading.json";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "column",
    gap: "12px",
  },

  layout: {
    padding: "40px",
  },

  searchContainer: {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    marginBottom: "24px",
  },

  heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Quicksand, sans-serif",
  },

  h1: {
    margin: "0px",
  },

  lottie: {
    width: "500px",
  },

  cardContainer: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1400px",
  },

  link: {
    textDecoration: "none",
  },
};

function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const hasRecipes = recipes.length > 0;

  function handleOnChange(value) {
    setSearchTerm(value);
  }

  function searchRecipe() {
    setLoading(true);
    setRecipes([]);
    const endPoint = "https://api.edamam.com/search?";
    const params = new URLSearchParams({
      app_id: "46a2028d",
      app_key: process.env.REACT_APP_RECIPE_API_KEY,
      q: searchTerm,
    }).toString();

    // Combines the endpoint of the API (from the docs) with the parameters (authetication and options) needed.

    const apiCall = endPoint + params;

    // This is sending a GET request to the API to receive data

    fetch(apiCall)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setRecipes(data.hits);
        console.log(data.hits);
      });
  }

  return (
    <div style={styles.layout}>
      <div style={styles.container}>
        <div style={styles.heading}>
          <h1 style={styles.h1}>Recipe Search</h1>
          <p>Enter any recipe or ingredient to begin!</p>
        </div>
        <div style={styles.searchContainer}>
          <TextInput
            onChange={handleOnChange}
            label="Search"
            placeholder="Search your recipe"
          />
          <Button onClick={searchRecipe}>Enter</Button>
        </div>
        {loading && (
          <Lottie
            style={styles.lottie}
            animationData={loadingAnimation}
            loop={true}
          />
        )}
        {hasRecipes ? (
          <ul style={styles.cardContainer}>
            {recipes.map((recipe, index) => (
              <Link
                style={styles.link}
                to="recipe"
                state={{ recipe: recipe.recipe }}
              >
                <Card
                  key={index}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
              </Link>
            ))}
          </ul>
        ) : (
          !loading && (
            <Lottie
              style={styles.lottie}
              animationData={foodAnimation}
              loop={true}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Recipes;
