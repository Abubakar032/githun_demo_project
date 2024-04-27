import Cart from "./Cart"


const Cart_section = () => {
  return (
    <div  className=" mt-20 lg:mt-0 h-[90vh] md:h-[50vh] lg:h-auto w-full relative">
      <img src="images/cart_image.png" alt="cart" className=" h-full w-full" />
      <div className=" absolute top-0">
      
                    <Cart  />
                    </div>
                    <div>
                    <img src="images/Arrow 2.png" alt="arrow1" className="absolute top-0 lg:top-32 lg:left-[25%]" />
                    <img src="images/Arrow 3.png" alt="arrow2" className="absolute bottom-20 lg:bottom-44 lg:right-[25%]" />
                    </div>
                    
        
    </div>
  )
}

export default Cart_section
