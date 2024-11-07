import React from 'react'
import { AboutMeContent } from '../constants/constants'

const AboutmeSection = () => {
    return (
            <section id='aboutMe' className="max-w-screen-xl px-8 mx-auto my-10 grid md:grid-cols-2 gap-10 md:gap-16">

                {/* <!-- Left Column: Image or Illustration --> */}
                <div className="w-full">
                    <img src="your-image-url.jpg" alt="About Me Image" className="w-full h-auto rounded-lg shadow-lg object-cover"/>
                </div>

                {/* <!-- Right Column: Text Content --> */}
                <div className="w-full text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text text-center md:text-left">Who I Am</h2>
                    <p className="text-gray-400 font-text text-sm text-center md:text-left md:text-md leading-relaxed mb-6">
                        {AboutMeContent.paragraph_1}
                    </p>
                    <p className="text-gray-400 font-text text-sm text-center md:text-left md:text-md leading-relaxed mb-6">
                        {AboutMeContent.paragraph_2}
                    </p>
                    <a href={AboutMeContent.link} className="mx-auto md:m-0 w-fit block mt-4 bg-gray-200 font-medium py-3 px-6 rounded-lg transition-all duration-200 font-text text-black">
                        {AboutMeContent.linkText}
                    </a>
                </div>

            </section >

    )
}

export default AboutmeSection