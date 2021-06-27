import React from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import logo12 from './logo12.JPG';
function Nav() {
    const navStyle ={
     color: 'white' 
    }
  return (
    <nav>
        
        <div className="Logo">
          <Link to='/'>
          <img className="logo-image" src={logo12}/>
          </Link>
        </div> 
        

        <ul className="nav-links">
        <Link style={navStyle} to='/Home'>
             <li>Home</li>
             </Link>
             <Link style={navStyle} to='/Blog'>
             <li>Blog</li>
             </Link>
             <Link style={navStyle} to='/About'>
             <li>About Us</li>
             </Link>
             <Link style={navStyle} to ='/Contact'>
            <li>Contact Us</li>      
            </Link>
        </ul>    
    </nav>
  );
}

export default Nav;