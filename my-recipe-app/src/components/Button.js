import React from 'react'

export const Button = ({color,clicked}) => {
    
    
    return (
        <div>
            <button className='addButton' onClick={clicked}>Add Ingredients</button>
            
        </div>
    )
}
