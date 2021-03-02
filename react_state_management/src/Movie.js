import React from 'react';
// import {useState} from 'react';
export default function Movie(props) {
    return (
        <div>
         <h3>{props.movie.name}</h3>
         <h3>{props.movie.price}</h3>   
        </div>
    )
}
