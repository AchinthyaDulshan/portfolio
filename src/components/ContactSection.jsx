import React from 'react'
import Logo from '../assets/images/logos/logoFull.png';

const ContactSection = () => {
    return (
        <section id='contact'>
            <div className='max-w-screen-xl mx-8 xl:mx-auto py-16 border border-gray-400 rounded-lg grid md:grid-cols-2 gap-10 md:gap-0'>
                <div className='px-10'>
                    <img src={Logo} alt="logo" className='w-24 mb-5 mx-auto md:mx-0' />
                    <h2 className="font-heading text-center md:text-left  text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text mb-4 lg:mb-10">Let's Connect and Collaborate</h2>
                    <h4 className='font-normal text-sm  text-gray-400 tracking-wide'>Have a project in mind? Reach out to discuss how we can work together effectively.</h4>
                </div>
                <div className='px-10'>
                    <form className="space-y-6 font-text">
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Name</label>
                            <input type="text" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C] focus:outline-none text-sm tracking-tight" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Email</label>
                            <input type="email" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C]focus:outline-none text-sm tracking-tight" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400">Message</label>
                            <textarea rows="4" className="w-full mt-1 px-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#B9A14C]focus:outline-none text-sm tracking-tight" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-6 bg-gray-200 hover:bg-gray-500 text-black font-semibold rounded-md transition duration-200">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection