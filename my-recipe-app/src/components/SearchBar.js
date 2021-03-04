import React,{useState,useContext} from 'react';
import {ItemContext} from '../Context/ItemContext';

export const SearchBar = ({count}) => {
    
    const [items,setItems] = useContext(ItemContext);
    const [text,setText] = useState('');
    const [submitted,setSubmitted] = useState(false) 
        

    const onSubmit = (e) =>{
        e.preventDefault();
        submit(text);
    }

    const submit = (text) => {
        let newItem = text;
        setItems([...items,newItem]);
        setSubmitted(true);
    }

    return (
        <div >
            <h3>Item {count} :</h3>
            <form className='Done Form' onSubmit={onSubmit}  >
            { !submitted ? <div> 
                <input type='text' name='Ingredient' value={text} onChange={(e) => setText(e.target.value)}  placeholder='Add Ingredients'/>
                <input type='submit' value = "Done"  className="Done" /> 
                </div> : 
            <div> <h1>{text}</h1> </div>}

            </form>
        </div>
    )
}

