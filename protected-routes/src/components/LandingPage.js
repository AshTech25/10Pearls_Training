import React from 'react'
import auth from './auth';
export const LandingPage = (props) => {
    return (
        <div>
            <p>Landing Page</p>
            <button onClick={()=>
            auth.login(()=>{props.history.push('/App')})
            } >Login</button>
        </div>
    )
}
