import Button from "./Button"
import { style } from "./Style"

const Hero_section = () => {
  return (
    <>   
     <div className="grid grid-cols-2  lg:gap-80 relative   h-[574px]  mt-16  ">
      <div>
        <img src="images/h_left.png" alt="left" className=" w-full h-[80%]" />
      </div>
      
      <div>
        <img src="images/h_right.png" alt="right" className="w-full h-[90%]" />
      </div>


      <div className='  absolute w-[90%]  md:w-[60%] text-center lg:w-[40%] m-auto place-self-center '>
      <h1 className={`${style.h1} font-inter`}>
  A Fast <span className=" text-linear  font-clash-grotesk mt-5 lg:mt-0">Blockchain</span>
</h1>

<h1 className={`${style.h1} mt-5`}>Scalable AI.</h1>
<p className="mt-5">Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
<div className="flex  mt-5 text-center justify-around">
  <Button bg="bg-gradient-button" text="Connect wallet" />
  <Button border="border" text="Read docs" />
</div>
        
       </div>
    </div>

    </>

  )
}

export default Hero_section
