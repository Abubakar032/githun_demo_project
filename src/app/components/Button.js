import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
      <button className={`py-2 px-5  rounded-2xl ${props.bg} ${props.border}  `}>{props.text}</button>
    </div>
  )
}

export default Button
