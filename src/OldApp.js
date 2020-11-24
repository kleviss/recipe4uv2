import React, { useState, useEffect } from "react";
import "./App.css";
import BarStyling from "./old.module.css";
import Footer from "./Footer.js";

import "./styles.css";
import RecipeList from "./RecipesList";

const App = () => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("chicken");

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const getInitialMode = () => {
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
  };

  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="navigationContainer">
        <div>
          <h1>receta reactive</h1>
        </div>
        <div>
          <form style={BarStyling} onSubmit={getQuery}>
            <button type="button" className={BarStyling.themeButton}>
              😋
            </button>
            <input
              type="text"
              style={BarStyling}
              value={search}
              onChange={updateSearch}
            />
            <button type="submit" className="search-button">
              Kërko
            </button>
          </form>
        </div>
        <nav>
          <div className="toggle-container">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <span className="toggle">
              <input
                checked={darkMode}
                onChange={() => setDarkMode((prevMode) => !prevMode)}
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
      <RecipeList />
      <Footer />
    </div>
  );
};

export default App;
