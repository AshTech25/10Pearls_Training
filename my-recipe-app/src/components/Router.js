import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from '../App';
import React from 'react'
import IndRecipe from './IndRecipe'


const Router = () =>(

<BrowserRouter>
<Switch>
<Route path='/' component={App} exact/>
<Route path='/recipe-page/:id' component={IndRecipe}/>
</Switch>
</BrowserRouter>
)

export default Router;