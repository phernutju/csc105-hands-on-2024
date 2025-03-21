import React, { useState } from 'react'
import { Link } from 'react-router-dom';
 
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-white flex items-center h-20 max-w-7xl mx-auto px-6 font-bold w-full justify-center'>
        <h1 className='p-2 text-xl md:text-2xl '>Artist John</h1>

        <div className='DeskTop_Menu flex flex-1 justify-center items-center gap-4 md:gap-6 '>
            <a href='#Home' className='hover:bg-green-300/50 rounded-full py-1 px-3 cursor-pointer'>Home</a>
            <a href='#Aboutme' className='hover:bg-green-300/50 rounded-full py-1 px-3 cursor-pointer'>About me</a>
            <a href='#Gallery' className='hover:bg-green-300/50 rounded-full py-1 px-3 cursor-pointer'>Gallery</a>
        </div>

        <div>
            <button 
                className='bg-green-800 text-white text-bold rounded-full py-1 px-4 font-normal hover:bg-green-900' >
                Contact
            </button>
        </div>
    </div>

  )
}

export default NavBar