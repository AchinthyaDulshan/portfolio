import React from 'react'

const Preloader = () => {
  return (
    <div className='bg-black w-full h-full flex justify-center items-center absolute top-0 left-0'>
        <img src="src/assets/images/logos/logoFull.png" alt="Logo" className='w-52 animate-pulse' />
        
    </div>
  )
}

export default Preloader