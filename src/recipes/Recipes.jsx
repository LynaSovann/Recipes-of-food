import React from "react";
import "./recipes.css";
const Recipes = ({name, image, ingredients}) => {
    return (
        <div className="recipe">
            <div className="left">
                <h1>{name}</h1>
                <img src={image} />
            </div>
            <div className="right">
                <h1>Ingredients</h1>
                {
                    ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))
                }
            </div>
        </div>
    )
}

export default Recipes;