import React, {useState,useContext} from 'react'
import {MovieContext} from './MovieListContext'
import Movie from './Movie'

export default function MovieList() {
    const [movies,setMovies] = useContext(MovieContext);
    return (
        
        <div>
        <h1>
        
         {
            movies.map(movie => (
                <Movie movie={movie} key ={movie.id}  />
            ))
        } 
        </h1>
        </div>
    );
}
