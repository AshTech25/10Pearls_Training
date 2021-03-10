import React from 'react'
import {Redirect} from 'react-router-dom'
import {Route} from 'react-router-dom';
import auth from './auth';

export const ProtectedRoute = ({component:Component,...rest}) => {
    return (
        <div>
            {console.log({...rest})
            }
            {console.log(Component)}
            <
                Route {...rest} render={
            props => {
                if(auth.isauthenticated()){
                return <Component {...props}/>
                }
                else{
                      return <Redirect to={{
                            pathname:"/",
                            state:{
                                from : props.location
                            }
                        }}/>
                }
            }
            }
            
            />

        </div>    
       
    )
}
