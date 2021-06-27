import React from 'react';
import './landing.css';
import ring from './ring.png';
import {gsap,TweenMax,Expo,TimelineMax} from 'gsap';
import anime from 'animejs';
import {Link, withRouter} from 'react-router-dom';
function Landing(){
    return(
        <div>
        <div class="container">

            <div class="loading-screen"></div>
           
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

      </div>      

      <div class="header">
            
            <h1 class="ml7" id="title">            
                  <span class="text-wrapper">
                        <span class="letters">AS--square Heaven Of Gamers</span>
                  </span>
            </h1>
                            
                            
            <p id="tagline" class="p1">Get ready to experience the world of gaming in a different way. Never like before, get chance to download all your favorite games through a single platform, all types of games which you want are here. </p>
            
            <br></br>
            
            <p id="tagline" class="p2">KEEP FAITH AND STAY CONNECTED TO AS--SQUARE HEAVEN OF GAMERS</p>
            
            <div class="buttons">
                <Link to='/About'>
                  <button id="one">Learn More</button>
                </Link>
                <Link to='/Home'>
                  <button id="two">LET'S BEGIN</button>
                </Link>  
            </div>

      </div>
      </div>
    )

}
TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});
TweenMax.from(".p1", 3, {
    delay: 9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
    delay: 9.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
    delay: 9.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#two", 3, {
    delay: 9.7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
var t1 = new TimelineMax();

t1.from(".loader", 4, {
    delay: 0.4,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
})
.to(".loader", 4, {
    delay: 0.4,
    x: 240,
    ease: Expo.easeInOut
});


export default Landing;