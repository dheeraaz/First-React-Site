import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Sub-Components'
import { useGlobalAppContext } from '../context/AppContext'

function Hero({heading, btnText ,btnLink, imgSrc='./images/hero.svg'}) {
  const {firstName, lastName} = useGlobalAppContext();
  return (
    <div className='mt-8 flex gap-6 flex-col-reverse md:flex-row'>
      <div className='md:w-1/2 flex items-center md:ml-32'>
        <div>
          <p className=' uppercase text-gray-600'>This is us</p>
          <h1 className=' text-6xl font-extrabold leading-snug'>{heading}</h1>
          <p className=' mb-6'>Hi, we are {firstName} {lastName} dolor sit amet consectetur adipisicing elit. Magni nostrum unde delectus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <NavLink to={btnLink}><Button btnText= {btnText} /></NavLink>
        </div>
      </div>
      <div className='md:w-1/2' ><img src={imgSrc} alt="" className=' md:w-3/4 md:m-auto'/></div>
    </div>
  )
}

export default Hero