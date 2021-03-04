import React,{useState,createContext} from 'react';

export const ItemContext = createContext();



export const ItemProvider = props => {
    
    const [items,setItems] = useState([
        // {
        //     items:['palak','aloo'],
        // }

    ]);
    
    
    return (
        <ItemContext.Provider value={[items,setItems]}>
            {props.children}
        </ItemContext.Provider>
    )
}
