import React from 'react'
import './herosection.css'
let Herosection=()=> {
  return (
    <div className="hero-container">
        {/* <video src="/Videos/video-2.mp4" autoPlay loop muted></video> */}
        <img src="/Images/img-10.jpg" alt="" />
        <h1>AN EXTRAORDINARY EVENT IS ALWAYS TO REMEMBER </h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <button type="button"  class="btn btn-outline-secondary "><a className="nav-link text-white"  href="#register">Get Started</a></button>
          
     
        </div>
    </div>
  )
}

export default Herosection;