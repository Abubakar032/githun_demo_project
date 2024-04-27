import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-primary'>
    <div className='  grid lg:grid-cols-2 gap-32 lg:w-[75%] w-[90%] m-auto py-10'>
      <div>
        <img src="images/footer.png" alt="footer" />
        <p className='my-5'>Managed by Solana Foundation</p>
        <img src="images/social.png" alt="social"   />
        <p className='mt-5'>@ 2024 Solana Foundation. All rights reserved.</p>
      </div>
      <div>
        <div className='flex justify-between'>
            <p>Get Connected</p>
            <img src="images/footer2.png" alt="footer2" />

        </div>
        <p className='mt-5'>Ecosystem</p>
        <p className='mt-5'>Blog</p>
        <p className='mt-5'>Newsletter</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
