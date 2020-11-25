import React from "react";
import "./App.css";

const Recipe = ({ title, image, label, link }) => {
  return (
    <div className="sampleRecipe">
      <p>
        <strong>{title}</strong>
      </p>
      <img alt={link} src={image} />
      <p>
        <strong>Label: </strong>
        {!label ? "No Label" : label}
      </p>
      <p>
        <a href={link}>Go to recipe</a>
      </p>
    </div>
  );
};

export default Recipe;
