import './App.css';
import React,{useState} from 'react';
import {Button} from './components/Button'; 
import {SearchBar} from './components/SearchBar' ;
import {Submit} from './components/Submit'; 
import {ItemProvider} from './Context/ItemContext';
import { v4 as uuidv4 } from 'uuid';
import {Header} from './components/Header';

function App() {
  
  const [attributeForm,setAttributeForm]=useState([])
  const [counter,setCounter] = useState(0)
  const [ingredients,setIngredients] = useState([])
  //const RECIPE_API_KEY = ''; 

  const onClick = () =>
  {
    setCounter(counter+1)
    setAttributeForm([...attributeForm,<SearchBar key={uuidv4()} count={counter}  />])      
  }

  const submit = (ingredient) =>
  {
    console.log(ingredients)
    setIngredients([...ingredients,ingredient])
    fetchData();
  }

  
  const fetchData = () => {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "61c121cc9bmsh368ac091c3d2658p1ba11fjsn16672453279e",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}
      
  
  
  return (
    <ItemProvider>
      
    <div className="App">
      <Header title={'My Recipe Application'}/>
      <Button clicked={onClick} />
        {
          attributeForm
        }
      {attributeForm.length>0 && <Submit submit={submit}/>}

        </div>
        </ItemProvider>
      
  );
}

export default App;
