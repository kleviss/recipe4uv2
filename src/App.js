/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Recipe from './Recipe.js';
import BarStyling from './search-bar.module.css';
import ThemeStyle from "./dark.module.css";
import AppStyle from "./app.module.css";


const App = () => {

  const APP_ID = "1ba17caa";
  const APP_KEY = "54011f1a74ecf1bdf523405a0d100715";

  const [isDark, setDark] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("chicken");

  const changeDark = () => {
    setDark(!isDark);
    console.log("is Dark? " + !isDark);
  }

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
  }

  useEffect(() => {
    getRecipes();
    console.log("effect has been run");
  }, [query])
  
  return (
    <div className={isDark ? AppStyle.App : ThemeStyle.App}>
      <header>
        <h1>recipe4u</h1>
        <form style={BarStyling} onSubmit={getQuery}>
          <input type="text" style={BarStyling} value={search} onChange={updateSearch} />
          <button type="submit" className="search-button">Search</button>
        </form>
        <button style={BarStyling} onClick={() => {
          changeDark();
        }}>💡</button>
      </header>
      <body className="body-recipe">
      {recipes.map(recipe => (
        <Recipe key = {recipe.url} link={recipe.recipe.url} title={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.dietLabels}/>
      ))}
      </body>
      <footer>
        <p>🍴 ha qyl 😋</p>
      </footer>
    </div>
  );
}

export default App;
