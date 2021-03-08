import React,{useState,useEffect} from 'react'
import {Header} from './Header'
import {Ingredients} from './Ingredients'

const IndRecipe = (props) => {
    const [recipeInfo,setRecipeInfo] = useState()
    const MY_API_KEY = process.env.REACT_APP_API_KEY;  
  
    useEffect(() => {
        const id = props.location.state.recipe;
        const getDetails = async(MY_API_KEY,id) =>
        { 
            const res = await fetchData(MY_API_KEY,id);
            const ingredients = res.nutrition.ingredients
            const newInfo = {
                title: res.title,
                healthScore : res.healthScore,
                instructions : res.instructions,
                timeTaken : res.readyInMinutes,
                image :res.image,
                summary : res.summary,
                ingredients : ingredients
            }
            setRecipeInfo(newInfo);    
            
        }
        getDetails(MY_API_KEY,id);
    }
    )
    
    
    // This needs to be updated asap
    const fetchData = async(MY_API_KEY,id) =>
    {
       try{
        const result = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${MY_API_KEY}&includeNutrition=true`);
        if(result.status === 200){
        const data = await result.json();
        return(data)
       }
        return(alert(result.status))
    }
    catch(ex){
        alert(ex.message);
    }
}

    

    return (
        <div>

        {recipeInfo &&
        <div>
        <Header title = {recipeInfo.title}/>
        <div className='Container'>
        <img src = {recipeInfo.image} alt='No preview available'/>
        </div>
        <Ingredients ingredients={recipeInfo.ingredients}/>
        <p>{recipeInfo.instructions}</p>
        <h3>Summary:</h3>
        <div dangerouslySetInnerHTML={ {__html: recipeInfo.summary} } />
        <ul style={{fontWeight:'bold'}}>
        <li>Health Score : {recipeInfo.healthScore}</li>
        <li>Time Taken : {recipeInfo.timeTaken} minutes</li>
        </ul>
        </div>
        }
        </div>
    )
}

export default IndRecipe;

