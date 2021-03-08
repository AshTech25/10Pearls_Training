import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Ingredients = ({ingredients}) => {
    return (
        <div>
            <h3>Ingredients:</h3>
            {ingredients.map(ingredient=>
                <div key={uuidv4()}>
                    
                    <ul style={{fontWeight:'bold'}}>
                        <li>{ingredient.name} : {ingredient.amount}</li>
                    </ul>
                    </div>
                )}
        </div>
    )
}
