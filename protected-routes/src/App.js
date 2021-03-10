import './App.css';
import {LandingPage} from './components/LandingPage';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {NextPage} from './components/NextPage';
import {ProtectedRoute} from './components/ProtectedRoute';
function App() {
  return (
    
    <div className="App">
      <h1>Protected routes</h1>
      <Route  exact path="/" component={LandingPage}/>
      <ProtectedRoute exact path="/App" component ={NextPage}/>
    </div>
  );
}

export default App;
