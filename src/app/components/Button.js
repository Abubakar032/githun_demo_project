import React from 'react'

const Button = (props) => {
  return (
    <div className=''>
      <button className={`lg:py-2 py-1 lg:px-5 px-2  rounded-2xl ${props.bg} ${props.border}  `}>{props.text}</button>
    </div>
  )
}

export default Button
