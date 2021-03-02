import React,{useState,createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState([
        {
            name: 'HarryPotter',
            price:'$10',
            id:23124
        },
        {
            name: 'Game of Thrones',
            price:'$10',
            id: 256612
        },
        {
            name: 'Inception',
            price:'$10',
            id:23524
        },
]) ;

    return (
       <MovieContext.Provider value = {[movies,setMovies]}>
        {props.children}
       </MovieContext.Provider>
    )
}

 