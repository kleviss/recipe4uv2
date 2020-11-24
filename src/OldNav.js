import React from "react";
import "./App.css";

const Navigation = () => {
  return (
    <div className="navigationContainer">
      <div className="logo">
        <h1>receta reactive</h1>
      </div>
      <div className="search-form">
        <form>
          <input type="text" placeholder="Search recipes" />
          <button type="submit">Kërko</button>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
