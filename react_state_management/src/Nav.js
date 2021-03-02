import React,{useContext} from 'react'
import {MovieContext} from './MovieListContext';

export default function Nav() {
    const [movies,setMovies] = useContext(MovieContext);  
    return (
        <div>
            <h3>Ashir</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}
