import React from 'react'
import './Hero.css'
import hero_bg from '../../asset/other/hero_bg.jpg'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image">
        <img src={hero_bg} alt="" />
      </div>
      <div className="hero-content">
        <h5>Design, Develop, Deliver</h5>
        <h1>HI, MY NAME IS <br/><span>JACKIE SHEN</span></h1>
        <h2>UX/UI Developer</h2>
        <p>Jackie is a passionate UX/UI developer, skilled in turning designs into industry-ready products. Her expertise in user research, prototyping, and a detail-oriented approach result in creative, user-friendly solutions.</p>
      </div>
    </div>
  )
}

export default Hero