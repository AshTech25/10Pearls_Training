import './App.css';
import React,{useState} from 'react';
import {Button} from './components/Button'; 
import {SearchBar} from './components/SearchBar' ;
import {Submit} from './components/Submit'; 
import {ItemProvider} from './Context/ItemContext';


function App() {
  
  const [attributeForm,setAttributeForm]=useState([])
  const [counter,setCounter] = useState(0)
  const [ingredients,setIngredients] = useState([])
  

  const onClick = () =>
  {
    setCounter(counter+1)
    setAttributeForm([...attributeForm,<SearchBar count={counter}  />])      
  }

  
  return (
    <ItemProvider>
      
    <div className="App">
      <Button clicked={onClick} />
        {
          attributeForm
        }
      {attributeForm.length>0 && <Submit/>}
           
        </div>
        </ItemProvider>
      
  );
}

export default App;
