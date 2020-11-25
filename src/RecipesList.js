import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const RecipeList = () => {
  // const APP_ID = process.env.REACT_APP_APP_ID;
  // const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = "1ba17caa";
  const APP_KEY = "54011f1a74ecf1bdf523405a0d100715";

  const {
    recipes: [recipes, setRecipes],
  } = useAppContext();

  const [quantity, setQuantity] = useState(["9"]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=fish&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${quantity}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  useEffect(() => {
    console.log("RecipeList - Effect has been run!");
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div className="recipeContainer">
      {recipes.map((recipe) => (
        <Link key={recipe.recipe.label} to={`/recipes/${recipe.recipe.label}`}>
          <Recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            label={recipe.recipe.dietLabels[0]}
            link={recipe.recipe.url}
            key={recipe.recipe.label}
          />
        </Link>
      ))}
      <div className="loadmore-div">
        <button
          type="submit"
          className="load-more-button"
          onClick={() => {
            setQuantity(parseInt(quantity) + 9);
          }}
        >
          🔽 Më shumë receta 🔽
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
