import React from 'react'

export const Recipe = ({recipe}) => {
    return (
        <div className = 'RecipeBox' >
            <img  src ={recipe.image} alt="No preview available" />
            <p >{recipe.title.length>27 ? `${recipe.title.slice(0,27)}...` : recipe.title}<span style={{fontWeight:'bold'}}> | </span>Likes: {recipe.likes}</p>
            
        </div>
    )
}
