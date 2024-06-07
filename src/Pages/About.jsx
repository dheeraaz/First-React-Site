import React from 'react'
import Hero from '../Components/Hero'

function About() {
  const data = {
    heading:'Ipsum Lorem',
    btnText:'Contact Us',
    btnLink:'/contact',
    imgSrc:'./images/about1.svg' 
  }
  return (
    <div className="container">
     <Hero {...data}/>
    </div>
  )
}

export default About