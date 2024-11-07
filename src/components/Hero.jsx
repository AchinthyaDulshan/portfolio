import React from 'react'
import { HeroContent } from '../constants/constants'

const Hero = () => {
  return (
    // hero container start 
    <section id='hero'>
      <div className='grid justify-items-center content-center gap-5 lg:gap-7 min-h-dvh font-heading '>

        {/* top profile Image  */}
        <img src={HeroContent.profileImage} alt="ProfileImage" className='rounded-full w-28 md:w-32 lg:w-36 brightness-90 ring-1 ring-[#B9A14C] ring-offset-2 ring-offset-gray-900' />

        {/* Hi, name text  */}
        <h3 className='text-sm md:text-base lg:text-lg border border-gray-400 px-4 py-1 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 font-semibold h-fit w-fit'>Hi, I'm {HeroContent.myName} 👋</h3>

        {/* Personal branding heading  */}
        <h1 className='px-3 text-2xl lg:text-5xl bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text text-center font-semibold'>{HeroContent.personalBrandingHeading}</h1>

        {/* Personal branding subheading */}
        <h2 className='px-3 font-normal text-sm text-center lg:text-base  text-gray-400 tracking-wide'>{HeroContent.PersonalBrandingSubheading}</h2>

        {/* bottom button area  */}
        <div className='grid grid-cols-2 gap-2 mt-10 text-sm lg:text-base'>
          <a href="/" className='rounded-lg border text-gray-400 border-gray-400 font-text font-medium py-2 px-3 flex justify-center items-center'>Connect</a>
          <a href="/" className='rounded-lg border bg-gray-200 border-gray-400 font-text font-medium py-2 px-3 flex justify-center items-center'>Get My CV</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
