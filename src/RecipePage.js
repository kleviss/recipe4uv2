import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

const RecipePage = ({ match }) => {
  // const APP_ID = process.env.REACT_APP_APP_ID;
  // const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = "1ba17caa";
  const APP_KEY = "54011f1a74ecf1bdf523405a0d100715";

  const [recipe, setRecipe] = useState([]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${match.params.id}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=1`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
  };

  useEffect(() => {
    console.log("RecipePage- Effect has been run!");
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="recipeContainer">
      <h1>{match.params.id}</h1>
      <div className="ab-2">
        {recipe.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            label={recipe.recipe.dietLabels[0]}
            link={recipe.recipe.url}
            key={recipe.recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
