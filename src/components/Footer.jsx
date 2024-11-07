import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/images/logos/logoFull.png';
import { navLinks, SocialMediaLinks } from '../constants/constants';

const Footer = () => {
    return (
        <section id='footer'>
            <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-4">

                {/* Column 1: About */}
                <div>
                    <img src={Logo} alt="logo" className='w-24 mb-5 mx-auto md:mx-0' />
                    <h2 className="text-2xl font-bold mb-4 font-heading bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text">Stay Connected and Explore My Work</h2>
                    <p className="font-text text-sm tracking-tight text-gray-400">
                        Thank you for visiting! Let's connect and create something amazing together.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400 font-text text-sm">
                        {navLinks.map((link, index) => (
                            <li key={index}><a href={link.link} className="hover:text-white transition">{link.name}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading">Connect with Me</h4>
                    <div className="flex flex-wrap gap-2">
                        {
                            SocialMediaLinks.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition flex items-center justify-center border border-gray-400 rounded-full p-2">
                                    {item.image}
                                </a>
                            ))
                        }

                        
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 pb-2 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Achinthya Dulshan. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;
