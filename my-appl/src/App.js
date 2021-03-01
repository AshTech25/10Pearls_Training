import React,{Component} from 'react'; 
import './App.css';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import About from './components/pages/About';
import uuid from 'react-uuid';

class App extends Component {
  state = {
    todos : [
      {
      id: uuid(),
      title:"Take out the trash",
      completed:false
    },
    {
      id: uuid(),
      title:"Dinner with family",
      completed:false
    },
    {
      id: uuid(),
      title:"Take out the trash",
      completed:false
    }
  ]
  }
  markComplete = (id) =>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })

    })
}

// Delete todo
delTodo = (id) =>
{
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});  
}

// Add todo
addToDo = (title) =>
{
  const newTodo = 
  {
    id : uuid(),
    title,
    completed : false
  }
this.setState({todos:[...this.state.todos,newTodo]});
}

  render(){
    
  return (
    <Router>
    <div className="App">
    <div className="Container">      
      <Header/>
      <Route exact path='/' render={props=>(
      <React.Fragment>
        <AddToDo addToDo={this.addToDo} /> 
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}  />
      </React.Fragment>
      )}/>
      <Route path='/about' component={
        About } />
      
      </div>
      
    </div>
    </Router>
  );
}
}

export default App;
