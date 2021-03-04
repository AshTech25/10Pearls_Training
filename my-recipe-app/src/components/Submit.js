import React,{useContext} from 'react';
import {ItemContext} from '../Context/ItemContext';

export const Submit = ({submit}) => {

    const [items,setItems] = useContext(ItemContext);

    const onSubmit =  (e) =>
    {
        e.preventDefault();
        submit(items);
    }


    return (
        <div>
            <form className='MyForm' onSubmit={onSubmit}>
            
            <input type='submit' value = "Find Recipe"  className="submitbtn" ></input>

            </form>
        </div>
    )
}
