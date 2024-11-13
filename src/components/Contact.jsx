import React from 'react'
import Logo from '../assets/images/logos/logoFull.png';

const Contact = () => {
    return (
        // contact section start 
        <section id='contact' className='scroll-mt-16'>
            {/* contact section main card start  */}
            <div className='max-w-screen-xl mx-8 xl:mx-auto py-16 border border-gray-400 rounded-lg grid md:grid-cols-2 gap-10 md:gap-0'>
                {/* card left column start  */}
                <div className='px-10'>
                    {/* logo  */}
                    <img src={Logo} alt="logo" className='w-24 mb-5 mx-auto md:mx-0' />
                    {/* heading  */}
                    <h2 className="font-heading text-center md:text-left  text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text mb-4 lg:mb-10">Let's Connect and Collaborate</h2>
                    {/* subheading  */}
                    <h4 className='font-normal text-sm  text-gray-400 tracking-wide'>Have a project in mind? Reach out to discuss how we can work together effectively.</h4>
                </div>
                {/* card left column end  */}
                {/* card right column start  */}
                <div className='px-10'>
                    {/* contact form start  */}
                    <form className="space-y-6 font-text">
                        {/* name area start  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Name</label>
                            <input type="text" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C] focus:outline-none text-sm tracking-tight" placeholder="Your Name" />
                        </div>
                        {/* name area end  */}
                        {/* email area start  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Email</label>
                            <input type="email" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C] focus:outline-none text-sm tracking-tight" placeholder="Your Email" />
                        </div>
                        {/* email area end  */}
                        {/* message area start  */}
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Message</label>
                            <textarea rows="4" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C] focus:outline-none text-sm tracking-tight" placeholder="Your Message"></textarea>
                        </div>
                        {/* message area end  */}
                        {/* submit button */}
                        <button type="submit" className="w-full py-3 px-6 bg-gray-200 font-semibold rounded-md transition duration-200  text-gray-900 hover:bg-transparent hover:text-gray-200 border hover:border-gray-200 hover:shadow-md hover:shadow-gray-300/30">
                            Send Message
                        </button>
                    </form>
                    {/* contact form end  */}
                </div>
                {/* card right column end  */}
            </div>
            {/* contact section main card end  */}
        </section>
        // contact section end 
    )
}

export default Contact