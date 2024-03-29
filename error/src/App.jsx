import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Container} from 'reactstrap'

export default function App() {

  
  function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);
    
    theThing.style.left = xPosition + "px";
    theThing.style.top = yPosition + "px";
  }
  
  // Helper function to get an element's exact position
  function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
  
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
  
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
  
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }
  var theThing ;
  var container ;
  useEffect(()=>{
    theThing = document.querySelector("#thing");
    container = document.querySelector("#contentContainer");
    
    container.addEventListener("click", getClickPosition, false);
  },[])


  return (
    <div>
      <>
      <div id="contentContainer" style={{width:'550px',height:'350px',border:'5px solid black',overflow:'hidden',backgroundColor:'#F2F2F2'}}>
      <img id="thing" alt="the thing" style={{position:'relative',left:'50px',top:'50px',transition:'left .5s cubic-bezier(.42,-0.3,.78,1.25),top .5s cubic-bezier(.42,-0.3,.78,1.25);'}} height="67" src="//www.kirupa.com/images/smiley_red.png" width="67"/>
      </div>
      </>
    </div>
  )
  
}
