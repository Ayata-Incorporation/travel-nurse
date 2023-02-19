import React from 'react'
import "./style.css"
import Header from "./Header";
export default function Home() {
  return (
    <section className='home'>
    <div className="background" id="home">
        <Header/>
        
        <div className='wave'>
        <img src="img/wave.png" alt="" />
        </div>
    </div>
    <div className='totalbackgroundContent'>
    <div className='nurse'>
        <img src="img/nurse.png" alt="" />
      </div>
      <div className='backgroundContent'>
         <h1> DISCOVER THE WORLD AS A</h1>
         <div className='box'>
          <h3>TRAVEL NURSE</h3>
         </div>
         <h4>Experience new cultures,<br />
expand your skills, and make a difference.</h4>
<p>Get Started <i class="fa-solid fa-arrow-right"></i></p>
      </div >
      </div>
    </section>
    
  )
}
