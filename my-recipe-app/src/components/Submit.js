import React,{useContext} from 'react';
import {ItemContext} from '../Context/ItemContext';

export const Submit = () => {

    const [items,setItems] = useContext(ItemContext);

    const onSubmit =  () =>
    {
        console.log(items)


    }


    return (
        <div>
            <form className='MyForm' onSubmit={onSubmit}>
            <input type='submit' value = "Submit"  className="submitbtn" ></input>
            </form>
        </div>
    )
}
