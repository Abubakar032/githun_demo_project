import { cart_data } from "./Json_data"

const Cart = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:w-[75%] w-[90%] gap-10 m-auto mt-10 lg:mt-36">
    {
        cart_data.map((currentItem, index)=>{
  return <div className={`py-5 bg-secondary px-5 ${currentItem.style} rounded-2xl  `} key={index}>
    <div className="flex">
        <img src={currentItem.url} alt={currentItem.id} />
        <h1 className="text-3xl font-inter mx-2"> {currentItem.heading}</h1>
    </div>
    <p className="mt-5 text-center">{currentItem.text}</p>
      
    </div>
        })
    }
    
    </div>
  )
}

export default Cart
