import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Recipe} from './Recipe';

export const Recipes = ({recipes}) => {
    return (
        
        <div className='RecipeContainer' key={uuidv4()}>
            {recipes.map(recipe => 
            recipe.map(indRecipe => <Recipe recipe={indRecipe}/>)
            )} 
            
        </div>
    )
}
