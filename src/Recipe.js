import React from "react";
import './App.css';

const Recipe = ({name, label, img, link}) => {
    return(
        <div className="sampleRecipe">
            <p><strong>{name}</strong></p>
            <img 
                alt={link}
                src={img}
            />
            {console.log(label)}
             <p><strong>Label: </strong>{ !label ? "No Label" : label }</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
            go to recipe
            </a>
            
        </div>
    )
}

export default Recipe;