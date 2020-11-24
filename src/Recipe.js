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
      <a href={link} target="_blank" rel="noopener noreferrer">
        go to recipe
      </a>
    </div>
  );
};

export default Recipe;
