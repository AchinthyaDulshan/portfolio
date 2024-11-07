import React, { useState } from 'react';
import Logo from '../assets/images/logos/logoFull.png';
import CloseIcon from '../assets/images/icons/icon-close.svg';
import HamburgerIcon from '../assets/images/icons/icon-hamburger.svg';
import { navLinks } from '../constants/constants';

const Navbar = () => {
    
    let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 bg-gray-900 z-10 border-b border-gray-600 font-text'>
           <div className='md:flex items-center justify-between  py-3 md:py-2  md:px-10 px-7 max-w-screen-xl mx-auto relative bg-gray-900 z-10' >
            {/* logo section */}
            <img src={Logo} className='h-8'/>
            
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <img className='m-auto' src={CloseIcon}/> : <img className='m-auto' src={HamburgerIcon} />
                }
            </div>
            {/* link items */}
            <ul className={`flex md:flex-row md:shadow-none flex-col shadow-lg justify-center items-center md:py-0 py-12 absolute left-0 md:static bg-gray-900 md:z-50 lg:z-[10] z-[-1] w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'} bg-White`}>
                {
                    navLinks.map((link, index) => (
                    <li key={index} className='md:ml-8 md:my-0 my-3'>
                        <a href={link.link} className='text-gray-200 text-sm hover:text-gray-500 duration-200'>{link.name}</a>
                    </li>))
                }
                
            </ul>
            {/* button */} 
            <a className='text-black bg-gray-200 font-semibold text-sm px-5 py-2 rounded-full duration-500  hidden md:block  transition-all delay-200 shadow-lg' href='/'>Connect</a>
           </div>
        </div>
    );
};

export default Navbar;