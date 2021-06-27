import React,{Component} from 'react';
import { Link, withRouter} from 'react-router-dom';
import cnt from './cnt.png';
import './overlay.css';
import Tilt from 'react-vanilla-tilt';


 const Overlay  = () =>{
    
        return(
            <div className="overlay">
                <div className="l">
                    <div className="item">
                    <h1 className="head">ABOUT US</h1>
                    <p className="typewriter">Click on arrows!</p>
                    </div>
                </div>
                <div className="r">
                <div className="item1">
                    <Tilt options={{ scale: 1.2,
    speed: 1000,
    max: 30  }}
    style={{ height: 70, width: 290 }}>
                <img className="logo-image" src={cnt}/>
                </Tilt>
                </div>
                </div>
                <Link to="About!">
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                    
                </div>
                
                </Link>
            </div>
        )
    
    
}
export default Overlay;
