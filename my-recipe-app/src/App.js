import './App.css';
import React,{useState,useEffect} from 'react';
import {Button} from './components/Button'; 
import {SearchBar} from './components/SearchBar' ;
import {Submit} from './components/Submit'; 
import {ItemProvider} from './Context/ItemContext';
import { v4 as uuidv4 } from 'uuid';
import {Header} from './components/Header';
import {Recipes} from './components/Recipes';


function App() {
  const MY_API_KEY = 'e95e11989a6947dfb4fb11052af8a4f5';  
  const [attributeForm,setAttributeForm]=useState([])
  const [counter,setCounter] = useState(0)
  const [recipes,setRecipes] = useState([]);
  
  const getIngredients = (ing) => {
        let query = '';
        for(let i=0;i<ing.length;i++)
        {
          i===0 ? query += ing[i] : query += ',+' + ing[i]; 
        }
        return(query);
    
  }

  const onClick = () =>
  {
    setCounter(counter+1)
    setAttributeForm([...attributeForm,<SearchBar key={uuidv4()} count={counter}    />])      
  }

  const submit = async(ingredient) =>
  {
    //setRecipes([]);
    const allIngredients = getIngredients(ingredient);
    const data = await fetchData(MY_API_KEY,allIngredients);
    console.log(data)
    data.length<1 ? alert('Item not found') : setRecipes([data]); 
    
    
  }

  
      const fetchData = async(MY_API_KEY,allIngredients) => {
      try{
      const result = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=
      ${allIngredients}&number=50&apiKey=${MY_API_KEY}&includeNutrition=true`);
      if(result.status === 200){
      const data = await result.json();
      return (data);
      }
      return (alert('Some ingredient of yours is inaccurate!'))
      }
      catch(ex){
        return (alert(ex.message));
      }
      }  
  
     
  return (
    <ItemProvider>
      
    <div className="App">
      <Header title={'My Recipe Application'}/>
      <div className='Container0'>
      <Button clicked={onClick} />
      </div>
      <div className='Container1'>
        
        {
          attributeForm
        }
      {attributeForm.length>0 && <Submit submit={submit}/>}
      </div>
      <Recipes  key ={uuidv4()} recipes={recipes}/> 
        </div>
        </ItemProvider>
      
  );
}

export default App;
