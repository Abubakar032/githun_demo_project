import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className="  w-full h-[90px] bg-dim absolute bg-gray-950 top-0 left-0 right-0"> 
    <div className=' flex justify-between w-[75%] m-auto mt-10  '>
       <img src="images/logo.png" alt="logo"  className='w-[181px] h-[27px]'/>
       <Button bg="bg-purple-600"  text="Connect wallet" />
    </div>
    </div>
  )
}

export default Navbar
