import React from 'react';
import './App.css';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Contact() {
  return (
    <div  className="Contact-main">
        <h1 className="contact-head">Contact Us</h1>
        <p className="cop">Any question or remarks? Just write us a message!</p>
        <div id="contact-container">
            <div className="contact-info">
            <h4>
                    Contact Information
                </h4>
                
                <div className="icon-text">
                    <PhoneIcon/>
                    <span>987-654-3210</span>
                </div>
                
                
                <div className="icon-text">
                    <MailIcon/>
                    <span>ASsquare@gmail.com</span>
                </div>
                <div className="icon-text">
                    <RoomIcon/>
                    <span>  Noida,Uttar Pradesh</span>
                </div>
                
            <div className="social-media">
                <a href="#" className="icon-circle">
                    <FacebookIcon/>
                </a>
                <a href="#" className="icon-circle">
                    <InstagramIcon/>
                </a>
                <a href="#" className="icon-circle">
                    <YouTubeIcon/>
                </a>
            </div>
            <form>
                <div className="col-2">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"/>
                    </div>

                </div>    
                <div className="col-2">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel"/>
                    </div>

                </div>    
                <div className="col-2">
                    <div className="form-group">
                        <label>What type of Games do you need?</label>
                        <div id="radio-buttons">
                        <div className="radio-button">
                        <input type="radio" id="radioarcade" name="type" value="arcade"/>
                        <label for="radioarcade">Arcade</label>
                       
                         </div>
                         <div className="radio-button">
                         <input type="radio" id="radioaction" name="type" value="action"/>
                        <label for="radioaction">Action</label>
                        
                         </div>
                         <div className="radio-button">
                         <input type="radio" id="radioracing" name="type" value="racing"/>
                        <label for="radioracing">Racing</label>
                        
                         </div>
                         <div className="radio-button">
                         <input type="radio" id="radioadventure" name="type" value="adventure"/>
                        <label for="radioadventure">Adventure</label>
                        
                         </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="form-group">
                        <label>Message</label>
                        <textarea></textarea>
                    </div>
                    </div>
                    <div className="col-2">
                    
                        <button className="primary">Send Message</button>
                    
                    </div>
            </form>

        </div>
      
    </div>
    </div>
  );
}

export default Contact;