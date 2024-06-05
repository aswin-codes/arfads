import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex px-5 py-5 items-center justify-between'>
        <div className='h-auto w-16 md:w-36'>
            <img src={Logo} alt='Logo'/>
        </div>
    </div>
  )
}

export default Navbar