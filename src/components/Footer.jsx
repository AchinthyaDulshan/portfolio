import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/images/logos/logoFull.png';
import { navLinks, SocialMediaLinks } from '../constants/constants';
import {FaPhone,FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (
        // footer start 
        <section id='footer'>

            {/* footer main container start  */}
            <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-4">

                {/* Column 1: About start */}
                <div>
                    {/* logo  */}
                    <img src={Logo} alt="logo" className='w-24 mb-5 mx-auto md:mx-0' />
                    {/* heading text  */}
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 font-heading bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text">Stay Connected and Explore My Work</h2>
                    {/* subheading  */}
                    <p className="font-text text-sm tracking-tight text-gray-400">
                        Thank you for visiting! Let's connect and create something amazing together.
                    </p>
                </div>
                {/* Column 1: About end */}

                {/* Column 2: Quick Links start*/}
                <div>
                    {/* heading  */}
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading">Quick Links</h4>
                    {/* quick link items start  */}
                    <ul className="space-y-2 text-gray-400 font-text text-sm">
                        {navLinks.map((link, index) => (
                            <li key={index}><a href={link.link} className="hover:text-white transition">{link.name}</a></li>
                        ))}
                    </ul>
                    {/* quick link items end  */}
                </div>
                {/* Column 2: Quick Links end*/}

                {/* Column 3: Social Media start*/}
                <div>
                    {/* heading */}
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading">Connect with Me</h4>
                    <div className='grid gap-2 mb-5'>
                        <div>
                            <a href="callto:+94717324763" className='inline-flex gap-2 items-center border border-gray-200 py-1.5 px-3.5 rounded-full bg-gray-200 text-gray-900 font-text hover:bg-transparent hover:text-gray-200 hover:border-gray-200 transition-all duration-200 tracking-wide text-sm'><FaPhone size={20}/><span className='md:hidden lg:inline'>+94 71 732 4763</span></a>
                        </div>
                        <div>
                            <a href="mailto:achinthyadulshan088@gmail.com" className='inline-flex gap-2 items-center border border-gray-200 py-1.5 px-3.5 rounded-full bg-gray-200 text-gray-900 font-text hover:bg-transparent hover:text-gray-200 hover:border-gray-200 transition-all duration-200 tracking-wide text-sm'><FaEnvelope size={20}/><span className='md:hidden lg:inline'>achinthyadulshan088@gmail.com</span></a>
                        </div>
                    </div>
                    {/* links start  */}
                    <div className="flex flex-wrap gap-2">
                        {
                            SocialMediaLinks.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#B9A14C] hover:border-[#B9A14C] hover:shadow-lg hover:shadow-[#B9A14C]/30 transition-all duration-200 flex items-center justify-center border border-gray-400 rounded-full p-2">
                                    {item.image}
                                </a>
                            ))
                        }
                    </div>
                    {/* links end */}
                </div>
                {/* Column 3: Social Media end*/}


            </div>
            {/* footer main container end  */}

            {/* Footer copyright text area start*/}
            <div className="mt-8 pb-2 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Achinthya Dulshan. All rights reserved.</p>
            </div>
            {/* Footer copyright text area end*/}

        </section>
        // footer end 
    );
};

export default Footer;
