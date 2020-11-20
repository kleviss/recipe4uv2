import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, image, calories, link}) => {
    return(
        <div className={style.recipe}>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <p>Label: <b>{calories}</b></p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                See recipe
            </a>
            <p style={{color: "white"}}>+</p>
        </div>
    )
}

export default Recipe;