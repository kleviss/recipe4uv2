import React, {useState, useEffect} from "react";
import './App.css';
import BarStyling from './old.module.css';
import Recipe from './Recipe.js';
import Footer from './Footer.js';

import './styles.css';

const App = () => {

    const APP_ID = "1ba17caa";
    const APP_KEY = "54011f1a74ecf1bdf523405a0d100715";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState([]);
    const [query, setQuery] = useState("chicken");

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    useEffect(() => {
        getRecipes();
        console.log("effect has been run");
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [query])
    
      console.log(recipes);

      const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      }
    
      const getQuery = e => {
        e.preventDefault();
        setQuery(search);
      }

      const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="navigationContainer">
            
            
            <div>
                <h1>receta reactive</h1>
            </div>
            <div>
                <form style={BarStyling} onSubmit={getQuery}>
                    <button type="button" className={BarStyling.themeButton} >😋</button>
                    <input type="text" style={BarStyling} value={search} onChange={updateSearch}/>
                    <button type="submit" className="search-button">Kërko</button>
                </form>
            </div>
            <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
        </div>

            <div className="recipeContainer">
                {recipes.map(recipe => (
                    <Recipe 
                        link={recipe.recipe.url}
                        img={recipe.recipe.image}
                        name={recipe.recipe.label}
                        label={recipe.recipe.dietLabels[0]}
                    />
                ))}
            </div>
            
            <Footer />
        </div>
    )
}



export default App;

