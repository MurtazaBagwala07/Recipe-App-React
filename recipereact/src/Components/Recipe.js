import React from 'react'

function Recipe(props) {
    return (
        <div>
            <h1>{props.recipeItem.recipe.label}</h1>
            <p>Calories : {props.recipeItem.recipe.calories.toFixed(3)}</p>
            <img src={props.recipeItem.recipe.image} alt="" />
        </div>
    )
}

export default Recipe
