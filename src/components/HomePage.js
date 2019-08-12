import React, { Component } from "react";
import '../App.css';

export default class HomePage extends Component {
  render() {
    
    return (
      
      <React.Fragment>  
            <div id="parallax-container">
               <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/SkyBG.png")'}}></div>
                <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds1.png")'}}></div>
                  <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds2.png")'}}></div>
                    <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/Clouds3.png")'}}></div>
                  <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/Moon.png")'}}></div>
                <div style={{background: 'url("https://cdn2.hubspot.net/hubfs/1951013/Parallax/Hill.png")'}}></div>
            </div> 

        <div id="content"> 
            <h1>Limitless Valley</h1>
              <p>The best board game ever.</p>
              <p>Play for ages.
                </p>
            <div className="hills">
              <div className="pimg4">
            <img src={require('../Media/fox.png')} className="moose"/>
              <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
            </div>
            </div>
            <div className="valley">
              <div className="pimg1">
            <img src="https://i.pinimg.com/originals/27/a6/68/27a66840d494016ff0b634c607610105.jpg" className="pimg1" alt="valley"/>
            <div className="centered">Limitless Valley</div>
            </div>
            </div>

            <div className="forest">
              <div className="pimg2">
                  <img src={require('../Media/moose-v3.png')} className="moose"/>
                  <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
              </div>
            </div>


            <div className="trees">
              <div className="pimg3">
                <img src={require('../Media/hummingbird.png')} className="moose"/>
                <p>lorem asl;kasjd;flkajsdl;flkajsdl </p>
              </div>
            </div>
        </div>



      </React.Fragment>
      // <Product />
    );
  }
}