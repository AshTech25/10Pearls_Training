import React,{useState,useContext} from 'react';
import {ItemContext} from '../Context/ItemContext';
import { v4 as uuidv4 } from 'uuid';

export const SearchBar = ({count}) => {
    
    const [items,setItems] = useContext(ItemContext);
    const [text,setText] = useState()
     
    const onChange = (e) => {
        
        setText(e.target.value)
        setItems([text])
        }
    return (
        <div >
            <h3>Item {count}</h3>
            <form >
            <input type='text' name='Ingredient' value={text} onChange={onChange}  placeholder='Add Ingredients'>

            </input>
            
            </form>
        </div>
    )
}
