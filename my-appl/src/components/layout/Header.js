import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h3>Basic To Do App</h3>
            <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
            
        </div>
        
    )
}
const headerStyle = {
    backgroundColor:'black',
    color:'white',
    textAlign: 'center',
    padding : '10px'
}
const linkStyle = {
    color:'white'
}
