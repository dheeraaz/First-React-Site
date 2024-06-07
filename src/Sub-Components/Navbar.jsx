import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const MyNavlinks = () => {
  return (
    <>
      <NavLink to='/' className={MyNavlinksCallback}>Home</NavLink>
      <NavLink to='/about' className={MyNavlinksCallback}>About</NavLink>
      <NavLink to='/services' className={MyNavlinksCallback}>Products</NavLink>
      <NavLink to='/contact' className={MyNavlinksCallback}>Contact</NavLink>
    </>
  )
}

// function MyNavlinksCallback({isActive}){
//   return `hover:text-secondary font-poppins ${isActive?"text-secondary":"text-gray-800"}`
// }

const MyNavlinksCallback = ({ isActive }) => {
  return `hover:text-secondary font-poppins ${isActive ? "text-secondary" : "text-gray-800"}`
}

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex items-center'>
      <div className='hidden md:flex gap-20 font-medium '>
        <MyNavlinks />
      </div>
      <button onClick={handleToggle}>
        {isOpen ? <FontAwesomeIcon icon={faXmark} className='text-2xl md:hidden' /> : <FontAwesomeIcon icon={faBarsStaggered} className='text-xl md:hidden' />}
      </button>

      {isOpen && (
        <div className='absolute top-[70px] right-0 h-fit w-1/2 bg-white flex flex-col items-center gap-20 py-8 font-semibold'>
          <MyNavlinks />
        </div>
      )}

    </nav>
  )
}

export default Navbar