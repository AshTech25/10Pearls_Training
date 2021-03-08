import React,{useState,useContext} from 'react';
import {ItemContext} from '../Context/ItemContext';

export const SearchBar = ({count}) => {
    
    const [items,setItems] = useContext(ItemContext);
    const [text,setText] = useState('');
    const [submitted,setSubmitted] = useState(false) 
    const [butForm,setButform] = useState(true)
    

    const onSubmit = (e) =>{
        e.preventDefault();
        text === '' ? alert('You need to enter something atleast') : submit(text);
    }

    const submit = (text) => {
        let newItem = text;
        setItems([...items,newItem]);
        setSubmitted(true);
    }


    const delItems = (e) =>
    {
        //removeitems
        e.preventDefault();
        console.log(text);
        console.log(items)
        setItems(items.filter((item)=> item !== text));
        // remove label
        setText('');
        setButform(false);
    }

    return (
        <div className="SearchBar">
            {butForm && <h3>Item {count} :</h3>}
            <form className='Done Form' onSubmit={onSubmit}  >
            { !submitted ? <div> 
                <input type='text' name='Ingredient' className='form__input' value={text} onChange={(e) => setText(e.target.value)}  placeholder='Add Ingredients'/>
                <input type='submit' value = "Done"  className="form__button" /> 
                </div> : 
            <div> <h1>{text}</h1>
            {butForm && <button className='delButton' onClick={delItems}  >X</button>}
             </div>}

            </form>
        </div>
    )
}

