import React from 'react'
import {Link} from 'react-router-dom'

export const Recipe = ({recipe}) => {
    
    return (
        <Link className = 'RecipeBox' to={{pathname : `/recipe-page/${recipe.id}`, state : {recipe : recipe.id} }}>
        <div  >
            <img className='recipeImage' src ={recipe.image} alt="No preview available" />
            <p >{recipe.title.length>27 ? `${recipe.title.slice(0,27)}...` : recipe.title}<span style={{fontWeight:'bold'}}> | </span>Likes: {recipe.likes}</p>
            
        </div>
        </Link>
    )
}
