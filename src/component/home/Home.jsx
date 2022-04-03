import React from 'react'
import './home.css';
import { NavLink } from 'react-router-dom';
import Banner from '.././../assest/green/cartoon1.gif';


const Home = () => {
  return (
    <div className='home_container'>




      <div className="banner_logo_container">
      <div className="heading_container">
          <h2>Build <span>your</span> new <span>resume</span> in as <span>little</span> as <span>5</span> minutes.</h2>
          <h1>Try it for free.</h1>
          <NavLink to="personal"> <button>Get Started</button></NavLink>
        </div>
        <div className="cartoon_image">
          <img src={Banner} alt="banner" />
        </div>
        
      </div>

     

    </div>
  )
}

export default Home