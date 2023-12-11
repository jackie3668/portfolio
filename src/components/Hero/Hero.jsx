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
        <h1>Hi, my name is Jackie Shen</h1>
      </div>
    </div>
  )
}

export default Hero