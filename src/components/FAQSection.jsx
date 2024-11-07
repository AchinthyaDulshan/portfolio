import React,{useState} from 'react'
import IconMinus from '../assets/images/icons/icon-minus.svg'
import IconPlus from '../assets/images/icons/icon-plus.svg'
import { FAQs } from '../constants/constants'

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id='faq'>
    <div className='py-16 max-w-screen-xl px-8 mx-auto '>
        <h2 className='font-heading text-2xl md:text-3xl lg:text-4xl text-center font-bold bg-gradient-to-r from-[#B9A14C] to-gray-700 text-transparent bg-clip-text pb-10'>Frequently Asked Questions (FAQ)</h2>
        <div className='divide-y divide-slate-300 divide-opacity-20 '>
                {FAQs.map((faq,index)=>(
                    <FaqItem key={index} Question={faq.question} Answer={faq.answer} isOpen={openIndex === index} toggleFAQ={() => toggleFAQ(index)}/> 
                ))}
            </div>
    </div>
    </section>
  )
}

const FaqItem = ({Question,Answer,isOpen,toggleFAQ}) => {
    return (
        <div className='pt-3'>
            <div className='pb-3'>
                {/* FAQ item header --> Question  */}
                <button onClick={toggleFAQ} className='flex justify-between items-center gap-6 w-full cursor-pointer  group'>
                    <h2 className='font-semibold md:text-lg text-base text-left tracking-tight group-hover:text-purple-on-star font-heading text-gray-200'>{Question}</h2>
                    <img className='' src={isOpen ? IconMinus : IconPlus} alt="icon" />
                </button>
            </div>
            <div>
                {/* FAQ item body --> Answer  */}
                {isOpen && <p className='text-gray-400 font-text text-wrap md:text-base text-sm font-light pb-5  animate-[dropFromUp_0.5s_ease-in-out]'>{Answer}</p>}
            </div>
        </div>
    )
}


export default FAQSection