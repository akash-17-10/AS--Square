import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.gif';
import Overlay from './Overlay';
import Back from './Back';
import Landing from './Landing';

function App() {
  
  return (
    <Router>
      <Back/>
      
      
     
    <div className="App">
      <Switch>
        <Route>
        <Route path="/AS--Square" exact component={Landing}/>
        <Route path="/" exact component={Landing}/> 
        <Nav/> 
        <Route path="/Home" exact component={Home}/>
        <Route path="/Blog" exact component={Blog}/>
        <Route path="/About" exact component={Overlay}/>
        <Route path="/About!" exact component={About}/>
        <Route path="/Contact" exact component={Contact}/>
        </Route>
      </Switch>
      
    </div>
    
    
    </Router>
    
     );

     
}

export default App;
