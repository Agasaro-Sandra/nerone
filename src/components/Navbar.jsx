import React from 'react'
import {FaSistrix} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'
import {FaCartShopping} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 w-full border-b-2 border-linen-2 mb-20 md:justify-around">
        <h1 className="px-6">Nerone</h1>
        <AiOutlineMenu  className="mx-6 md:hidden"/>
        <div className='hidden md:flex justify-evenly w-2/5 items-center px-6'>
          <p className='text-xs'>Home</p>
          <p className='text-xs'>Shop</p>
          <p className='text-xs'>About</p>
          <FaSistrix size={12}/>
          <div className="bg-linen-2 w-0.5 h-3 rounded-sm"></div>
          <button className='text-xs bg-linen-2 rounded-sm h-7 px-5'>Purchase</button>
          <FaCartShopping />
        </div>
    </div>
  )
}

export default Navbar