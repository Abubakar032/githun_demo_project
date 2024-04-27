import React from 'react'
import { images } from './Json_data'

const Images_section = () => {
  return (
    <div className='w-[90%] lg:w-[75%] m-auto'>
      <p className=" text-purple-600 text-center   ">Powering tools and integrations from companies all around the world</p>
      <div className='grid grid-cols-4 lg:grid-cols-7 md:grid-cols-5 gap-5 mt-10'>
      {
        images.map((curentItem, index)=>{
            return <div key={index}><img src={curentItem.url} alt={curentItem.id} /></div>
        })
      }
      </div>
    </div>
  )
}

export default Images_section
