import React from 'react'
import { aboutMeContent } from '../constants/constants'

const Aboutme = () => {

    return (
        // About me section start 
        <section id='aboutMe' className="max-w-screen-xl px-8 mx-auto my-10 grid md:grid-cols-2 gap-10 md:gap-16 scroll-m-20">

            {/* md:Left Column: Image or Illustration start */}
            <div className="w-full flex justify-center items-center">
                <img src={aboutMeContent.image} alt="About Me Image" className="w-4/5 lg:w-3/4 h-auto rounded-lg shadow-lg object-cover grayscale-[70%] brightness-75" />
            </div>
            {/* md:Left Column: Image or Illustration end */}

            {/* Right Column: Text Content start */}
            <div className="w-full text-white">
                
                {/* heading  */}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text text-center md:text-left">Who I Am</h2>
                
                {/* paragraph --> 1  */}
                <p className="text-gray-400 font-text text-sm text-center md:text-left md:text-md leading-relaxed mb-6">
                    {aboutMeContent.paragraph_1}
                </p>
                
                {/* paragraph --> 2  */}
                <p className="text-gray-400 font-text text-sm text-center md:text-left md:text-md leading-relaxed mb-6">
                    {aboutMeContent.paragraph_2}
                </p>
                
                {/* bottom link as a button  */}
                <a href={aboutMeContent.link} className="mx-auto md:m-0 w-fit block mt-4 bg-gray-200 font-medium py-2 px-6 rounded-lg transition-all duration-200 font-text text-gray-900 hover:bg-transparent hover:text-gray-200 border hover:border-gray-200 hover:shadow-md hover:shadow-gray-300/30">
                    {aboutMeContent.linkText}
                </a>

            </div>
            {/* Right Column: Text Content end */}

        </section >
        // about me section end 
    )

}

export default Aboutme