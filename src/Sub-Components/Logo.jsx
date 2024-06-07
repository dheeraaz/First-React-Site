import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div  className='w-12'>
            <Link to="/">
                <img src='./images/Logo.png' alt="Logo" />
            </Link>
        </div>
    )
}

export default Logo