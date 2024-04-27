import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    
    <div className="  w-full h-[90px] bg-dim absolute  bg-primary top-0 left-0 right-0"> 
    <div className=' flex justify-between w-[90%] lg:w-[75%] m-auto mt-7  '>
       <img src="images/logo.png" alt="logo"  className='  mt-2 w-[130px] h-[20px]   lg:w-[181px]      lg:h-[27px]'/>
       <Button bg="bg-gradient-button"  text="Connect wallet"  />
       
    </div>
    </div>
  )
}

export default Navbar
