
import React from 'react';
import './home.css';
import gta from './gta.jpg';
import pubg from './pubg.jpg';
import asc from './asc.jpg';
import valo from './valo.jpg';
import cod from './cod.jpg';
import apex from './apex.jpg';

function Home() {
  return (
      <div>
        
        <div id="progressbar"></div>
    <div id="scrollpath"></div>
      
    <div className="main">
    <div className="home-container1">
      <div className="image-container">
         <img src={gta}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">GTA V</h5>
        <p className="body">Grand Theft Auto V is a action-adventure game published by Rockstar Games.</p>
      </div>

      </div>
      <div className="btn">
        
        <a href="https://www.rockstargames.com/V/" className="btlink">
          TAP
        </a>
        
      </div>
    </div>
    <div className="home-container2">
      <div className="image-container">
         <img src={pubg}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">BATTLEGROUND MOBILE INDIA</h5>
        <p className="body">BATTLEGROUND MOBILE INDIA is a last-man-standing shooter. </p>
      </div>

      </div>
      <div className="btn">
        
        <a href="https://www.battlegroundsmobileindia.com/" className="btlink">
          TAP
        </a>
        
      </div>
    </div>
    <div className="home-container3">
      <div className="image-container">
         <img src={asc}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">Assassin's Creed</h5>
        <p className="body">Assassin's Creed is an open-world action-adventure stealth video game.</p>
      </div>

      </div>
      <div className="btn">
        
        <a href="https://www.ubisoft.com/en-gb/game/assassins-creed/odyssey" className="btlink">
          TAP
        </a>
        
      </div>
    </div>
    <div className="home-container4">
      <div className="image-container">
         <img src={valo}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">VALORANT</h5>
        <p className="body">Valorant is a free-to-play first-person hero shooter developed and published by Riot Games</p>
      </div>

      </div>
      <div className="btn">
      
        <a href="https://playvalorant.com/en-us/" className="btlink">
          TAP
        </a>
        
      </div>
    </div>
    <div className="home-container5">
      <div className="image-container">
         <img src={cod}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">Call of Duty: Black Ops III</h5>
        <p className="body">Call of Duty: Black Ops 4 is a 2018 multiplayer first-person shooter developed by Treyarch and published by Activision</p>
      </div>

      </div>
      <div className="btn">
        
        <a href="https://www.ea.com/games/apex-legends" className="btlink">
          TAP
        </a>
        
      </div>
    </div>
    <div className="home-container6">
      <div className="image-container">
         <img src={apex}/>
      </div>
      <div className="home-content">
        
        <div className="home-title">
        <h5 className="title">Apex Legends</h5>
        <p className="body">Apex Legends is a free-to-play hero battle royale game developed by Respawn Entertainment and published by Electronic Arts.</p>
      </div>

      </div>
      <div className="btn">
        
        <a href="https://google.com" className="btlink">
          TAP
        </a>
        
        
      </div>
    </div>
    </div>
    </div>
  );
}

let progress = document.getElementById('progressbar');
let totalheight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
let progressHeight = (window.pageYOffset / totalheight) * 100;
//progress.style.height = progressHeight + "%";
}
export default Home;