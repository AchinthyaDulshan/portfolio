import React, { useState } from 'react'
import IconMinus from '../assets/images/icons/icon-minus.svg'
import IconPlus from '../assets/images/icons/icon-plus.svg'
import { FAQ } from '../constants/constants'

const FAQs = () => {

    // faq open status 
    const [openIndex, setOpenIndex] = useState(null);
    // faq toggle 
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // faq section start 
        <section id='faq'>
            {/* main container start  */}
            <div className='py-16 max-w-screen-lg px-8 md:px-14 mx-auto '>
                {/* section heading */}
                <h2 className='font-heading text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text pb-10'>Frequently Asked Questions (FAQ)</h2>
                {/* Faq items start  */}
                <div className='divide-y divide-slate-300 divide-opacity-20 '>
                    {FAQ.map((faq, index) => (
                        <FaqItem key={index} Question={faq.question} Answer={faq.answer} isOpen={openIndex === index} toggleFAQ={() => toggleFAQ(index)} />
                    ))}
                </div>
                {/* faq items end  */}
            </div>
            {/* main container end  */}
        </section>
        // faq section end 
    )
}

// Faq item component 
const FaqItem = ({ Question, Answer, isOpen, toggleFAQ }) => {
    return (
        <div className='pt-3'>
            <div className='pb-3'>
                {/* FAQ item header --> Question  */}
                <button onClick={toggleFAQ} className='flex justify-between items-center gap-6 w-full cursor-pointer  group'>
                    {/* Question  */}
                    <h2 className='font-semibold md:text-md text-base text-left tracking-tight font-heading text-gray-200'>{Question}</h2>
                    {/* open ,close image */}
                    <img className='' src={isOpen ? IconMinus : IconPlus} alt="icon" />
                </button>
            </div>
            <div>
                {/* FAQ item body --> Answer  */}
                {isOpen && <p className='text-gray-400 font-text text-wrap text-sm font-light pb-5  animate-[dropFromUp_0.5s_ease-in-out]'>{Answer}</p>}
            </div>
        </div>
    )
}


export default FAQs